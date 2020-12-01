import { gql } from '@apollo/client';

export const GET_CHAT_LIST_QUERY = gql`
  query chatList{
    chatList{
      id
      from{
        id
        username
        email
      }
      lastMessage{
        id
        username
        body
        createdAt
      }
    }
  }
`;

export const GET_MESSAGES = gql`
  query messages($userId: ID!){
    messages(userId: $userId){
      id
      from{
        id
        username
      }
      lastMessage{
        id
        username
        body
        createdAt
      }
      messages{
        id
        userId
        username
        body
        createdAt
      }
    }
  }
`