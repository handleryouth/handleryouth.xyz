import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import axios from "axios";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";
import { ProjectData } from "types";
import { slideLeftEntrance } from "animation";

export const getServerSideProps: GetServerSideProps = async () => {
  const responseData = await axios({
    method: "post",
    url: "https://data.mongodb-api.com/app/data-hdqqt/endpoint/data/beta/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.API_KEY!,
    },
    data: {
      collection: "projects",
      database: "personal-portofolio",
      dataSource: "cluster-tutorial",
    },
  }).then((res) => {
    return res.data.documents;
  });

  return {
    props: {
      data: responseData,
    },
  };
};

const Project: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
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

      <div className="bg-gradient-to-r from-[#24C6DC] to-[#514A9D] py-8">
        <p className="text-white text-center sm:w-96 sm:mx-auto my-4 leading-7 px-4">
          As i working myself to be a Frontend Developer, i struggle with a lot
          of projects. eventhough those projects are hard, they always give me
          something new and precious to learn. Here are some of my top projects
          that i build according to me. More to come of course.
        </p>
        <div className="flex flex-wrap justify-around ">
          {(data as ProjectData[]).map((item) => {
            return (
              <motion.div key={item._id} whileHover={{ scale: 1.1, zIndex: 2 }}>
                <Card
                  className=" overflow-hidden w-96 m-4"
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
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
