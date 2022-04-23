import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type ProjectResponseProperties {
    _id: String
    image: String
    description: String
    linkDemo: String
    linkRepo: String
    title: String
  }

  type CertificateProperties {
    _id: String
    title: String
    company: String
    time: String
  }

  type EducationProperties {
    _id: String
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
