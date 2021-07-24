const { Sequelize } = require("sequelize");
const { DEV_MODE, DB_URL } = require("../config");

console.log("creating client", DB_URL);
const client = new Sequelize(DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: DEV_MODE ? false : true,
  },
});

client
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = client;
