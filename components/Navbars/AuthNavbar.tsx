import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Twirl as Hamburger } from "hamburger-react";
import { RootState } from "features";
import { activateSidebar } from "features/sidebar";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.sidebar);

  const listContainer = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      x: 10,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black/60 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <motion.div
            className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start "
            variants={listContainer}
            animate={"visible"}
            initial={"hidden"}
          >
            <p
              className=" font-bold text-xl text-white cursor-pointer mr-3"
              onClick={() => router.push("/")}
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
            className={
              "hidden lg:flex flex-grow items-center  lg:bg-opacity-0 lg:shadow-none"
            }
            variants={listContainer}
            animate={"visible"}
            initial={"hidden"}
          >
            <ul className="flex flex-row list-none mr-auto">
              <motion.li
                whileHover={{
                  y: "-5px",
                }}
              >
                <span
                  className="custom-navbarlink text-blueGray-700"
                  onClick={() => {
                    router.push("/resume");
                  }}
                >
                  My Resume
                </span>
              </motion.li>

              <motion.li
                whileHover={{
                  y: "-5px",
                }}
              >
                <span
                  className="custom-navbarlink text-blueGray-700"
                  onClick={() => {
                    router.push("/project");
                  }}
                >
                  Web Project
                </span>
              </motion.li>
              <motion.li
                whileHover={{
                  y: "-5px",
                }}
              >
                <span
                  className="custom-navbarlink text-blueGray-700"
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  About
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
