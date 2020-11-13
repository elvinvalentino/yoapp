const { combineResolvers: combine } = require('graphql-resolvers');
const { withFilter, AuthenticationError } = require('apollo-server')

const { isAuthenticated } = require('../middleware/authMiddleware');
const ChatRoom = require('../../models/ChatRoom.model');

module.exports = {
  Query: {
    chatList: combine(isAuthenticated, async (_, __, { user }) => {
      const chatList = await ChatRoom.find({ users: user.id })
        .sort('-updatedAt')
        .populate('users', '-password');

      const response = chatList.map(chat => ({
        id: chat._id,
        user: chat.users.find(u => u.id != user.id),
        lastMessage: chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : { username: '', body: 'Start a chat', createdAt: '' },
      }));

      return response;
    }),
    messages: combine(isAuthenticated, async (_, { userId }, { user }) => {
      let chatRoom = await ChatRoom.findOne({ users: { $all: [userId, user.id] } });

      // Create chat room if room doesn't exists
      if (!chatRoom) {
        const newChatRoom = new ChatRoom({
          users: [userId, user.id]
        })
        chatRoom = await newChatRoom.save();
      }

      const response = {
        roomId: chatRoom._id,
        users: chatRoom.users,
        messages: chatRoom.messages
      };

      return response;
    })
  },
  Mutation: {
    sendMessage: combine(isAuthenticated, async (_, { userId, body }, { user, pubsub }) => {
      const chatRoom = await ChatRoom.findOne({ users: { $all: [userId, user.id] } });

      chatRoom.messages.push({
        username: user.username,
        body,
      })

      let response = await chatRoom.save();


      pubsub.publish('NEW_MESSAGE', {
        newMessage: {
          roomId: response._id,
          users: response.users,
          message: response.messages[response.messages.length - 1]
        }
      })

      response = response.messages[response.messages.length - 1];

      return {
        id: response._id,
        username: response.username,
        body: response.body,
        createdAt: response.createdAt
      };
    })
  },
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        (_, __, { user, pubsub }) => {
          if (!user) throw new AuthenticationError("Unauthorized");
          return pubsub.asyncIterator("NEW_MESSAGE");
        },
        ({ newMessage }, _, { user }) => newMessage.users.includes(user.id)
      )
    }
  }
}