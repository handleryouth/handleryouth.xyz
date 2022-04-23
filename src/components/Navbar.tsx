import { listContainer } from 'animation'
import { Button } from 'components'
import { motion } from 'framer-motion'
import { Twirl as Hamburger } from 'hamburger-react'
import { activateSidebar, RootState } from 'lib/redux'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useDispatch, useSelector } from 'react-redux'
import { PAGE_LINKS } from 'utils'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootState) => state.sidebar)

  return (
    <nav className="top-0 fixed z-50  flex flex-wrap items-center justify-between  bg-black border-b-2 border-b-blue-500 dark:border-b-[#ff00cc] py-3 w-full min-w-[320px]">
      <div className="w-full flex flex-wrap items-center justify-between max-w-[69rem] mx-auto pr-5 ">
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
          <ul className="hidden lg:flex flex-row list-none ">
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
  )
}

export default Navbar
