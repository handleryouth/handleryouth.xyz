import { model, models, Schema, Types } from 'mongoose';
import { ProjectData } from 'types';

const projectSchema = new Schema<ProjectData>({
  _id: Types.ObjectId,
  title: String,
  image: String,
  description: String,
  linkDemo: String,
  linkRepo: String,
});

export default models.Project || model('Project', projectSchema);
