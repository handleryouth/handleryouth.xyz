import { QueryResult } from '@apollo/client';
import { motion } from 'framer-motion';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { slideLeftEntrance } from 'animation';
import { Card, Seo } from 'components';
import { ProjectData } from 'types';
import { QUERY_GET_ALL_PROJECTS, requestHelper } from 'utils';

export const getStaticProps: GetStaticProps = async () => {
  const responseData: QueryResult = await requestHelper({
    data: {
      operationName: 'getData',
      query: QUERY_GET_ALL_PROJECTS.loc!.source.body,
      variables: {},
    },
  }).then(res => res.data);
  return {
    props: {
      staticProject: responseData.data,
    },
  };
};

const Project = ({ staticProject }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo
        title="handleryouth.xyz - Web Projects"
        description="Personal projects that you can use as ideas for web developer"
      />
      <main className="w-11/12 mx-auto max-w-[68rem]">
        <h1 className="pt-32">Web Projects</h1>
        <div className="flex flex-wrap justify-center md:justify-between gap-x-4 gap-y-5  pb-16  min-h-screen">
          {staticProject.getAllProject.length ? (
            (staticProject.getAllProject as ProjectData[]).map(item => {
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
          )}
        </div>
      </main>
    </>
  );
};

export default Project;
