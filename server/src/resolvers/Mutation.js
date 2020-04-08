const jwt = require("jsonwebtoken");
require("dotenv").config();

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

async function signup(root, { email, password, name }, { models }) {
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

async function login(root, { email, password }, { models }) {
  const user = await models.user.findOne({
    where: {
      email: email
    }
  });

  if (!user || !user.validPassword(password)) {
    return "Error, can't log in"
  } else {
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, { expiresIn: `${60 * 60 * 24}s`});
    return {
      user,
      token
    }
  }
}

module.exports = {
  createBasket,
  createGift,
  signup,
  login
};