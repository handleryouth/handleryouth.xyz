import { ObjectId } from "mongoose";

export interface ProjectData {
  _id: ObjectId;
  image: string;
  title: string;
  description: string;
  link_demo: string;
  link_repo: string;
}
