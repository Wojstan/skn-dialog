import Footer from "@components/Footer/Footer";
import Menu from "@components/Navbar/Navbar";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Menu />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
