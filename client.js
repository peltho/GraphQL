const { GraphQLClient } = require('graphql-request')

let endpoint = 'http://localhost:3000'
const client = new GraphQLClient(endpoint, { headers: {} })

const query = `query post($id: Int!) {
  post(id: $id) {
    title
    votes
    author {
        firstName
        lastName
    }
    comments {
      author {
          firstName
          lastName
      }
      message
    }
  }
}`

const variables = {
    id: 1
}

const mutation = `mutation upvotePost($id: Int!) {
    upvotePost(postId: $id) {
        title
        votes
    }
}`

// Run query
client.request(query, variables).then(
    data => console.log(data)
).catch(err => {
    console.log(err.response.errors) // GraphQL response errors
    console.log(err.response.data)   // Response data if available
});

// Run mutation
client.request(mutation, variables).then(
    data => console.log(data)
).catch(err => {
    console.log(err.response.errors)
    console.log(err.response.data)
});
