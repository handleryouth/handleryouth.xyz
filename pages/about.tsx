import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import {
  SiReact,
  SiRedux,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
} from "react-icons/si";
import { slideLeftEntrance } from "animation";

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
      </Head>
      <div className="relative w-full sm:h-[50vh] min-h-[384px] text-white ">
        <Image
          src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="..."
          layout="fill"
          objectFit="cover"
        />
        <motion.h1
          className="absolute tracking-widest font-bold text-3xl flex items-center justify-center h-full w-full"
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

      <div className="pt-4 flex text-white flex-col justify-center items-center  p-8 bg-gradient-to-r from-[#000046] to-[#1CB5E0] sm:min-h-[1194px] sm:h-[100vh]  ">
        <motion.div
          className="max-w-[55rem] flex flex-col md:block"
          variants={slideLeftEntrance}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.8,
            when: "beforeChildren",
            duration: 0.1,
            staggerChildren: 0.2,
          }}
        >
          <motion.div
            className=" min-w-[200px] md:mr-8 relative float-left mx-auto mb-8 md:w-[230px] h-[20rem] rounded-md overflow-hidden "
            variants={slideLeftEntrance}
          >
            <Image src="/236782.png" alt="Author Image" layout="fill" />
          </motion.div>
          <motion.h3
            className="text-4xl sm:text-6xl font-bold mb-2 "
            variants={slideLeftEntrance}
          >
            The Author
          </motion.h3>
          <motion.p className="text-xl" variants={slideLeftEntrance}>
            Hey there i am{" "}
            <span className="underline decoration-cyan-400 underline-offset-4 decoration-2 decoration-solid">
              Tony
            </span>
            . I am a self-taught Frontend Web Developer. I like to learn
            something new and project is my way to learn something new in
            website. I&apos;ve done a lot of challenge and i am always trying to
            learn something new. Another way for me to learn is by sharing code
            with other. It&apos;s fun !
          </motion.p>
          <motion.p className="text-xl mt-4" variants={slideLeftEntrance}>
            I created this website to share projects which of course can be an
            idea for other frontend developers who want to learn about frontend
            web development. I hope you enjoy it.
          </motion.p>

          <motion.div variants={slideLeftEntrance}>
            <h3 className="font-semibold mt-12 text-3xl mb-2 ">Tech Stacks</h3>
            <p className="text-xl">
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
                <li className="mt-2 mr-2">
                  <SiGraphql />
                </li>
              </ul>
            </p>
          </motion.div>

          <motion.div variants={slideLeftEntrance}>
            <h3 className="font-semibold mt-12 text-3xl mb-2 ">Hobbies</h3>
            <p className="text-xl">
              Programming is not the only thing i enjoy doing. i do like
              listening to classical music or orchestra. I even play some of
              musical instruments like piano and guitar.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
