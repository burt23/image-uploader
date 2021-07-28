const typeDefs = `
  type Image {
    file: String!
    name: String!
    type: String
  }

  type Query {
    images: [Image]
    search: String!
  }

  type Mutation {
    addImage(file: String!, name: String!, type: String): Image
  }
`;

module.exports = { typeDefs };
