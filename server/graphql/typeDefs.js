const { gql } = require('apollo-server');

module.exports = gql`
  input UserRegisterInput{
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input UserLoginInput{
    email: String!
    password: String!
  }

  type User{
    id: ID!
    username: String!
    email: String!
    token: String
  }

  type Message{
    id: ID!
    userId: ID!
    username: String!
    body: String!
    createdAt: String!
  }

  type ChatRoom{
    id: ID!
    users: [User]!
    messages: [Message]!
    from: User!
    lastMessage: Message
  }

  type Query{
    users: [User]!
    chatList: [ChatRoom]!
    messages(userId: ID!): ChatRoom!
  }

  type Mutation{
    register(userRegisterInput: UserRegisterInput!): User!
    login(userLoginInput: UserLoginInput!): User!
    sendMessage(userId: ID!, body: String!): ChatRoom!
  }

  type Subscription{
    newMessage: ChatRoom!
  }
`;