import Footer from "@global/Footer/Footer";
import Menu from "@global/Menu/Menu";
import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: FC<LayoutProps> = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default AdminLayout;
