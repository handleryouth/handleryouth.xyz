import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { Panel } from "primereact/panel";
import { slideLeftEntrance } from "animation";
import {
  SiReact,
  SiRedux,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const About = () => {
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
          src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
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
            delay: 0.8,
            duration: 0.5,
          }}
        >
          About
        </motion.h1>
      </div>

      <div className="pt-4 flex flex-col justify-center items-center bg-gradient-to-r from-[#000046] to-[#1CB5E0] sm:min-h-[1151px] sm:h-[50vh]  ">
        <div className="my-8 min-w-[320px]">
          <Image
            src="/236782.jpg"
            alt="Author Image"
            width={500}
            height={400}
          />
        </div>

        <motion.ul
          className="w-8/12 max-w-[1000px] min-w-[320px]"
          variants={slideLeftEntrance}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            when: "beforeChildren",
            staggerChildren: 0.8,
          }}
        >
          <motion.li variants={slideLeftEntrance}>
            <Panel
              className=" my-8 leading-7 text-justify"
              header="The Author"
              toggleable
              collapsed={true}
            >
              <p>
                Hey there i am{" "}
                <span className="underline decoration-cyan-400 underline-offset-4 decoration-2 decoration-solid">
                  Tony
                </span>
                . I am a self-taught Frontend Web Developer. I like to learn
                something new and project is my way to learn something new in
                website. I&apos;ve done a lot of challenge and i am always
                trying to learn something new. Another way for me to learn is by
                sharing code with other. It&apos;s fun !
              </p>
            </Panel>
          </motion.li>

          <motion.li variants={slideLeftEntrance}>
            <Panel
              className=" my-8 leading-7 text-justify"
              header="The Webpage"
              toggleable
              collapsed={true}
            >
              <p>
                I created this website to share projects which of course can be
                an idea for other frontend developers who want to learn about
                frontend web development. I hope you enjoy it.
              </p>
            </Panel>
          </motion.li>

          <motion.li variants={slideLeftEntrance}>
            <Panel
              className=" my-8 leading-7 text-justify"
              header="Tech Stacks"
              toggleable
              collapsed={true}
            >
              <p>
                I use the following technologies to build this website.
                <ul className="flex text-5xl mt-4 flex-wrap">
                  <li className="mt-2 mr-2">
                    <SiReact />
                  </li>
                  <li className="mt-2 mr-2">
                    <SiRedux />
                  </li>
                  <li className="mt-2 mr-2">
                    <SiMongodb />
                  </li>
                  <li className="mt-2 mr-2">
                    <SiNextdotjs />
                  </li>
                  <li className="mt-2 mr-2">
                    <SiTailwindcss />
                  </li>
                  <li className="mt-2 mr-2">
                    <SiFramer />
                  </li>
                </ul>
              </p>
            </Panel>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};

export default About;
