import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;
  
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $description: String!, $weight: Float!, $category: ID!) {
    newProduct(name: $name, description: $description, weight: $weight, category: $category) {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;