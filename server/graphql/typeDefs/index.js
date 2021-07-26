const typeDefs = `
input ImageInput {
      file: Float,
  }
  type Image {
      file: Float,
  }

  type Query {
      images: [Image]
  }

  type Mutation {
      addImage(file: String): Image
  }
`;

module.exports = { typeDefs };
