import { useDispatch, useSelector } from "react-redux";
import { Twirl as Hamburger } from "hamburger-react";
import { activateSidebar } from "features/sidebar";
import { RootState } from "features";
import { useRouter } from "next/router";

// components

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.sidebar);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black/60 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start ">
            <p
              className=" font-bold text-xl text-white cursor-pointer"
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
          </div>
          <div
            className={
              "hidden lg:flex flex-grow items-center  lg:bg-opacity-0 lg:shadow-none"
            }
          >
            <ul className="flex flex-row list-none mr-auto">
              <li className="flex items-center">
                <span
                  className="lg:text-white hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2  cursor-pointer transition-colors text-xs uppercase font-bold"
                  onClick={() => {
                    router.push("/resume");
                  }}
                >
                  My Resume
                </span>
              </li>

              <li className="flex items-center">
                <span
                  className="lg:text-white hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2  cursor-pointer transition-colors text-xs uppercase font-bold"
                  onClick={() => {
                    router.push("/project");
                  }}
                >
                  Web Project
                </span>
              </li>
              <li className="flex items-center">
                <span
                  className="lg:text-white hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2  cursor-pointer transition-colors text-xs uppercase font-bold"
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  About
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
