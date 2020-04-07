const express = require("express");
const { gql, ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const models = require("../models");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Basket = require("./resolvers/Basket");
const Gift = require("./resolvers/Gift");

const app = express();
const port = 4000;

const resolvers = {
  Query,
  Mutation,
  User,
  Basket,
  Gift
}

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: { models }
});

server.applyMiddleware({ app });
models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port }, () => console.log(`We're all mad here on localhost:${port}${server.graphqlPath}`));