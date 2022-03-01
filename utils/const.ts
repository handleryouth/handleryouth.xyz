import { gql } from '@apollo/client';

export const QUERY_GET_ALL_PROJECTS = gql`
  query getData {
    getAllProject {
      _id
      description
      image
      linkDemo
      linkRepo
      title
    }
  }
`;
