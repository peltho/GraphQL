require('babel/register');
import { find, filter } from 'lodash';

const posts = [
  { id: 1, authorId: 1, title: 'Lorem ipsum', votes: 2, content: 'du latin connu' },
  { id: 2, authorId: 2, title: 'Cave canem', votes: 3, content: 'du latin, attention au chien' },
  { id: 3, authorId: 2, title: 'Homo homini lupus', votes: 1, content: 'du blabla, l\'homme est un loup pour l\'homme' },
  { id: 4, authorId: 3, title: 'Rosae rosarum rosis', votes: 7, content: 'du blabla bidon décliné' },
];

const authors = [
  { id: 1, firstName: 'Thomas', lastName: 'Pellegatta' },
  { id: 2, firstName: 'François', lastName: 'Damiens' },
  { id: 3, firstName: 'Eric', lastName: 'Cantona' },
];


const resolvers = {
    Query: {
        post: (_, { id }) => find(posts, { id: id }),
        posts: () => posts,
        author: (_, { id }) => find(authors, { id: id }),
        authors: () => authors
    },
    Mutation: {
        upvotePost: (_, { postId }) => {
          const post = find(posts, { id: postId });
          if (!post) {
            throw new Error(`Couldn't find post with id ${postId}`);
          }
          post.votes += 1;
          return post;
        }
    },
    Author: {
        posts: (author) => filter(posts, { authorId: author.id }),
    },
    Post: {
        author: (post) => find(authors, { id: post.authorId })
    }
};

export default resolvers;
