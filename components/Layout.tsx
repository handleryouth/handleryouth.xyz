import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
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

      <div className="!min-w-[320px] !max-w-none prose dark:prose-invert prose-ul:list-none  dark:prose-h1:dark-custom-header dark:prose-p:text-white">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
