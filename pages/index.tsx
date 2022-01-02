import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";

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
        <meta name="language" content="English" />
        <meta name="author" content="Tony David" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="profile-page">
        <section className="relative block h-500-px">
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
        <section className="relative py-16 bg-gradient-to-r from-[#1488CC] to-[#2B32B2]">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
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
                  <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                    Tony David
                  </h3>
                  <div className="text-sm text-blueGray-400 font-bold uppercase flex items-center justify-center ">
                    <FaMapMarkerAlt className="mr-2" />
                    Indonesia
                  </div>
                  <div className="mb-4 text-blueGray-600 mt-10  flex items-center justify-center">
                    <FiBriefcase className="mr-2" />
                    Frontend Engineer and College Student
                  </div>
                  <div className="text-blueGray-600 flex items-center justify-center">
                    <FaUniversity className="mr-2" />
                    Sepuluh Nopember Institute of Technology
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
