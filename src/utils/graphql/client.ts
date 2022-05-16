import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `https://csb-7qohjn-frwrbf84r-handleryouth.vercel.app/graphql`,
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
