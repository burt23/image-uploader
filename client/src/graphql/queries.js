import { gql } from "@apollo/client";

export const GET_IMAGES = gql`
  query {
    images {
      file
    }
  }
`;

export const SAVE_IMAGES = gql`
  query {
    images {
      file
    }
  }
`;
