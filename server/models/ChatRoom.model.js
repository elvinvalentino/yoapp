const { Schema, model } = require('mongoose');

const ChatRoomSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
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
        type: Date,
        required: true,
        default: Date.now
      },
      seenBy: [String]
    }
  ]
}, {
  timestamps: true
});

module.exports = model('ChatRoom', ChatRoomSchema);