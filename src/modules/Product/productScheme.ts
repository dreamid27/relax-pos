import { gql } from "apollo-server";
import productController from "./productController";

export const typeDefs = gql`
  type Product {
    name: String
    price: Float
  }

  extend type Query {
    products: [Product]
  }

  extend type Mutation {
    addProducts(name: String, price: Float): Product
  }
`;

export const resolvers = {
  Query: {
    products: productController.getProducts,
  },
  Mutation: {
    addProducts: productController.createProduct,
  },
};

export default {
  typeDefs,
  resolvers,
};
