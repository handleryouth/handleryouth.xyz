import { projects } from 'models';
import dbConnect from 'lib/dbConnect';

export const resolvers = {
  Query: {
    getAllProject: async () => {
      await dbConnect();
      const projectData = await projects.find();
      return projectData;
    },
  },
};
