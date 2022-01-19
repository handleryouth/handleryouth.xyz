import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Sidebar } from "primereact/sidebar";
import { RootState } from "features";
import { deactivateSidebar } from "features/sidebar";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { listContainerVariant, listVariant } from "animation";

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
      <ul className="text-4xl flex items-center justify-center mr-4">
        <motion.li
          whileHover={{
            y: [0, -10, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
          }}
        >
          <SiGithub
            className="mr-4 cursor-pointer"
            onClick={() => router.push("https://github.com/handleryouth")}
          />
        </motion.li>

        <motion.li
          whileHover={{
            y: [0, -10, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
          }}
        >
          <SiLinkedin
            className="cursor-pointer"
            onClick={() => router.push("https://www.linkedin.com/in/tonydg/")}
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
      >
        <h3 className="text-4xl font-bold text-transparent cursor-default bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          Where to go ?
        </h3>

        <motion.ul
          className="text-2xl my-4 "
          variants={listContainerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.li
            className="my-4"
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/");
              }}
            >
              Home
            </span>
          </motion.li>

          <motion.li
            className="my-4 "
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl my-4 hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/resume");
              }}
            >
              Resume
            </span>
          </motion.li>

          <motion.li
            className="my-4"
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl  hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/project");
              }}
            >
              Web Project
            </span>
          </motion.li>

          <motion.li
            className="my-4 "
            variants={listVariant}
            whileHover={{
              x: [0, 20, 0],
            }}
          >
            <span
              className="text-2xl  hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/about");
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
