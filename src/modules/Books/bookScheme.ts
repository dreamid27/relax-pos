import { gql } from "apollo-server";
import bookController from './bookController';

const books = [
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
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }

  extend type Mutation {
    addBooks(title: String, author: String): Book
  }
`;

export const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    addBooks: bookController.createBooks
  }
}


export default {
  typeDefs,
  resolvers
}