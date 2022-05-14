import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer } from 'apollo-server-micro'
import { resolvers as scalarResolvers, typeDefs as scalarTypeDefs } from 'graphql-scalars'
import Cors from 'micro-cors'

import { resolvers } from './resolvers'
import { typeDefs } from './schemas'

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors()

const customTypeDefs = [...scalarTypeDefs, typeDefs]

const customTypeResolver = [scalarResolvers, resolvers]

const apolloServer = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: customTypeDefs,
    resolvers: customTypeResolver,
  }),
})

const startServer = apolloServer.start()

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})
