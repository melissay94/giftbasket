async function getUser(root, { id }, { models }) {
  return models.user.findOne({
    where: {
      id: id
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

async function getAllGifts(root, args, { models }) {
  return models.gift.findAll();
}

async function getGift(root, { id }, { models }) {
  return models.gift.findOne({
    where: {
      id: id
    }
  });
}

module.exports = {
  getUser,
  getAllBasket,
  getBasket,
  getAllGifts,
  getGift
}