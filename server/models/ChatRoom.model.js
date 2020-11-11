const { Schema, model } = require('mongoose');

const ChatRoomSchema = new Schema({
  users: [String],
  messages: [
    {
      username: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      },
      createdAt: {
        type: String,
        required: true
      },
      seenBy: [String]
    }
  ]
}, {
  timestamps: true
});

module.exports = model('ChatRoom', ChatRoomSchema);