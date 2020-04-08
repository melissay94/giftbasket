const express = require("express");
const { gql, ApolloServer } = require("apollo-server-express");
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
const port = 4000;

const authenitcate = (req, res, next) => {
  console.log(req);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.sendStatus(401).json({ message: "Not Authorized" });
  }

  jwt.verify(token, process.env.APP_SECRET, (err, user) => {
    if(err) {
      return res.sendStatus(403).json({ message: "User not Found" });
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
  context: { models }
});

server.applyMiddleware({ app });
models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port }, () => console.log(`We're all mad here on localhost:${port}${server.graphqlPath}`));