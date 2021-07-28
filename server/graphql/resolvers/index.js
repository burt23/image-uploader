const Image = require("../../models/image");
const { Op } = require("sequelize");
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
        const images = await Image.findAll();
        return images;
      } catch (error) {
        throw new Error(error);
      }
    },
    search: async (_, query) => {
      try {
        const { terms } = query;
        const images = await Image.findAll({
          where: {
            name: {
              [Op.iLike]: `%${terms}%`,
            },
          },
        });
        return images;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    addImage: async (_, file) => {
      try {
        const image = new Image(file);
        await image.save();
        return image;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
