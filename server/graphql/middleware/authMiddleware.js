const { AuthenticationError } = require('apollo-server');
const { skip } = require('graphql-resolvers');

module.exports = {
  isAuthenticated: (_, __, { user }) => user ? skip : new AuthenticationError('Unauthorized')
}