import { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';

import FooterSmall from './Footer';
import AuthNavbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar />

      <div className="!min-w-[320px] !max-w-none prose dark:prose-invert prose-ul:list-none  dark:prose-h1:dark-custom-header">
        <AuthNavbar />
        {children}
        <FooterSmall />
      </div>
    </>
  );
}

export default Layout;
