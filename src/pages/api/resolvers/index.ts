import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    getAllProject: async () => {
      const projectData = await prisma.projects.findMany({})
      return projectData
    },

    getAllCertificate: async () => {
      const certificateData = await prisma.certificates.findMany({})
      return certificateData
    },
    getAllEducation: async () => {
      const educationData = await prisma.educations.findMany({})
      return educationData
    },
    getAllExperiences: async () => {
      const experienceData = await prisma.experiences.findMany({})
      return experienceData
    },
  },
}
