const userResolvers = require('./userResolvers');
const chatResolvers = require('./chatResolvers');

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...chatResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...chatResolvers.Mutation
  }
}