import { motion } from 'framer-motion';
import ReactLoading from 'react-loading';
import { ProjectData } from 'types';
import { slideLeftEntrance } from 'animation';
import { QUERY_GET_ALL_PROJECTS } from 'utils';
import { Card } from 'components';
import { useQuery } from '@apollo/client';
import Head from 'next/head';

const Project = () => {
  const { data, loading } = useQuery(QUERY_GET_ALL_PROJECTS, {
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      <Head>
        <title>Tony David Personal Project</title>
        <meta name="description" content="Tony David Personal Project" />
        <meta
          name="keywords"
          content="NextJS, Tailwind, React, Redux, Tony David, handleryouth, Project"
        />
      </Head>
      <main className="w-11/12 mx-auto max-w-[68rem]">
        <h1 className="pt-32">Web Projects</h1>
        <div className="flex flex-wrap justify-center md:justify-between gap-x-4 gap-y-5 min-h-screen pb-16">
          {!loading ? (
            data ? (
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
              <div className="h-screen min-h-[568px] flex items-center justify-center">
                <h1>No Project for now</h1>
              </div>
            )
          ) : (
            <div className="h-screen min-h-[568px] flex items-center justify-center">
              <ReactLoading type="cylon" height={100} width={100} />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Project;
