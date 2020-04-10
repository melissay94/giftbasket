async function getCurrentUser(root, args, { currentUser, models }) {
  return models.user.findOne({
    where: {
      id: currentUser.userId
    }
  });
}

async function getAllBasket(root, args, { models }) {
  return models.basket.findAll();
}

async function getBasket(root, { id }, { models }) {
  return models.basket.findOne({
    where: {
      id: id
    }
  });
}

async function getAllGifts(root, args, { currentUser, models }) {
  const gifts = await models.gift.findAll();

  if (gifts.length > 0) {
    gifts = gifts.filter(item => {
      return item.user.userId !== currentUser.userId && item.isPublic;
    });
  }

  return gifts;
}

async function getGift(root, { id }, { models }) {
  return models.gift.findOne({
    where: {
      id: id
    }
  });
}

module.exports = {
  getCurrentUser,
  getAllBasket,
  getBasket,
  getAllGifts,
  getGift
}