import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { RootState } from 'features';
import { activateSidebar } from 'features/sidebar';
import { useRouter } from 'next/router';
import { listContainer } from 'animation';

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.sidebar);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 bg-black border-b-2 border-b-blue-500 ">
        <div className="px-4 w-full flex flex-wrap items-center justify-between">
          <motion.div
            className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start "
            variants={listContainer}
            animate={'visible'}
            initial={'hidden'}
          >
            <p
              className=" font-bold text-xl text-white transition-colors ease-out cursor-pointer  hover:custom-gradient-text hover:from-pink-500 hover:to-violet-500"
              onClick={() => router.push('/')}
            >
              Tony David
            </p>

            <button
              className="cursor-pointer  focus:outline-none text-white lg:hidden"
              type="button"
              onClick={() => dispatch(activateSidebar())}
            >
              <Hamburger toggled={isOpen} size={20} />
            </button>
          </motion.div>
          <motion.div
            className={'hidden lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none'}
            variants={listContainer}
            animate={'visible'}
            initial={'hidden'}
          >
            <ul className="flex flex-row list-none mr-auto">
              <li>
                <span
                  className="custom-navbarlink text-blueGray-700"
                  onClick={() => {
                    router.push('/resume');
                  }}
                >
                  My Resume
                </span>
              </li>

              <li>
                <span
                  className="custom-navbarlink text-blueGray-700"
                  onClick={() => {
                    router.push('/project');
                  }}
                >
                  Web Project
                </span>
              </li>
              <li>
                <span
                  className="custom-navbarlink text-blueGray-700"
                  onClick={() => {
                    router.push('/about');
                  }}
                >
                  About
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
