import { useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { slideLeftEntrance } from 'animation';
import { ItemBox, Section, TimelineCard } from 'components';
import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import { confirmPopup } from 'primereact/confirmpopup';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Timeline } from 'primereact/timeline';
import { CertificatesProps, EducationProps } from 'types';
import { QUERY_GET_ALL_RESUME_DATA } from 'utils';

import { useQuery } from '@apollo/client';

const Resume = () => {
  const router = useRouter();
  const { data: resumeData } = useQuery(QUERY_GET_ALL_RESUME_DATA);

  const confirmExternalLink = useCallback(
    event => {
      confirmPopup({
        className: 'prose text-black',
        target: event.currentTarget,
        message: 'This will redirect to another page. Proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () =>
          router.push(
            'https://drive.google.com/file/d/1cK6ETW4kmdUYgf1eW8cfMEfSFljuJa82/view?usp=sharing'
          ),
      });
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>Tony David Personal Website</title>
        <meta name="description" content="Tony David Resume" />
        <meta
          name="keywords"
          content="NextJS, Tailwind, React, Redux, Tony David, handleryouth, Resume"
        />
      </Head>
      <main className="pt-32 w-11/12 mx-auto max-w-[68rem]">
        <h1>Resume</h1>

        {!resumeData ? (
          <div className="flex items-center justify-center min-h-screen">
            <ProgressSpinner />
          </div>
        ) : (
          <motion.div
            variants={slideLeftEntrance}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              duration: 0.3,
              staggerChildren: 0.2,
              when: 'beforeChildren',
            }}
            className="flex flex-col justify-center min-h-screen"
          >
            <Section
              title="Education"
              body={
                <div>
                  <div className="hidden md:block">
                    <Timeline
                      value={resumeData.getAllEducation}
                      align="alternate"
                      content={TimelineCard}
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 md:hidden">
                    {(resumeData.getAllEducation as EducationProps[]).map((item, index) => (
                      <ItemBox key={index} {...item} />
                    ))}
                  </div>
                </div>
              }
            />

            <Section
              title="Experience"
              body={
                <div>
                  <div className="hidden md:block">
                    <Timeline
                      value={resumeData.getAllExperiences}
                      align="alternate"
                      content={TimelineCard}
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 md:hidden">
                    {(resumeData.getAllExperiences as EducationProps[]).map((item, index) => (
                      <ItemBox key={index} {...item} />
                    ))}
                  </div>
                </div>
              }
            />

            <Section
              title="Certificates"
              body={
                <div className="flex flex-wrap gap-4">
                  {(resumeData.getAllCertificate as CertificatesProps[]).map(
                    (certificate, index) => (
                      <ItemBox key={index} {...certificate} />
                    )
                  )}
                </div>
              }
            />

            <section className="text-center py-52">
              <h1>Resume</h1>
              <Button
                label="Show Resume"
                className="p-button-raised p-button-info p-button-text"
                onClick={confirmExternalLink}
              />
            </section>
          </motion.div>
        )}
      </main>
    </>
  );
};

export default Resume;
