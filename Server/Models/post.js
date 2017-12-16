require('babel/register');
// post.js
import Comment from './comment';
import Author from './author';

const Post = `
  type Post {
    id: Int!
    votes: Int
    title: String
    content: String
    author: Author
    comments: [Comment]
  }
`;

// we export Post and all types it depends on
// in order to make sure we don't forget to include
// a dependency
export default () => [Post, Comment, Author];
