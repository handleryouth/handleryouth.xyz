import { ObjectId } from "mongoose";

export interface ProjectData {
  _id: ObjectId;
  image: string;
  title: string;
  description: string;
  linkDemo: string;
  linkRepo: string;
}
