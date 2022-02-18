import { gql } from "@apollo/client";

export const QUERY_GET_ALL_PROJECTS = gql`
  query getData {
    getAllProject {
      _id
      description
      image
      link_demo
      link_repo
      title
    }
  }
`;
