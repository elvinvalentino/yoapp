const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config();

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const context = require('./graphql/context');

// Initiate Grapghql
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.listen({ port }).then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`Subscription ready at ${subscriptionsUrl}`)

  // Connect Mongo
  const mongoUri = process.env.MONGO_URI;
  mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB Connected...')
  }).catch(err => console.error(err));
});