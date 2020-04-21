import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: `https://qarunpanther.wpengine.com/graphql`,
})
