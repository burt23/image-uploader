const {
  DATABASE_URL = "",
  IMAGE_UPLOADER_DEV_MODE: DEV_MODE = false,
  PORT = 3300,
} = process.env;

// you may need to run ```createdb graphql``` from the cmd line if don't already have a db named "graphql"
const DB_NAME = "image-uploader";
const LOCAL_DB = `postgres://localhost:5432/${DB_NAME}`;
const LOCAL_URL = `http://localhost`;

const DB_URL = DEV_MODE ? LOCAL_DB : DATABASE_URL;

const BASE_URL = DEV_MODE ? LOCAL_URL : "https://image-uploader.herokuapp.com"; // TODO

module.exports = { DB_URL, BASE_URL, PORT, DEV_MODE };
