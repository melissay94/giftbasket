const express = require("express");
const { gql, ApolloServer } = require("apollo-server-express");

const app = express();
const port = 4000;

const typeDefs = gql`
  type Query {
    info: String!
  }`;

const resolvers = {
  Query: {
    info: () => "Try this again",
  }
}

const server = new ApolloServer({
  typeDefs, 
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port }, () => console.log(`We're all mad here on localhost:${port}${server.graphqlPath}`));