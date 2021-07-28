const typeDefs = `
  type Image {
    file: String!
    name: String!
    type: String
  }

  type Query {
    images: [Image]
    search(terms: String!): [Image]
  }

  type Mutation {
    addImage(file: String!, name: String!, type: String): Image
  }
`;

module.exports = { typeDefs };
