// This file is adapted from module 21 activity 26
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String
      authors: String
      description: String
      title: String
      image: String
      link: String): Auth
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
