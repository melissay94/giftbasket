async function getUser(root, { id }, { models }) {
  return models.user.findbyPk(id);
}

async function getAllBasket(root, args, { models }) {
  return models.basket.findAll();
}

async function getBasket(root, { id }, { models }) {
  return models.basket.findbyPk(id);
}

async function getAllGifts(root, args, { models }) {
  return models.gift.findAll();
}

async function getGift(root, { id }, { models }) {
  return models.gift.findbyPk(id);
}

module.exports = {
  getUser,
  getAllBasket,
  getBasket,
  getAllGifts,
  getGift
}