const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin request
app.use(cors());

// connect to database
const connectionString = "mongodb://localhost:27017/graphql-tutorial";

mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected');
});

// (async () => {
//   const connector = mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//   await connector.then(async () => {
//     console.log('asdasdsad');
//   }).catch((err) => {
//     console.log(err);
//   })
// })()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listen for request on port 4000');
});
