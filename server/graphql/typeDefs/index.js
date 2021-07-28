const typeDefs = `
  type Image {
    file: String!,
    name: String!,
    type: String!,
  }

  type Query {
    images: [Image]
  }

  type Mutation {
    addImage(file: String): Image
  }
`;

module.exports = { typeDefs };
