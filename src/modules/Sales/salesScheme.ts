import { gql } from "apollo-server";
import productController from "./salesController";

export const typeDefs = gql`
  type Sales {
    customerName: String
    total: Float
  }

  extend type Mutation {
    addSales(customerName: String, total: Float, orderDate: String): Sales
  }
`;

export const resolvers = {
  Mutation: {
    addSales: productController.createSales,
  },
};

export default {
  typeDefs,
  resolvers,
};
