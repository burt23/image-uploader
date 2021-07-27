const express = require("express");
const resolvers = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/typeDefs");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { PORT, BASE_URL } = require("./config");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.all("/", (_, res) => res.redirect("/graphql"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`🚀  Server ready at ${BASE_URL}:${PORT}`);
});
