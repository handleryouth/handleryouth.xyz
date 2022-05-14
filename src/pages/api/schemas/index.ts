import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  scalar ObjectID
  type ProjectResponseProperties {
    id: ObjectID
    image: String
    description: String
    linkDemo: String
    linkRepo: String
    title: String
  }

  type CertificateProperties {
    id: ObjectID
    title: String
    company: String
    time: String
  }

  type EducationProperties {
    id: ObjectID
    title: String
    time: String
    description: String
  }

  type Query {
    getAllProject: [ProjectResponseProperties!]
    getAllCertificate: [CertificateProperties!]
    getAllEducation: [EducationProperties!]
    getAllExperiences: [EducationProperties!]
  }
`
