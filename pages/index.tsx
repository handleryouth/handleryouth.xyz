import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slideLeftEntrance } from 'animation';
import axios from 'axios';
import { ActivityDescription, Button, Section, Seo } from 'components';
import { motion } from 'framer-motion';
import { AiOutlineCode } from 'react-icons/ai';
import { GiPublicSpeaker } from 'react-icons/gi';
import { ProjectData } from 'types';
import { QUERY_GET_ALL_PROJECTS } from 'utils';

import { QueryResult } from '@apollo/client';

export const getStaticProps: GetStaticProps = async () => {
  const responseData: QueryResult = await axios({
    method: 'POST',
    url: process.env.WEBSITE_URL + 'api/graphql',
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

const DynamicCard = dynamic(() => import('components/CardThumbnail'));

const Home: NextPage = ({ staticProject }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <>
      <Seo />
      <motion.main
        className="pt-16 flex flex-col items-cetner justify-center min-h-screen w-11/12 max-w-[68rem] mx-auto"
        variants={slideLeftEntrance}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.5,
          duration: 0.3,
          staggerChildren: 0.2,
          when: 'beforeChildren',
        }}
      >
        <Section
          body={
            <div className="flex items-center flex-col md:flex-row ">
              <div className="rounded-full p-2 mr-8 flex items-center justify-center shadow-lg">
                <Image
                  src="/homephoto.webp"
                  alt="Tony David"
                  layout="fixed"
                  width={250}
                  height={250}
                  className="rounded-full"
                  priority
                />
              </div>

              <div className="prose-h1:mb-4 prose-h1:mt-2">
                <p>Frontend Engineer</p>
                <h1>Tony David</h1>
                <p className="xl:w-[40rem]">
                  Tony is an Electrical Engineering student who still studying at the Sepuluh
                  Nopember Institute of Technology. He is interested in studying in the computer
                  field, especially hardware. Being consistent in work and politeness are his main
                  characteristics. he loves learning programming languages (Python, Javascript,
                  etc). Right now, he is pursuing his career as a FrontEnd Engineer
                </p>

                <Button
                  label="Know me more!"
                  className="p-button-outlined p-button-info"
                  onClick={() => router.push('/about')}
                />
              </div>
            </div>
          }
        />

        <Section
          title="What I Do"
          body={
            <div className="flex flex-wrap sm:justify-center gap-x-16 gap-y-8">
              <ActivityDescription
                title="Frontend Engineer"
                description="I am a Frontend Engineer, I have experience in building web applications using React, Redux, NextJS, TailwindCSS, TypeScript, NodeJS, ExpressJS, MongoDB, GraphQL, Apollo, and more."
                icon={<AiOutlineCode />}
              />

              <ActivityDescription
                title="Public Relation"
                description="Though i am a frontend engineer, i also have experience in public relations. I usually contributing to my team's social media, and also i am a public relations officer in some of university organizations."
                icon={<GiPublicSpeaker />}
              />
            </div>
          }
        />

        <Section
          title="Web Projects"
          body={
            <div>
              <div className="flex flex-wrap justify-center">
                {(staticProject.getAllProject as ProjectData[]).slice(0, 3).map(project => (
                  <div key={project._id.toString()}>
                    <DynamicCard
                      image={project.image}
                      linkDemo={project.linkDemo}
                      linkRepo={project.linkRepo}
                      title={project.title}
                    />
                  </div>
                ))}
                <div className="w-full text-center mt-8">
                  <Button
                    label="More"
                    onClick={() => router.push('/project')}
                    className="p-button-outlined p-button-info"
                  />
                </div>
              </div>
            </div>
          }
        />

        <Section
          title="You might be interested"
          customTitleClass="text-center"
          body={
            <div className="text-center">
              <Link passHref href="https://starting-page.vercel.app/">
                <h3 className="mx-auto inline hover:text-blue-500 cursor-pointer transition-colors">
                  Starting Page for Browser
                </h3>
              </Link>

              <div className="block mt-4">
                <Image
                  src="/startingpage.webp"
                  alt="Starting Page for Browser"
                  width={1920}
                  height={1080}
                  layout="responsive"
                />
              </div>
            </div>
          }
        />
      </motion.main>
    </>
  );
};

export default Home;
