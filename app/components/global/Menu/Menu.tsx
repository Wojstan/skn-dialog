import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./Menu.module.css";
import MenuLink from "./MenuLink/MenuLink";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    label: <FontAwesomeIcon icon={faFacebookF} />,
    exLink: "https://www.facebook.com/SKNdialog/",
  },
  {
    label: <FontAwesomeIcon icon={faInstagram} />,
    exLink: "https://www.instagram.com/dialog_skn/",
  },
];

const Menu = () => {
  const router = useRouter();

  return (
    <nav className={styles.menu}>
      <img src="/img/blue-logo.png" height={140} alt="" />

      <ul>
        {menuData.map((row, i) => (
          <MenuLink
            key={i}
            link={row.link}
            exLink={row.exLink}
            label={row.label}
            active={router.pathname === row.link}
          />
        ))}
        <li>
          <Link href="/join">
            <button className={styles.join}>Dołącz do nas!</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
