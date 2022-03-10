import dbConnect from 'lib/dbConnect';
import { certificates, educations, experiences, projects } from 'models';

export const resolvers = {
  Query: {
    getAllProject: async () => {
      await dbConnect();
      const projectData = await projects.find();
      return projectData;
    },

    getAllCertificate: async () => {
      await dbConnect();
      const certificateData = await certificates.find();
      return certificateData;
    },
    getAllEducation: async () => {
      await dbConnect();
      const educationData = await educations.find();
      return educationData;
    },
    getAllExperiences: async () => {
      await dbConnect();
      const experienceData = await experiences.find();
      return experienceData;
    },
  },
};
