
  // createUser(email: String!, password: String!, name: String): User
  // createBasket(name: String!, birthdate: String, address: String, userId: Int!): Basket!
  // createGift(title: String!, description: String, link: String, image: String, is_public: Boolean!): Gift

async function createUser(root, { email, password, name }, { models }) {
  return models.User.create({
    email,
    password,
    name
  });
}

async function createBasket(root, { name, birthdate, address, userId }) {
  return models.Basket.create({
    name,
    birthdate,
    address,
    userId
  });
}

async function createGift(root, { title, description, link, image, isPublic }) {
  return models.Gift.create({
    title,
    description, 
    link, 
    image,
    isPublic
  });
}

module.exports = {
  createUser,
  createBasket,
  createGift
};