require('babel/register');

const Comment = `
  type Comment {
    id: Int!
    message: String
    author: String
  }
`;

export default () => [Comment];
