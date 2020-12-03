import { gql } from '@apollo/client';

export const NEW_MESSAGE = gql`
  subscription newMessage{
    newMessage{
      from{
        id
        username
      }
      lastMessage{
        id
        userId
        username
        body
        createdAt
      }
    }
  }
`