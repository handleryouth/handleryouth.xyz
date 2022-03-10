import Link from 'next/link';
import { useRouter } from 'next/router';
import { listContainer } from 'animation';
import { RootState } from 'features';
import { activateSidebar } from 'features/sidebar';
import { motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';

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
                <Link href="/resume">
                  <a className="custom-link">My Resume</a>
                </Link>
              </li>

              <li>
                <Link href="/project">
                  <a className="custom-link">Web Project</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="custom-link">About</a>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
