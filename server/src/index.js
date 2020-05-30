const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const typeDefs = require("./schema");
const models = require("../models");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Basket = require("./resolvers/Basket");
const Gift = require("./resolvers/Gift");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const authenitcate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null || token == "") {
    return next();
  }

  jwt.verify(token, process.env.APP_SECRET, (err, user) => {
    if(err) {
      console.log(err, token);
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

app.use(authenitcate);

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
  context: ({ req }) => {
    return {
    currentUser: req.user,
    models,
  }},
});

server.applyMiddleware({ app });
models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port }, () => console.log(`We're all mad here on localhost:${port}${server.graphqlPath}`));