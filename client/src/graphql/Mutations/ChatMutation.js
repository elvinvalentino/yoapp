import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation sendMessage(
    $userId: ID!, 
    $body: String!
  ){
  sendMessage(
    userId: $userId
    body: $body
  ){
    lastMessage{
      id
      username
      body
      createdAt
    }
  }
}
`;