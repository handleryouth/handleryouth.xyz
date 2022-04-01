import React, { Suspense, ReactNode, useEffect, useState } from 'react';

import Head from 'next/head';

import Navbar from './Navbar';

const LazySidebar = React.lazy(() => import('./Sidebar'));
const LazyFooter = React.lazy(() => import('./Footer'));

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
      <Suspense fallback={null}>
        <LazySidebar />
      </Suspense>

      <div className="!min-w-[320px] !max-w-none prose dark:prose-invert prose-ul:list-none  dark:prose-h1:dark-custom-header dark:prose-p:text-white">
        <Navbar />
        {children}
        <Suspense fallback={null}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
}

export default Layout;
