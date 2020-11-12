const { UserInputError } = require('apollo-server');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User.model');
const { registerInputSchema, loginInputSchema } = require('../../utils/validators/');
const { throwSchemaError } = require('../../utils/errors/');

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
      const { email, username, password } = await registerInputSchema.validate(userRegisterInput, {
        abortEarly: false
      }).catch(err => throwSchemaError(err));

      // Check if email already exist
      const isExist = await User.findOne({ email });
      if (isExist) {
        throw new UserInputError('User input test', {
          errors: {
            email: 'email is already taken'
          }
        });
      }

      const user = new User({
        username,
        email,
        password: await bcrypt.hash(password, 10)
      });
      const response = await user.save();
      return response;
    },
    login: async (_, { userLoginInput }) => {
      // Validate request body
      const { email, password } = await loginInputSchema.validate(userLoginInput, {
        abortEarly: false
      }).catch(err => throwSchemaError(err));

      const user = await User.findOne({ email });
      if (!user) throw new UserInputError('email not found', {
        errors: {
          email: 'email not found'
        }
      });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new UserInputError('Wrong credentials', {
        errors: {
          password: 'wrong credentials'
        }
      });

      const token = jwt.sign({
        id: user.id,
        username: user.username
      }, process.env.JWT_SECRET, { expiresIn: '1h' });


      return {
        ...user._doc,
        id: user._id,
        token
      }
    }
  }
}