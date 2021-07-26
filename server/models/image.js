const { Model, DataTypes } = require("sequelize");
// TODO seed db
const client = require("../db");

class Image extends Model {}

Image.init(
  {
    file: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: client,
    modelName: "image",
  }
);

Image.sync();

module.exports = Image;
