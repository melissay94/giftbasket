const express = require("express");
const { gql, ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const app = express();
const port = 4000;

const resolvers = {
  Query,
  Mutation
}

const server = new ApolloServer({
  typeDefs, 
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port }, () => console.log(`We're all mad here on localhost:${port}${server.graphqlPath}`));