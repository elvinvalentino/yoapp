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
    roomId: ID!
    users: [ID]!
    messages: [MessageDetail]!
    message: MessageDetail
  }

  type MessageDetail{
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }

  type ChatList{
    id: ID!
    user: User!
    lastMessage: MessageDetail!
  }

  type Query{
    users: [User]!
    chatList: [ChatList]!
    messages(userId: ID!): Message
  }

  type Mutation{
    register(userRegisterInput: UserRegisterInput!): User!
    login(userLoginInput: UserLoginInput!): User!
    sendMessage(userId: ID!, body: String!): MessageDetail!
  }

  type Subscription{
    newMessage(userId: ID!): Message!
  }
`;