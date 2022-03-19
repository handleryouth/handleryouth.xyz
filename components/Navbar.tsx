import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { listContainer } from 'animation';
import { Button } from 'components';
import { RootState } from 'features';
import { activateSidebar } from 'features/sidebar';
import { motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.sidebar);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 bg-black border-b-2 border-b-blue-500 dark:border-b-[#ff00cc]">
        <div className="px-4 w-full flex flex-wrap items-center justify-between">
          <motion.p
            className=" font-bold text-xl text-white transition-colors ease-out cursor-pointer  hover:custom-gradient-text hover:from-pink-500 hover:to-violet-500"
            onClick={() => router.push('/')}
            variants={listContainer}
            animate={'visible'}
            initial={'hidden'}
          >
            Tony David
          </motion.p>

          <motion.div
            className={'flex items-center gap-x-2 lg:bg-opacity-0 lg:shadow-none'}
            variants={listContainer}
            animate={'visible'}
            initial={'hidden'}
          >
            <ul className="hidden lg:flex flex-row list-none">
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
            <Button
              icon={`pi ${theme === 'light' ? 'pi-moon' : 'pi-sun'}`}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-0 !w-15 !h-12 bg-transparent text-white border-white hover:!bg-transparent"
            />
            <Button
              components={<Hamburger toggled={isOpen} size={23} />}
              onClick={() => dispatch(activateSidebar())}
              className="p-0 !w-15 !h-12  lg:hidden bg-transparent text-white border-white hover:!bg-transparent"
            />
          </motion.div>
        </div>
      </nav>
    </>
  );
}
