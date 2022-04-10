import { projects, certificates, educations, experiences } from 'lib';
import { queryHelper } from 'utils';

export const resolvers = {
  Query: {
    getAllProject: () => {
      return queryHelper(projects.find());
    },
    getAllCertificate: () => {
      return queryHelper(certificates.find());
    },
    getAllEducation: () => {
      return queryHelper(educations.find());
    },
    getAllExperiences: () => {
      return queryHelper(experiences.find());
    },
  },
};
