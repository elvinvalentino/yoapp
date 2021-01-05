const { combineResolvers: combine } = require('graphql-resolvers');
const { withFilter, AuthenticationError } = require('apollo-server')

const { isAuthenticated } = require('../middleware/authMiddleware');
const ChatRoom = require('../../models/ChatRoom.model');

module.exports = {
  Query: {
    chatList: combine(isAuthenticated, async (_, __, { user }) => {
      const chatRoom = await ChatRoom.find({ users: user.id })
        .sort('-updatedAt')
        .populate('users');

      return chatRoom;
    }),
    messages: combine(isAuthenticated, async (_, { userId }, { user }) => {
      let chatRoom = await ChatRoom.findOne({ users: { $all: [userId, user.id] } }).populate('users');

      // Create chat room if room doesn't exists
      if (!chatRoom) {
        const newChatRoom = new ChatRoom({
          users: [userId, user.id]
        })
        chatRoom = await (await newChatRoom.save()).populate('users').execPopulate();
      }

      return chatRoom;
    })
  },
  Mutation: {
    sendMessage: combine(isAuthenticated, async (_, { userId, body }, { user, pubsub }) => {
      const chatRoom = await ChatRoom.findOne({ users: { $all: [userId, user.id] } });

      chatRoom.messages.push({
        userId: user.id,
        username: user.username,
        body,
      })

      const newChatroom = await (await chatRoom.save()).populate('users').execPopulate();

      pubsub.publish('NEW_MESSAGE', {
        newMessage: newChatroom
      })

      return newChatroom;
    })
  },
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        (_, __, { user, pubsub }) => {
          if (!user) throw new AuthenticationError("Unauthorized");
          return pubsub.asyncIterator("NEW_MESSAGE");
        },
        ({ newMessage }, _, { user }) => newMessage.users.some(u => u._id == user.id)
      )
    }
  }
}