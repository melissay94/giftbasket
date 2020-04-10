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

type AuthPayload {
  token: String
  user: User
}

type Basket {
  id: Int!
  name: String!
  birthdate: String
  address: String
  gifts: [Gift!]!
  user: User!
}

input CreateGiftInput {
  id: Int!
  title: String!
  description: String
  link: String
  image: String
  isPublic: Boolean!
  basketId: Int!
}

type Gift {
  id: Int!
  title: String!
  description: String
  link: String
  image: String
  isPublic: Boolean!
  users: [User!]!
  baskets: [Basket!]!
}

type Query {
  getCurrentUser: User
  getAllBasket: [Basket!]!
  getBasket(id: Int!): Basket
  getAllGifts: [Gift!]!
  getGift(id: Int!): Gift
}

type Mutation {
  createBasket(name: String!, birthdate: String, address: String, userId: Int!, gifts: [CreateGiftInput]): Basket!
  createGift(title: String!, description: String, link: String, image: String, isPublic: Boolean!): Gift
  signup(email: String!, password: String!, name: String): AuthPayload
  login(email: String!, password: String!): AuthPayload
}
`;

module.exports = typeDefs;