import { gql } from "@apollo/client";

export const GET_IMAGES = gql`
  query {
    images {
      file
      name
      type
    }
  }
`;

export const ADD_IMAGE = gql`
  mutation AddImage($file: String!, $name: String!, $type: String) {
    addImage(file: $file, name: $name, type: $type) {
      file
      name
      type
    }
  }
`;
