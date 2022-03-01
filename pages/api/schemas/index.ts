import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type ProjectResponseProperties {
    _id: String
    image: String
    description: String
    linkDemo: String
    linkRepo: String
    title: String
  }

  type Query {
    getAllProject: [ProjectResponseProperties!]
  }
`;
