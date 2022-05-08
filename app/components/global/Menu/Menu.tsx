import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./Menu.module.css";
import MenuLink from "./MenuLink/MenuLink";

const menuData = [
  {
    label: "Strona główna",
    link: "/",
  },
  {
    label: "Kim jesteśmy?",
    link: "/about",
  },
  {
    label: "Publikacje",
    link: "/posts",
  },
  {
    label: <FontAwesomeIcon icon={faFacebook} />,
    exLink: "https://www.facebook.com/SKNdialog/",
  },
  {
    label: <FontAwesomeIcon icon={faInstagram} />,
    exLink: "https://www.instagram.com/dialog_skn/",
  },
];

const Menu = () => (
  <nav className={styles.menu}>
    <img src="/img/logo_sm.png" alt="" />

    <ul>
      {menuData.map((row, i) => (
        <MenuLink
          key={i}
          link={row.link}
          exLink={row.exLink}
          label={row.label}
          active={i === 0}
        />
      ))}
    </ul>
  </nav>
);

export default Menu;
