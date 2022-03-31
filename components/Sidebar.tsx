import { useCallback, useMemo } from 'react';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Sidebar } from 'primereact/sidebar';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';

import { listContainerVariant, listVariant } from 'animation';
import { RootState } from 'features';
import { deactivateSidebar } from 'features/sidebar';

const SidebarComponent = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChangePage = useCallback(
    (value: string) => {
      router.push(value);
      dispatch(deactivateSidebar());
    },
    [dispatch, router]
  );

  const customIcons = useMemo(() => {
    return (
      <ul className="text-4xl flex items-center justify-center mr-4 gap-x-4 h-12">
        <motion.li
          whileHover={{
            y: [0, -10, 0],
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 0.5,
          }}
        >
          <SiGithub
            className="cursor-pointer dark:text-white"
            onClick={() => router.push('https://github.com/handleryouth')}
          />
        </motion.li>

        <motion.li
          whileHover={{
            y: [0, -10, 0],
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 0.5,
          }}
        >
          <SiLinkedin
            className="cursor-pointer dark:text-white"
            onClick={() => router.push('https://www.linkedin.com/in/tonydg/')}
          />
        </motion.li>
      </ul>
    );
  }, [router]);

  return (
    <>
      <Sidebar
        visible={isOpen}
        onHide={() => dispatch(deactivateSidebar())}
        icons={customIcons}
        className="dark:bg-black"
      >
        <h3 className="prose text-4xl h-12 font-bold text-transparent cursor-default bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          Where to go ?
        </h3>

        <motion.ul
          className="text-2xl my-4 flex flex-col items-start prose prose-li:pl-0 prose-li:font-semibold prose-li:inline dark:text-white"
          variants={listContainerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.li
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage('/');
              }}
            >
              Home
            </span>
          </motion.li>

          <motion.li
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl my-4 hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage('/resume');
              }}
            >
              Resume
            </span>
          </motion.li>

          <motion.li
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl  hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage('/project');
              }}
            >
              Web Project
            </span>
          </motion.li>

          <motion.li
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl  hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage('/about');
              }}
            >
              About
            </span>
          </motion.li>
        </motion.ul>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
