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
    return "Error, user already exists";
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

async function createBasket(root, { name, birthdate, address, gifts }, { currentUser, models }) {
  const basket = await models.basket.create({
    name,
    birthdate,
    address,
    userId: currentUser.userId
  });

  console.log("Gifts:", gifts);

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

    await Promise.all(createdGifts.map(gift => {
      return gift.addBasket(basket.id);
    }));

    await Promise.all(createdGifts.map(gift => {
      return gift.addUser(currentUser.userId);
    }))
  }

  return basket;
}

async function editBasket(root, { id, name, birthdate, address }, { currentUser, models }) {
  /*
    1. Attempt to find the basket using the id passed in
    2. Ensure the returned basket's user id matches currentUser's user id
    3. Update any fields that have a value and keep fields that are the same
    4. Return the updated object
  */
}

async function deleteBasket(root, { id }, { currentUser, models }) {
  /*
    1. Attempt to find the basket using the id passed in
    2. Ensure the returned basket's user id matches the currentUser's user id
    3. Attempt to delete the basket
    4. Remove the basket id from all gifts that have it
    5. Return a boolean for if it was deleted or not
  */
}

async function createGift(root, { title, description, link, image, isPublic }, { currentUser, models }) {
  
  const gift = models.gift.create({
    title,
    description, 
    link, 
    image,
    isPublic
  });

  return gift || "No gift created";
}

async function editGift(root, { id, title, description, link, image, isPublic}, { currentUser, models }) {
  /*
    1. Attempt to find gift by id tag
    2. Update all fields that have values passed in for it
    3. Return updated gift
  */
}

async function deleteGift(root, { id }, { currentUser, models }) {
  /*
    1. Find gift by id and get all users associated with it
    2. If more than currentUser are associated with it, remove user id from gift user array
    3. If just you are associated with it, delete the gift and remove it's entry from the join table
  */
}

async function addGiftToUser(root, { id }, { currentUser, models }) {
  /*
    1. Find gift by id
    2. Check if your user already has this gift id
    3. If not, then add this gift id to user, and add user to gift id
    4. Return boolean for if added or not
   */
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
  deleteGift,
  addGiftToUser,
  addGiftToBasket,
};