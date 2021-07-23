const {
  DATABASE_URL = "",
  DEV_MODE = false,
  POINT_APP_POSTGRES_DB = false,
  PORT = 3300,
} = process.env;

// you may need to run ```createdb graphql``` from the cmd line if don't already have a db named "graphql"
const DB_NAME = "image-uploader";
const LOCAL_DB = `postgres://localhost:5432/${DB_NAME}`;
const LOCAL_URL = `http://localhost:${PORT}`;

const WANTS_DEV_MODE = DEV_MODE == "false" ? false : true;

const DB_URL = POINT_APP_POSTGRES_DB == false ? DATABASE_URL : LOCAL_DB;
const BASE_URL = WANTS_DEV_MODE
  ? LOCAL_URL
  : "https://image-uploader.herokuapp.com"; // TODO

module.exports = { WANTS_DEV_MODE, DB_URL, BASE_URL, PORT };
