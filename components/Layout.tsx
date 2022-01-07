import { ReactNode } from "react";
import FooterSmall from "./Footers/FooterSmall";
import AuthNavbar from "./Navbars/AuthNavbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-[320px]">
      <AuthNavbar />
      {children}
      <FooterSmall />
    </div>
  );
}

export default Layout;
