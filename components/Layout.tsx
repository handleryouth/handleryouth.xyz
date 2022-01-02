import { ReactNode } from "react";
import FooterSmall from "./Footers/FooterSmall";
import AuthNavbar from "./Navbars/AuthNavbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthNavbar />
      {children}
      <FooterSmall />
    </>
  );
}

export default Layout;
