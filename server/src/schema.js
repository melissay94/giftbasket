const { gql } = require("apollo-server-express");

const typeDefs = gql`

type User {
  id: Int!
  email: String!
  password: String!
  name: String
  baskets: [Basket!]!
  gifts: [Gift!]!
}

type Basket {
  id: Int!
  name: String!
  birthdate: String
  address: String
  gifts: [Gift!]!
  user: User!
}

type Gift {
  id: Int!
  title: String!
  description: String
  link: String
  image: String
  is_public: Boolean!
  users: [User!]!
  baskets: [Basket!]!
}

type Query {
  getUser(id: Int!): User
  getAllBasket: [Basket!]!
  getBasket(id: Int!): Basket
  getAllGifts: [Gift!]!
  getGift(id: Int!): Gift
}

type Mutation {
  createUser(email: String!, password: String!, name: String): User
  createBasket(name: String!, birthdate: String, address: String, userId: Int!): Basket!
  createGift(title: String!, description: String, link: String, image: String, is_public: Boolean!): Gift
}
`;

module.exports = typeDefs;