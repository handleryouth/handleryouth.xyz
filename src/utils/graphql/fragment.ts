import { gql } from '@apollo/client'

export const MAIN_RESPONSE_QUERY = gql`
  fragment EducationFragment on EducationProperties {
    _id
    title
    time
    description
  }
`
