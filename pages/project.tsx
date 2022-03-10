import Head from 'next/head';
import { slideLeftEntrance } from 'animation';
import { Card } from 'components';
import { motion } from 'framer-motion';
import { ProgressSpinner } from 'primereact/progressspinner';
import { ProjectData } from 'types';
import { QUERY_GET_ALL_PROJECTS } from 'utils';

import { useQuery } from '@apollo/client';

const Project = () => {
  const { data, loading } = useQuery(QUERY_GET_ALL_PROJECTS, {
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      <Head>
        <title>Tony David Personal Project</title>
        <meta property="twitter:title" content="handleryouth.xyz - Description" />
        <meta
          property="twitter:description"
          content="Personal projects that you can use as ideas for web developer"
        />
        <meta
          name="keywords"
          content="NextJS, Tailwind, React, Redux, Tony David, handleryouth, Project"
        />
      </Head>
      <main className="w-11/12 mx-auto max-w-[68rem]">
        <h1 className="pt-32">Web Projects</h1>
        <div className="flex flex-wrap justify-center md:justify-between gap-x-4 gap-y-5  pb-16  min-h-screen">
          {!loading ? (
            data.getAllProject.length ? (
              (data.getAllProject as ProjectData[]).map(item => {
                return (
                  <motion.div
                    key={item._id.toString()}
                    variants={slideLeftEntrance}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: 0.5,
                      duration: 0.3,
                    }}
                  >
                    <Card
                      description={item.description}
                      image={item.image}
                      linkDemo={item.linkDemo}
                      linkRepo={item.linkRepo}
                      title={item.title}
                    />
                  </motion.div>
                );
              })
            ) : (
              <div className="min-h-screen flex items-center justify-center">
                <p>No Project for now</p>
              </div>
            )
          ) : (
            <div className="min-h-screen flex w-full items-center justify-center">
              <ProgressSpinner />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Project;
