import Link from 'next/link';
import { CustomTooltip } from 'components';
import { FOOTER_LINK, PAGE_LINKS } from 'utils';

const Footer = () => {
  return (
    <>
      <footer className="bg-black border-t-2 border-t-blue-500 dark:border-t-[#ff00cc] px-8 ">
        <div className="border-b-2 pb-4 prose-li:pl-0 prose-ul:pl-0 prose-ul:text-white prose-li:cursor-pointer prose-h3:text-white prose-li:text-3xl prose-li:mx-2 prose-li:my-0 prose-ul:my-2">
          <h3 className="text-xl text-center">Reach me out on</h3>
          <ul className="flex justify-center text-3xl  mt-4">
            {FOOTER_LINK.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <Link passHref href={item.url}>
                  <a>
                    <CustomTooltip
                      target={item.name}
                      icon={<item.icon />}
                      text={item.textDescription}
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto py-4 flex lg:w-4/5 max-w-[1100px] justify-between ">
          <div className="flex flex-col sm:flex-row items-center text-white sm:justify-between justify-center w-full">
            <div className="text-sm font-semibold py-1 md:text-left">
              Copyright © {new Date().getFullYear()} Tony David
            </div>

            <div className="prose-ul:pl-0 mt-2 sm:mt-0">
              <ul className="flex flex-wrap flex-col smallDisplay:flex-row text-center gap-y-4 smallDisplay:text-left  prose-li:pl-0 prose-li:my-0  ">
                {PAGE_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} passHref>
                      <a className="custom-link">{link.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
