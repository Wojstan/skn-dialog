import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import styles from "./Menu.module.css";

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
        <li className={`${styles.link} ${i === 0 ? "active" : ""}`} key={i}>
          {row.link ? (
            <Link href={row.link}>{row.label}</Link>
          ) : (
            <a className={styles.icon} href={row.exLink}>
              {row.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
