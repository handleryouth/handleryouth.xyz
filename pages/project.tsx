import { motion } from "framer-motion";
import ReactLoading from "react-loading";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { ProjectData } from "types";
import { slideLeftEntrance } from "animation";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_PROJECTS } from "utils";
import { Card } from "components";

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
      <div className="relative w-full min-h-[384px] sm:h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="..."
          layout="fill"
          objectFit="cover"
        />
        <motion.h1
          className="absolute tracking-widest font-bold text-3xl flex items-center justify-center h-full w-full text-white"
          variants={slideLeftEntrance}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >
          Project
        </motion.h1>
      </div>

      <div className="bg-gradient-to-r from-[#6190E8] to-[#A7BFE8] py-8">
        <p className="text-white text-center sm:w-96 sm:mx-auto my-4 leading-7 px-4">
          As i working myself to be a Frontend Developer, i struggle with a lot
          of projects. eventhough those projects are hard, they always give me
          something new and precious to learn. Here are some of my top projects
          that i build according to me. More to come of course.
        </p>
        <div className="flex flex-wrap justify-around ">
          {!loading ? (
            data ? (
              (data.getAllProject as ProjectData[]).map((item) => {
                return (
                  <motion.div
                    key={item._id.toString()}
                    variants={slideLeftEntrance}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: 0.8,
                      duration: 0.5,
                    }}
                  >
                    <Card
                      description={item.description}
                      image={item.image}
                      link_demo={item.link_demo}
                      link_repo={item.link_repo}
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
      </div>
    </>
  );
};

export default Project;
