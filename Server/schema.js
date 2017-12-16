require('babel/register');

import Post from './Models/post.js';

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers.js';

const Queries = `
    type Query {
        post(id: Int!): Post
        posts: [Post]
        author(id: Int!): Author
        authors: [Author]
    }
`;

const Mutations = `
    type Mutation {
        upvotePost (postId: Int!): Post
    }
`;

const SchemaDefinition = `
    schema {
        query: Query
        mutation: Mutation
   }
`;

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, Queries, Mutations, Post
  ],
  resolvers: resolvers
});
