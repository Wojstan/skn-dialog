import Footer from "@global/Footer/Footer";
import Menu from "@global/Menu/Menu";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Menu />
    {children}
    <Footer />
  </>
);

export default Layout;
