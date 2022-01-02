import { useRouter } from "next/router";

export default function FooterSmall() {
  const router = useRouter();
  return (
    <>
      <footer className=" bg-gradient-to-r from-[#FC5C7D] to-[#6A82FB]  border-t-2 border-slate-800 border-">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center text-white md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm font-semibold py-1 text-center md:text-left cursor-default">
                Copyright © {new Date().getFullYear()} Tony David
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center ">
                <li className=" hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors">
                  <span onClick={() => router.push("/resume")}>My Resume</span>
                </li>
                <li className="hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors">
                  <span onClick={() => router.push("/project")}>
                    Web Project
                  </span>
                </li>
                <li className="hover:text-blue-700 text-sm font-semibold block my-1 mx-3 cursor-pointer transition-colors">
                  <span onClick={() => router.push("/about")}>About</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
