const { UserInputError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');

const User = require('../../models/User.model');
const { throwSchemaError } = require('../../utils/errors/');
const { registerInputSchema } = require('../../utils/validators/');

module.exports = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    register: async (_, { userRegisterInput }) => {
      // Validate request body
      const newUser = await registerInputSchema.validate(userRegisterInput, {
        abortEarly: false
      }).catch(err => throwSchemaError(err));

      // Check if email already exist
      const isExist = await User.findOne({ email: newUser.email });
      if (isExist) {
        throw new UserInputError('User input test', {
          errors: {
            email: 'email is already taken'
          }
        });
      }

      newUser.password = await bcrypt.hash(newUser.password, 10);

      const user = new User(newUser);
      const response = await user.save();
      return response;
    }
  }
}