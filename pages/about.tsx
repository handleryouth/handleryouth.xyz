import Image from 'next/image';
import { slideLeftEntrance } from 'animation';
import { Seo } from 'components';
import { motion } from 'framer-motion';
import {
  SiFramer,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

const About = () => {
  return (
    <>
      <Seo title="handleryouth.xyz - About" description="Profile about Tony David" />

      <main className="w-11/12 mx-auto max-w-[68rem]">
        <h1 className="pt-32">About</h1>
        <div className="py-16 sm:py-8  min-h-screen">
          <motion.div
            className="flex flex-col md:block"
            variants={slideLeftEntrance}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              when: 'beforeChildren',
              duration: 0.1,
              staggerChildren: 0.2,
            }}
          >
            <div className="min-h-[20rem] prose-h3:mt-0">
              <motion.div
                className=" sm:mr-8 relative  sm:float-left w-[200px] mb-8 sm:mb-0 mx-auto md:w-[230px] h-[20rem] rounded-md overflow-hidden "
                variants={slideLeftEntrance}
              >
                <Image src="/236782.webp" alt="Author Image" layout="fill" priority />
              </motion.div>
              <motion.h3
                className=" text-4xl sm:text-6xl font-bold mb-2 "
                variants={slideLeftEntrance}
              >
                The Author
              </motion.h3>
              <motion.p className="text-xl" variants={slideLeftEntrance}>
                Hey there i am{' '}
                <span className="underline decoration-cyan-400 underline-offset-4 decoration-2 decoration-solid">
                  Tony
                </span>
                . I am a self-taught Frontend Web Developer. I like to learn something new and
                project is my way to learn something new in website. I&apos;ve done a lot of
                challenges and i am always trying to learn something new. Another way for me to
                learn is by sharing code with others. It&apos;s fun !
              </motion.p>
              <motion.p className="text-xl mt-4" variants={slideLeftEntrance}>
                I created this website to share projects which of course can be an idea for other
                frontend developers who want to learn about frontend web development. I hope you
                enjoy it.
              </motion.p>
            </div>

            <motion.div variants={slideLeftEntrance} className="sm:mt-8">
              <h3 className="font-semibold mt-12 text-3xl mb-2 ">Tech Stacks</h3>
              <div className="text-xl not-prose">
                I use the following technologies to build this website.
                <ul className="flex text-5xl mt-4 flex-wrap ">
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
              </div>
            </motion.div>

            <motion.div variants={slideLeftEntrance}>
              <h3 className="font-semibold mt-12 text-3xl mb-2">Hobbies</h3>
              <p className="text-xl">
                Programming is not the only thing i enjoy doing. i do like listening to classical
                music or orchestra. I even play some of musical instruments like piano and guitar.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default About;
