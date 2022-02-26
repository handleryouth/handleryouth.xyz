import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { useRouter } from 'next/router';
import { CustomTooltip } from 'components';

export default function FooterSmall() {
  const router = useRouter();

  return (
    <>
      <footer className=" bg-gradient-to-r from-[#4568DC] to-[#B06AB3]  border-t-2 border-slate-800 px-8 ">
        <div className="mt-4  border-b-2 pb-4 text-white">
          <h3 className="text-xl text-center">Reach me out on</h3>
          <ul className="flex justify-center text-3xl  mt-4">
            <li
              className="mx-2 cursor-pointer"
              onClick={() => router.push('https://github.com/handleryouth')}
            >
              <CustomTooltip
                target="github"
                text="I put all my source code here"
                icon={<FaGithub />}
              />
            </li>

            <li className="mx-2 cursor-pointer">
              <CustomTooltip
                target="mail"
                text="Email me: rafaeltonydavid@yahoo.com"
                icon={<GrMail />}
              />
            </li>
            <li
              className="mx-2 cursor-pointer"
              onClick={() => router.push('https://www.linkedin.com/in/tonydg/')}
            >
              <CustomTooltip
                target="linkedin"
                text="I'm on LinkedIn"
                icon={<FaLinkedin />}
              />
            </li>
          </ul>
        </div>

        <div className="container mx-auto  py-4 flex flex-row justify-between ">
          <div className="flex flex-wrap items-center text-white md:justify-between justify-center w-full">
            <div className="w-full md:w-4/12 ">
              <div className="text-sm font-semibold py-1 text-center md:text-left cursor-default">
                Copyright © {new Date().getFullYear()} Tony David
              </div>
            </div>
            <div className="w-full md:w-8/12 ">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center ">
                <motion.li
                  className=" hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors"
                  whileHover={{ y: -10 }}
                >
                  <span onClick={() => router.push('/resume')}>My Resume</span>
                </motion.li>
                <motion.li
                  className="hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors"
                  whileHover={{ y: -10 }}
                >
                  <span onClick={() => router.push('/project')}>
                    Web Project
                  </span>
                </motion.li>
                <motion.li
                  className="hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors"
                  whileHover={{ y: -10 }}
                >
                  <span onClick={() => router.push('/about')}>About</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
