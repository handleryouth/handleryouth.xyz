import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import {
  SiFramer,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si'
import { FooterLink, PageLinkProps } from 'src/types'

export const FOOTER_LINK: FooterLink[] = [
  {
    name: 'github',
    url: 'https://github.com/handleryouth',
    textDescription: 'I put all my source code here',
    icon: FaGithub,
  },
  {
    name: 'Email',
    url: 'rafaeltonydavid@yahoo.com',
    textDescription: 'Email me: rafaeltonydavid@yahoo.com',
    icon: GrMail,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/tonydg/',
    textDescription: "I'm on LinkedIn",
    icon: FaLinkedin,
  },
]

export const PAGE_LINKS: PageLinkProps[] = [
  {
    label: 'My Resume',
    url: '/resume',
  },
  {
    label: 'Projects',
    url: '/project',
  },
  {
    label: 'About',
    url: '/about',
  },
]

export const SIDEBAR_LINKS: PageLinkProps[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'My Resume',
    url: '/resume',
  },
  {
    label: 'Projects',
    url: '/project',
  },
  {
    label: 'About',
    url: '/about',
  },
]

export const TECH_STACKS = [
  {
    icon: SiReact,
  },
  {
    icon: SiMongodb,
  },
  {
    icon: SiRedux,
  },
  {
    icon: SiNextdotjs,
  },
  {
    icon: SiTailwindcss,
  },
  {
    icon: SiFramer,
  },
  {
    icon: SiGraphql,
  },
]
