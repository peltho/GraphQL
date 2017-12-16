require('babel/register');
// schema.js
import Post from './post.js';

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers.js';

const RootQuery = `
    type RootQuery {
        post(id: Int!): Post
        posts: [Post]
        author(id: Int!): Author
        authors: [Author]
    }
`;

const Mutation = `
    type Mutation {
        upvotePost (postId: Int!): Post
    }
`;

const SchemaDefinition = `
    schema {
        query: RootQuery
        mutation: Mutation
   }
`;

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition, RootQuery, Mutation, Post
  ],
  resolvers: resolvers
});
