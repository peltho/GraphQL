require('babel/register');

import Post from './post';

const Author = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }
`;

export default () => [Author];
