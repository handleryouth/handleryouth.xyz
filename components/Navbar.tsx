import { motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { listContainer } from 'animation';
import { Button } from 'components';
import { activateSidebar, RootState } from 'lib/redux';
import { PAGE_LINKS } from 'utils';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.sidebar);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 bg-black border-b-2 border-b-blue-500 dark:border-b-[#ff00cc] py-3">
        <div className="px-4 w-full flex flex-wrap items-center justify-between">
          <Link href={'/'} passHref>
            <motion.a
              className="font-bold text-xl bg-transparent animate-hue-rotate  custom-gradient-text from-[#667db6] to-[#0082c8] no-underline"
              variants={listContainer}
              animate={'visible'}
              initial={'hidden'}
            >
              Tony David
            </motion.a>
          </Link>

          <motion.div
            className={'flex items-center gap-x-2 lg:bg-opacity-0 lg:shadow-none'}
            variants={listContainer}
            animate={'visible'}
            initial={'hidden'}
          >
            <ul className="hidden lg:flex flex-row list-none">
              {PAGE_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} passHref>
                    <a className="custom-link">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              icon={`pi ${theme === 'light' ? 'pi-moon' : 'pi-sun'}`}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-0 !w-15 !h-12 bg-transparent text-white border-white hover:!bg-transparent"
            />
            <Button
              components={<Hamburger toggled={isOpen} size={23} />}
              onClick={() => dispatch(activateSidebar())}
              className="p-0 !w-15 !h-12  lg:hidden bg-transparent text-white border-white hover:!bg-transparent"
            />
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
