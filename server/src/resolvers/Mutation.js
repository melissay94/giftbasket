const jwt = require("jsonwebtoken");
require("dotenv").config();

async function signup(root, { email, password, name }, { currentUser, models }) {
  const [user, created] = await models.user.findOrCreate({
    where: {
      email: email
    },
    defaults: {
      email,
      password,
      name
    }
  });

  if (created) {

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, { expiresIn: `${60 * 60 * 24}s`});
  
    return {
      token, 
      user
    }
  } else {
    throw new Error("Error, user already exists");
  }
}

async function login(root, { email, password }, { currentUser, models }) {
  
  const user = await models.user.findOne({
    where: {
      email: email
    }
  });

  if (!user || !user.validPassword(password)) {
    throw new Error("Could not find user");
  } else {
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, { expiresIn: `${60 * 60 * 24}s`});
    return {
      user,
      token
    }
  }
}

async function createBasket(root, { name, birthdate, address, gifts, existingGiftIds }, { currentUser, models }) {
  const basket = await models.basket.create({
    name,
    birthdate,
    address,
    userId: currentUser.userId
  });

  const currentUserObj = await models.user.findOne({
    where: {
      id: currentUser.userId
    }
  });

  if (basket) {
    const createdGifts = await Promise.all(
      gifts.map(giftPayload => {
        return createGift(root, {
          title: giftPayload.title,
          description: giftPayload.description || "",
          link: giftPayload.link || null,
          image: giftPayload.image || null,
          isPublic: giftPayload.isPublic
        }, {
          currentUser,
          models
        });
    }));

    const newGiftIds = createdGifts.map(gift => {
      return gift.id;
    });

    await Promise.all(newGiftIds.map(giftId => {
      return Promise.all([
        basket.addGift(giftId),
        currentUserObj.addGift(giftId)
      ]);
    }));

    await Promise.all(existingGiftIds.map(giftId => {
      return basket.addGift(giftId);
    }));

    return basket;
  }

  throw new Error("Could not create basket");
}

async function editBasket(root, { id, name, birthdate, address }, { currentUser, models }) {
 const basket = await models.basket.findOne({
   where: {
     id
   }
 });

 if (basket && basket.userId === currentUser.userId) {
   const updatedBasket = await basket.update({
     name: name || basket.name,
     birthdate: birthdate || basket.birthdate,
     address: address || basket.address
   });

   if (updatedBasket) {
     return updatedBasket;
   } else {
     throw new Error(`Unable to update basket ${basket.name}`);
   }
 } else {
   throw new Error("Unable to find basket");
 }
}

async function deleteBasket(root, { id }, { currentUser, models }) {
    const basket = await models.basket.findOne({
      where: {
        id
      }
    });

    const user = await models.user.findOne({
      where: {
        id: currentUser.userId
      }
    });

    const gifts = await basket.getGifts();

    if (basket.userId === user.id) {

      await basket.removeGifts(gifts);

      const numDeleted = await models.basket.destroy({
        where: {
          id
        }
      });

      return numDeleted > 0;
    }
}

async function createGift(root, { title, description, link, image, isPublic }, { currentUser, models }) {
  
  const gift = await models.gift.create({
    title,
    description, 
    link, 
    image,
    isPublic
  });

  const user = await models.user.findOne({
    id: currentUser.userId
  })

  if (gift) {
    if (user) {
      user.addGift(gift);
    }
    return gift;
  } else {
    throw new Error("Gift could not be created");
  }
}

async function editGift(root, { id, title, description, link, image, isPublic}, { currentUser, models }) {
  const gift = await models.gift.findOne({
    where: {
      id
    }
  });
  
  if (gift && !gift.isPublic) {
    const updatedGift = await gift.update({
      title: title || gift.title,
      description: description || gift.description,
      link: link || gift.link,
      image: image || gift.image,
      isPublic: isPublic || gift.isPublic
    });
    
    if (updatedGift) {
      return updatedGift;
    } else {
      throw new Error(`Cannot update gift ${gift.title}`)
    }

  } else {
    throw new Error("Cannot edit gift");
  }
}

async function deleteGift(root, { id }, { currentUser, models }) {
  /*
    1. Find gift by id and get all users associated with it
    2. If more than currentUser are associated with it, remove user id from gift user array
    3. If just you are associated with it, delete the gift and remove it's entry from the join table
  */
 const gift = await models.gift.findOne({
   where: {
     id
   }
 });

 const users = await gift.getUsers();
 const baskets = await gift.getBaskets();

 if (users.length > 1) {
   const currentUserBaskets = baskets.filter(basket => {
     return basket.userId === currentUser.userId;
   });

   await gift.removeBaskets(currentUserBaskets);

   const user = await models.user.findOne({
     where: {
       id: currentUser.userId
     }
   });

   await user.removeGifts(gift);

   return true;

 } else {
  await gift.removeUsers(users);
  await gift.removeBaskets(baskets);

  const numDeleted = await models.gift.destroy({
    where: {
      id 
    }
  });

  return numDeleted > 0;
 }
}

async function removeGiftFromBasket(root, { basketId, giftId }, { currentUser, models }) {

  const basket = await models.basket.findOne({
    where: { id: basketId }
  });

  const gift = await models.gift.findOne({
    where: { id: giftId }
  });

  if (basket && gift) {
    return await basket.removeGifts(gift);
  }
  
}

async function addGiftToUser(root, { id }, { currentUser, models }) {
  /*
    1. Find gift by id
    2. Check if your user already has this gift id
    3. If not, then add this gift id to user, and add user to gift id
    4. Return boolean for if added or not
   */
  const gift = await models.gift.findOne({
    where: { id }
  });

  const user = await models.user.findOne({
    where: { id: currentUser.userId },
    include: models.gift
  });

  if (user) {
    const giftIds = user.gifts.map(userGifts => {
      return userGifts.id;
    });

    if (gift) {
      if (giftIds.includes(gift.id)) {
        throw new Error("Gift already added to user");
      } else {
        await gift.addUsers(user);
        return true;
      }
    } else {
      throw new Error("Gift could not be found");
    }
  } else {
    throw new Error("User could not be found");
  }
}

async function addGiftToBasket(root, { basketId, giftId }, { currentUser, models }) {
  /**
   * Find gift by id
   * Find basket by id
   * Ensure that neither has an entry of the other
   * If not, add gift id to basket, and basket id to gift
   * Return boolean for if added or not
   */
}

module.exports = {
  signup,
  login,
  createBasket,
  editBasket,
  deleteBasket,
  createGift,
  editGift,
  deleteGift,
  removeGiftFromBasket,
  addGiftToUser,
  addGiftToBasket,
};