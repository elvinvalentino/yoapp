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
  },
  Subscription: {
    ...chatResolvers.Subscription
  },
  ChatRoom: {
    from: (parent, _, { user }) => {
      let fromUser = parent.users.find(u => u.id != user.id);
      return {
        ...fromUser._doc,
        id: fromUser.id.toString()
      }
    },
    lastMessage: parent => parent.messages[parent.messages.length - 1]
  }
}