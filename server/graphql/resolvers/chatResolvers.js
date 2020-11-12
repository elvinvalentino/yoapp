const { combineResolvers: combine } = require('graphql-resolvers');

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
        lastMessage: chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : { username: '', body: 'Start a chat' },
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

      const response = chatRoom.messages;

      return response;
    })
  }
}