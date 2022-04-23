import { ObjectId } from 'mongodb'
import { ButtonProps } from 'primereact/button'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface ProjectData {
  _id: ObjectId
  image: string
  title: string
  description: string
  linkDemo: string
  linkRepo: string
}

export interface EducationProps {
  _id: ObjectId
  title: string
  time: string
  description: string
}

export interface CertificatesProps {
  _id: ObjectId
  title: string
  company: string
  time: string
}

export interface ItemBoxProps {
  title: string
  company?: string
  description?: string
  time: string
  customClassName?: string
}

export interface SeoProps {
  title?: string
  description?: string
}

export interface TooltipProps {
  target: string
  text: string
  icon: ReactNode | string
}

export interface HomeSectionProps {
  title?: string
  body: ReactNode
  customTitleClass?: string
}

export interface CustomButtonProps extends ButtonProps {
  components?: ReactNode
}

export interface TimelineCardProps {
  title: string
  description: string
  time: string
}

export interface FooterLink {
  name: string
  url: string
  textDescription: string
  icon: IconType
}

export interface PageLinkProps {
  url: string
  label: string
}

export interface ActivityDescriptionProps {
  title: string
  description: string
  icon: ReactNode
}
