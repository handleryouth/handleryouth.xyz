import { gql } from '@apollo/client'

export const QUERY_GET_ALL_PROJECTS = gql`
  query getData {
    getAllProject {
      id
      description
      image
      linkDemo
      linkRepo
      title
    }
  }
`

export const QUERY_GET_ALL_RESUME_DATA = gql`
  query getResumePageProps {
    getAllCertificate {
      id
      company
      time
      title
    }
    getAllEducation {
      id
      title
      time
      description
    }
    getAllExperiences {
      id
      title
      time
      description
    }
  }
`
