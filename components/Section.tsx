import React, { ReactNode } from 'react';

interface HomeSectionProps {
  title?: string;
  body: ReactNode;
  customTitleClass?: string;
}

const Section = ({ title, body, customTitleClass }: HomeSectionProps) => {
  return (
    <section className="mb-24 prose-h1:my-16">
      <h1
        className={`underline leading-relaxed decoration-blue-500 decoration-8 underline-offset-[10px] ${customTitleClass}`}
      >
        {title}
      </h1>
      {body}
    </section>
  );
};

export default Section;
