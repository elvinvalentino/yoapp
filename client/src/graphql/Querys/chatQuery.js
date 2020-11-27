import { gql } from '@apollo/client';

export const GET_CHAT_LIST_QUERY = gql`
  query chatList{
    chatList{
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
    }
  }
`;