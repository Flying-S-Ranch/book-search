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
    authors: [Author]
    description: String
    title: String
    image: String
    link: String
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String
      authors: [Author]
      description: String
      title: String
      image: String
      link: String): Auth
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
