const typeDefs = `
input ImageInput {
      file: String,
  }
  type Image {
      file: String,
  }

  type Query {
      images: [Image]
  }

  

  type Mutation {
      addImage(input: ImageInput): Image
  }
`;

module.exports = { typeDefs };
