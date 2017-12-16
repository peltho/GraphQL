require('babel/register');

import Author from './author';

const Comment = `
  type Comment {
    id: Int!
    message: String
    author: Author
  }
`;

export default () => [Comment, Author];
