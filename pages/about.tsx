import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { Panel } from "primereact/panel";
import { slideLeftEntrance } from "animation";

const About = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Head>
        <title>About Tony David</title>
        <meta name="description" content="About Tony David" />
        <meta
          name="keywords"
          content="NextJS, Tailwind, React, Redux, Tony David, handleryouth, About"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Tony David" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative w-full sm:h-[50vh] min-h-[384px]">
        <Image
          src="https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
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
          About
        </motion.h1>
      </div>

      <div className="pt-4 flex flex-col justify-center items-center bg-gradient-to-r from-[#000046] to-[#1CB5E0] sm:min-h-[900px] sm:h-[50vh]  ">
        <div className="my-8 min-w-[320px]">
          <Image
            src="/236782.jpg"
            alt="Author Image"
            width={500}
            height={400}
          />
        </div>

        <div className="w-8/12 max-w-[1000px] min-w-[320px]">
          <Panel
            className=" my-8 leading-7 text-justify"
            header={
              <h1 className="text-center">
                About The{" "}
                <span className="underline !decoration-sky-500">Author</span>
              </h1>
            }
            toggleable
            collapsed={collapsed}
            onToggle={() => setCollapsed((prevState) => !prevState)}
          >
            <p>
              Hey there i am Tony. I am a self-taught Frontend Web Developer. I
              like to learn something new and project is my way to learn
              something new in website. I&apos;ve done a lot of challenge and i
              am always trying to learn something new. Another way for me to
              learn is by sharing code with other. It&apos;s fun !
            </p>
          </Panel>
        </div>
      </div>
    </>
  );
};

export default About;
