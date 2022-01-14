import { Schema, models, model, Types } from "mongoose";
import { ProjectData } from "types";

const projectSchema = new Schema<ProjectData>({
  _id: {
    type: Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link_demo: {
    type: String,
    required: true,
  },
  link_repo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

export default models.Project || model("Project", projectSchema);
