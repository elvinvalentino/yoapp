const bcrypt = require('bcryptjs');

const User = require('../../models/User.model');
const { throwError } = require('../../utils/');
const { registerInputSchema } = require('../../utils/validator');

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
      try {
        const newUser = await registerInputSchema.validate(userRegisterInput, { abortEarly: false });
        newUser.password = await bcrypt.hash(newUser.password, 10);

        const user = new User(newUser);
        const response = await user.save();
        return response;
      } catch (err) {
        throwError(err);
      }
    }
  }
}