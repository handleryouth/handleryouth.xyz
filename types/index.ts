import { ReactNode } from 'react';
import { ObjectId } from 'mongodb';
import { ButtonProps } from 'primereact/button';

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

export interface SeoProps {
  title?: string;
  description?: string;
}

export interface TooltipProps {
  target: string;
  text: string;
  icon: ReactNode | string;
}

export interface HomeSectionProps {
  title?: string;
  body: ReactNode;
  customTitleClass?: string;
}

export interface CustomButtonProps extends ButtonProps {
  components?: ReactNode;
}

export interface TimelineCardProps {
  title: string;
  description: string;
  time: string;
}
