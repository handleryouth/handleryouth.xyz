import { InferGetStaticPropsType, NextPage } from "next";
import { motion } from "framer-motion";
import useSWR, { unstable_serialize } from "swr";
import ReactLoading from "react-loading";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";
import { ProjectData } from "types";
import { slideLeftEntrance } from "animation";

const Project = () => {
  const { data } = useSWR("/api/project");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tony David Personal Project</title>
        <meta name="description" content="Tony David Personal Project" />
        <meta
          name="keywords"
          content="NextJS, Tailwind, React, Redux, Tony David, handleryouth, Project"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Tony David" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          {data ? (
            (data as ProjectData[]).map((item) => {
              return (
                <motion.div
                  key={item._id.toString()}
                  variants={slideLeftEntrance}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 1,
                    duration: 0.5,
                  }}
                >
                  <Card
                    className=" overflow-hidden sm:w-96 m-4 min-w-[288px]"
                    title={
                      <p className=" text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">
                        {item.title}
                      </p>
                    }
                    footer={
                      <div className="flex flex-col sm:flex-row ">
                        <Button
                          icon="pi pi-arrow-right"
                          label="Demo"
                          iconPos="right"
                          className="p-button-info"
                          onClick={() => router.push(item.link_demo)}
                        />

                        <Button
                          icon="pi pi-github"
                          label="Repo/Code"
                          iconPos="right"
                          className="p-button-primary sm:ml-2 mt-4 sm:mt-0"
                          onClick={() => router.push(item.link_repo)}
                        />
                      </div>
                    }
                    header={
                      <div className="relative w-full h-64">
                        <Image
                          src={item.image}
                          alt="Card"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    }
                  >
                    <ScrollPanel
                      className="text-justify h-48 custom-scrollpanel pr-4 "
                      style={{ lineHeight: "1.5" }}
                    >
                      {item.description}
                    </ScrollPanel>
                  </Card>
                </motion.div>
              );
            })
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
