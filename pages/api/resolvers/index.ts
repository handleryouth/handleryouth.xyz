import { projects } from "models";
import dbConnect from "lib/dbConnect";

export const resolvers = {
  Query: {
    getAllProject: async () => {
      try {
        await dbConnect();
        const projectData = await projects.find();
        return projectData;
      } catch (error) {
        throw error;
      }
    },
  },
};
