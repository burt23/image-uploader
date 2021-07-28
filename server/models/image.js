const { Model, Sequelize, DataTypes } = require("sequelize");
const client = require("../db");

class Image extends Model {}

Image.init(
  {
    file: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
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
