import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function FooterSmall() {
  const router = useRouter();
  return (
    <>
      <footer className=" bg-gradient-to-r from-[#4568DC] to-[#B06AB3]  border-t-2 border-slate-800 ">
        <div className="container mx-auto px-4 py-4 flex flex-row justify-between min-h-[100px]">
          <div className="flex flex-wrap items-center text-white md:justify-between justify-center w-full">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm font-semibold py-1 text-center md:text-left cursor-default">
                Copyright © {new Date().getFullYear()} Tony David
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center ">
                <motion.li
                  className=" hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors"
                  whileHover={{ y: -10 }}
                >
                  <span onClick={() => router.push("/resume")}>My Resume</span>
                </motion.li>
                <motion.li
                  className="hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors"
                  whileHover={{ y: -10 }}
                >
                  <span onClick={() => router.push("/project")}>
                    Web Project
                  </span>
                </motion.li>
                <motion.li
                  className="hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors"
                  whileHover={{ y: -10 }}
                >
                  <span onClick={() => router.push("/about")}>About</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
