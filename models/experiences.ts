import { model, models, Schema, Types } from 'mongoose';
import { EducationProps } from 'types';

const experienceSchema = new Schema<EducationProps>({
  _id: Types.ObjectId,
  title: String,
  time: String,
  description: String,
});

export default models.Experience || model('Experience', experienceSchema);
