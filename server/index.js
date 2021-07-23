const express = require("express");
const { PORT, BASE_URL } = require("./config");

const app = express();

app.get("/", (_, res) => res.send("hello world"));

app.listen(PORT, () => {
  console.log(`🚀  Server ready at ${BASE_URL}:${PORT}`);
});
