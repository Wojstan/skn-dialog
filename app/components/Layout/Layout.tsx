import Footer from "components/navigation/Footer/Footer";
import Menu from "components/navigation/Navbar/Menu";
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
