import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `https://7qohjn-4000.sse.codesandbox.io/graphql`,
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
