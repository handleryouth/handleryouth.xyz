import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type ProjectResponseProperties {
    _id: String
    image: String
    description: String
    link_demo: String
    link_repo: String
    title: String
  }

  type Query {
    getAllProject: [ProjectResponseProperties!]
  }
`;
