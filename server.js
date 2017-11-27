require('babel/register');
var express = require('express');
var graphql = require('graphql');
var expressGraphql = require('express-graphql');

//import { makeExecutableSchema } from './schema.js';
var schema = require('./schema.js');

var app = express();

app.use('/', expressGraphql({
  schema: schema,
  graphiql: true
}));

app.listen(3000);
console.log('GraphQL API server is running on port 3000');
