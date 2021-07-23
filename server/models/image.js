const { Model, DataTypes } = require("sequelize");
// TODO seed db
const client = require("../db");

class Image extends Model {}

Image.init(
  {
    file: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize: client,
    modelName: "image",
  }
);

Image.sync();

module.exports = Image;
