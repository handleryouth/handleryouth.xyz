import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sidebar } from 'primereact/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { listContainerVariant, listVariant } from 'animation';
import { deactivateSidebar, RootState } from 'lib/redux';
import { FOOTER_LINK, SIDEBAR_LINKS } from 'utils';

const SidebarComponent = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  const router = useRouter();
  const dispatch = useDispatch();

  const customIcons = useMemo(() => {
    return (
      <ul className="text-4xl flex items-center justify-center mr-4 gap-x-4 h-12">
        {FOOTER_LINK.filter(item => item.name !== 'Email').map((item, index) => (
          <motion.li
            key={index}
            whileHover={{
              y: [0, -10, 0],
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              duration: 0.5,
            }}
          >
            <item.icon
              className="cursor-pointer dark:text-white"
              onClick={() => router.push(item.url)}
            />
          </motion.li>
        ))}
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
          {SIDEBAR_LINKS.map((link, index) => (
            <motion.li
              key={index}
              variants={listVariant}
              whileHover={{
                x: [0, 20, 0],
              }}
            >
              <Link passHref href={link.url}>
                <a className="text-2xl hover:text-blue-500 cursor-pointer transition-colors text-white font-bold no-underline">
                  {link.label}
                </a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
