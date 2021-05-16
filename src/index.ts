import { ApolloServer } from "apollo-server";
import modules from './modules'
import mongoose from "mongoose";
import initialConnection from './services/connector';

//use dotenv
require("dotenv").config();
//use dotenv safe to validation is env exactly same
require("dotenv-safe").config();

//connect mongoDB
initialConnection();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  modules: modules
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});