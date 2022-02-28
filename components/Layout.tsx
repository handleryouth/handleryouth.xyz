import { ReactNode } from 'react';
import Head from 'next/head';
import FooterSmall from './Footers/FooterSmall';
import AuthNavbar from './Navbars/AuthNavbar';
import Sidebar from './Sidebar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar />

      <div className="min-w-[320px] !max-w-none prose prose-ul:list-none">
        <AuthNavbar />
        {children}
        <FooterSmall />
      </div>
    </>
  );
}

export default Layout;
