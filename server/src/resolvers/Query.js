async function getUser(root, { id }, { models }) {
  return models.User.findbyPk(id);
}

async function getAllBasket(root, args, { models }) {
  return models.Basket.findAll();
}

async function getBasket(root, { id }, { models }) {
  return models.Basket.findbyPk(id);
}

async function getAllGifts(root, args, { models }) {
  return models.Gift.findAll();
}

async function getGift(root, { id }, { models }) {
  return models.Gift.findbyPk(id);
}

module.exports = {
  getUser,
  getAllBasket,
  getBasket,
  getAllGifts,
  getGift
}