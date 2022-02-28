import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';
import { FiBriefcase } from 'react-icons/fi';
import { slideLeftEntrance } from 'animation';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tony David Personal Website</title>
        <meta name="description" content="Tony David personal website" />
        <meta name="keywords" content="NextJS, Tailwind, React, Redux, Tony David, handleryouth" />
      </Head>
      <main>
        <section
          className="z-10 absolute top-0 w-full h-[600px] sm:h-[52vh] bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80`)",
          }}
        >
          <div className="relative z-20 w-full h-full opacity-50 bg-black"></div>
        </section>

        <section className="relative py-24 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] min-h-screen sm:h-auto  ">
          <div className=" px-4 relative z-20">
            <motion.div
              className=" break-words w-full rounded-lg "
              initial="hidden"
              animate="visible"
              transition={{
                when: 'beforeChildren',
                delay: 1,
                staggerChildren: 0.3,
              }}
            >
              <div>
                <div className="flex justify-center relative ">
                  <Image
                    alt="..."
                    src="/personal-img.png"
                    layout="fixed"
                    height="200"
                    width="200"
                    className=" max-w-150-px rounded-full"
                  />
                </div>

                <div className="bg-white p-4 shadow-2xl rounded mt-4 text-center">
                  <div>
                    <motion.h3
                      className="text-4xl mt-0 font-semibold leading-normal text-blueGray-700 mb-2"
                      variants={slideLeftEntrance}
                    >
                      Tony David
                    </motion.h3>
                    <motion.div
                      className="text-sm text-blueGray-400 font-bold uppercase flex items-center justify-center "
                      variants={slideLeftEntrance}
                    >
                      <FaMapMarkerAlt className="mr-2" />
                      Indonesia
                    </motion.div>
                    <motion.div
                      className="mb-4 text-blueGray-600 mt-10 flex items-center justify-center"
                      variants={slideLeftEntrance}
                    >
                      <FiBriefcase className=" mr-3 min-w-[20px] min-h-[20px]" />
                      Frontend Engineer and College Student
                    </motion.div>
                    <motion.div
                      className="text-blueGray-600 flex items-center justify-center"
                      variants={slideLeftEntrance}
                    >
                      <FaUniversity className="  mr-3 min-w-[20px] min-h-[20px]" />
                      Sepuluh Nopember Institute of Technology
                    </motion.div>
                  </div>
                  <motion.div
                    className="mt-10 py-10 border-t border-blueGray-200 text-center"
                    variants={slideLeftEntrance}
                  >
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full px-2 lg:w-9/12 lg:px-0">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          Tony is an Electrical Engineering student who still studying at the
                          Sepuluh Nopember Institute of Technology. He is interested in studying in
                          the computer field, especially hardware. Being consistent in work and
                          politeness are his main characteristics. he loves learning programming
                          languages (Python, Javascript, etc). Right now, he is pursuing his career
                          as a FrontEnd Engineer
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
