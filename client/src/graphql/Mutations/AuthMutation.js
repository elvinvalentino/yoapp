import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation register(
    $username: String!,
    $email: String!,
    $password: String!,
    $confirmPassword: String!
  ){
    register(userRegisterInput: {
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    }){
      id
      username
      email
    }
}
`;