// This file is adapted from module 21 activity 26
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { user }) => {
      return User.findOne({
        $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { user, book }) => {
      return User.findOneAndUpdate(
        { _id: user },
        {
          $addToSet: { books: book },
        },
        {
          new: true,
          runValidators: true,
        }
      )
    }
  },
};

module.exports = resolvers;
