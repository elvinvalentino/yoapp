const { gql } = require('apollo-server-express');

module.exports = gql`
  input UserRegisterInput{
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type User{
    id: ID!
    username: String!
    email: String!
    token: String
  }

  type Query{
    users: [User]!
  }

  type Mutation{
    register(userRegisterInput: UserRegisterInput): User!
  }
`;