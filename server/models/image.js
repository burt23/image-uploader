const { Model, Sequelize } = require("sequelize");
const client = require("../db");

class Image extends Model {}

Image.init(
  {
    file: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: client,
    modelName: "image",
  }
);

// TODO seed db
Image.sync();

module.exports = Image;
