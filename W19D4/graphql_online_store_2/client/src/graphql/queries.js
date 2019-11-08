import gql from "graphql-tag";

export const FETCH_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;

export const FETCH_PRODUCT = gql`
  query FetchProduct($_id: ID!) {
    product(_id: $_id) {
      _id
      name
      description
      weight
    }
  }
`;

export const FETCH_CATEGORIES = gql`
  query FetchCategories {
    categories {
      _id
      name
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;