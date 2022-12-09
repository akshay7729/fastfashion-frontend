import { gql } from "@apollo/client";

export const PLP_QUERY = gql`
  query {
    products {
      id
      title
      price
      description
      category
      image
      rating {
        count
        rate
      }
    }
  }
`;

export const PLP_QUERY_TITLE = gql`
  query PLP_QUERY_TITLE {
    products {
      id
      title
    }
  }
`;
