import { ReactNode } from 'react';
import { slideLeftEntrance } from 'animation';
import { motion } from 'framer-motion';

interface HomeSectionProps {
  title?: string;
  body: ReactNode;
  customTitleClass?: string;
}

const Section = ({ title, body, customTitleClass }: HomeSectionProps) => {
  return (
    <motion.section className="mb-24 prose-h1:my-16" variants={slideLeftEntrance}>
      <h1
        className={`underline leading-relaxed decoration-blue-500 dark:no-underline decoration-8 underline-offset-[10px] ${customTitleClass}`}
      >
        {title}
      </h1>
      {body}
    </motion.section>
  );
};

export default Section;
