const { UserInputError } = require('apollo-server-express');

module.exports = {
  throwSchemaError: err => {
    let errors = {};
    err.inner.forEach(err => {
      if (!errors[err.path]) errors[err.path] = err.message;
    });
    throw new UserInputError("User input error", { errors })
  }
}