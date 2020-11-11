const { UserInputError } = require('apollo-server-express');

module.exports.throwError = err => {
  if (err.name == 'ValidationError') {
    let errors = {};
    err.inner.forEach(err => {
      errors[err.path] = err.message
    });
    throw new UserInputError("User input error", { errors })
  };
  throw new Error(err);
}