import { gql } from '@apollo/client';

import { MAIN_RESPONSE_QUERY } from './fragment';

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

export const QUERY_GET_ALL_RESUME_DATA = gql`
  query getResumePageProps {
    getAllCertificate {
      _id
      company
      time
      title
    }
    getAllEducation {
      ...EducationFragment
    }
    getAllExperiences {
      ...EducationFragment
    }
  }
  ${MAIN_RESPONSE_QUERY}
`;
