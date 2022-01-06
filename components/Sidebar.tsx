import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Sidebar } from "primereact/sidebar";
import { RootState } from "features";
import { deactivateSidebar } from "features/sidebar";

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

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const listContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Sidebar visible={isOpen} onHide={() => dispatch(deactivateSidebar())}>
        <h3 className="text-4xl font-bold text-transparent cursor-default bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          Where to go ?
        </h3>
        <motion.ul
          className="text-2xl my-4"
          variants={listContainerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="my-4" variants={listVariant}>
            <span
              className="text-2xl hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/");
              }}
            >
              Home
            </span>
          </motion.li>

          <motion.li className="my-4 " variants={listVariant}>
            <span
              className="text-2xl my-4 hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/resume");
              }}
            >
              Resume
            </span>
          </motion.li>

          <motion.li className="my-4" variants={listVariant}>
            <span
              className="text-2xl  hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/project");
              }}
            >
              Web Project
            </span>
          </motion.li>

          <motion.li className="my-4 " variants={listVariant}>
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
