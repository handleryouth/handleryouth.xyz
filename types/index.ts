import { ObjectId } from 'mongodb';

export interface ProjectData {
  _id: ObjectId;
  image: string;
  title: string;
  description: string;
  linkDemo: string;
  linkRepo: string;
}

export interface EducationProps {
  _id: ObjectId;
  title: string;
  time: string;
  description: string;
}

export interface CertificatesProps {
  _id: ObjectId;
  title: string;
  company: string;
  time: string;
}

export interface ItemBoxProps {
  title: string;
  company?: string;
  description?: string;
  time: string;
  customClassName?: string;
}
