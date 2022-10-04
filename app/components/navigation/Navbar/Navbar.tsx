import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./Navbar.module.css";
import React from "react";
import Link from "next/link";

const menuData = [
  {
    label: "Strona główna",
    link: "/",
  },
  {
    label: "Kim jesteśmy?",
    link: "/kim-jestesmy",
  },
];

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <img className="img-fluid" src="/img/blue-logo.png" alt="SKN DIALOG" />

      <div className="d-flex flex-column align-items-center flex-xl-row">
        <ul>
          {menuData.map((link, i) => (
            <li key={i}>
              <Link href={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <a
              href="https://www.facebook.com/SKNdialog/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dialog_skn/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>

        <div>
          <Link href="/dolacz-do-nas">
            <button className={styles.join}>Dołącz do nas!</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
