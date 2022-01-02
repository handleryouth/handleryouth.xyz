import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Sidebar } from "primereact/sidebar";
import { RootState } from "features";
import { deactivateSidebar } from "features/sidebar";
import { useCallback } from "react";

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

  return (
    <>
      <Sidebar visible={isOpen} onHide={() => dispatch(deactivateSidebar())}>
        <h3 className="text-4xl font-bold text-transparent cursor-default bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          Where to go ?
        </h3>
        <ul className="text-2xl my-4 ">
          <li className="my-4 ">
            <span
              className="text-2xl hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/");
              }}
            >
              Home
            </span>
          </li>

          <li className="my-4 ">
            <span
              className="text-2xl my-4 hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/resume");
              }}
            >
              Resume
            </span>
          </li>

          <li className="my-4">
            <span
              className="text-2xl  hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/project");
              }}
            >
              Web Project
            </span>
          </li>

          <li className="my-4 ">
            <span
              className="text-2xl  hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => {
                handleChangePage("/about");
              }}
            >
              About
            </span>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
