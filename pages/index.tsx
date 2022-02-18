import { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { slideLeftEntrance } from "animation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tony David Personal Website</title>
        <meta name="description" content="Tony David personal website" />
        <meta
          name="keywords"
          content="NextJS, Tailwind, React, Redux, Tony David, handleryouth"
        />
      </Head>
      <main className="profile-page">
        <section className="relative block h-500-px  sm:!h-[50vh] ">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
        </section>
        <section className="relative py-16 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] sm:h-[50vh] sm:min-h-[500px] ">
          <div className="container mx-auto px-4">
            <motion.div
              className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48"
              initial="hidden"
              animate="visible"
              transition={{
                when: "beforeChildren",
                delay: 0.8,
                staggerChildren: 0.25,
              }}
            >
              <div className="px-6">
                <div className="flex flex-wrap justify-center relative">
                  <div className="absolute bottom-0">
                    <Image
                      alt="..."
                      src="/personal-img.png"
                      layout="fixed"
                      height="200"
                      width="200"
                      className=" rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="text-center mt-12">
                  <motion.h3
                    className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2"
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
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Tony is an Electrical Engineering student who still
                        studying at the Sepuluh Nopember Institute of
                        Technology. He is interested in studying in the computer
                        field, especially hardware. Being consistent in work and
                        politeness are his main characteristics. he loves
                        learning programming languages (Python, Javascript,
                        etc). Right now, he is pursuing his career as a FrontEnd
                        Engineer
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
