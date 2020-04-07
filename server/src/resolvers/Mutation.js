async function createUser(root, { email, password, name }, { models }) {
  return models.user.create({
    email,
    password,
    name
  });
}

async function createBasket(root, { name, birthdate, address, userId }, { models }) {
  return models.basket.create({
    name,
    birthdate,
    address,
    userId
  });
}

async function createGift(root, { title, description, link, image, is_public }, { models }) {
  return models.gift.create({
    title,
    description, 
    link, 
    image,
    is_public
  });
}

module.exports = {
  createUser,
  createBasket,
  createGift
};