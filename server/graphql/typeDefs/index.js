const typeDefs = `
  type Image {
      file: String,
      id: ID
  }

  type Query {
      images: [Image]
  }

  input ImageInput {
      file: String,
  }

  type Mutation {
      addImage(input: ImageInput): Image
  }
`;

module.exports = { typeDefs };
