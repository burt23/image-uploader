const Image = require("../../models/image");
/**
 Resolvers Map
 Define's the technique for fetching the types defined in the schema. 
 The map below corresponds the the schema declarations in the typeDefs file.
 Supported fields include Query, Mutation, Subscription keys. See [https://graphql.org/](graphql
 docs) for further info.
 */
const resolvers = {
  Query: {
    images: async () => {
      try {
        const images = Image.findAll();
        return images;
      } catch (error) {
        console.error("error getting images", error);
        throw new Error(error);
      }
    },
  },
  Mutation: {
    addImage: async (_, { input }) => {
      try {
        const image = new Image(input);
        await image.save();
        return image;
      } catch (error) {
        console.error("Unable to complete addImage Mutation.\n Error:", error);
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
