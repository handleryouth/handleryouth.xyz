import { ReactNode, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import FooterSmall from './Footer';
import AuthNavbar from './Navbar';

function Layout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const DynamicSidebar = dynamic(() => import('./Sidebar'));
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
      <DynamicSidebar />

      <div className="!min-w-[320px] !max-w-none prose dark:prose-invert prose-ul:list-none  dark:prose-h1:dark-custom-header">
        <AuthNavbar />
        {children}
        <FooterSmall />
      </div>
    </>
  );
}

export default Layout;
