import { gql } from "apollo-server";

const categories = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const typeDefs = gql`
  type Category {
    title: String
    author: String
  }

  extend type Query {
    category: [Category]
  }
`;

export const resolvers = {
  Query: {
    categories: () => categories
  }
}


export default {
  typeDefs,
  resolvers
}