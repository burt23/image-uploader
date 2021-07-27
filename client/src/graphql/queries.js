import { gql } from "@apollo/client";

export const GET_IMAGES = gql`
  query {
    images {
      file
    }
  }
`;

export const ADD_IMAGE = gql`
  mutation AddImage($file: String!) {
    addImage(file: $file) {
      file
    }
  }
`;
