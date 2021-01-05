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

export const LOGIN_MUTATION = gql`
  mutation login(
    $email: String!,
    $password: String!
  ){
    login(userLoginInput: {
      email: $email
      password: $password
    }){
      id
      username
      email
      token
    }
}
`;