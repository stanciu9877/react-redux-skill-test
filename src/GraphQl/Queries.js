import { gql } from "@apollo/client";

export const LOAD_QUERY = gql`
  {
    category {
      name
      products {
        id
        description
        name
        inStock
        gallery
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }

        prices {
          currency
          amount
        }
      }
    }
  }
`;
