import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./Menu.module.css";
import MenuLink from "./MenuLink/MenuLink";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

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

const Menu = () => {
  const menuRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const [scroll, setScroll] = useState(0);
  const router = useRouter();

  const navClasses = `${styles.menu} ${isHidden ? styles.hide : styles.show}`;

  const onScroll = useCallback(
    (e: any) => {
      const window = e.currentTarget;

      if (window.scrollY === 0) {
        setIsHidden(false);
        return;
      }

      setIsHidden(!(scroll > window.scrollY));
      setScroll(window.scrollY);
    },
    [scroll]
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <nav ref={menuRef} className={navClasses}>
      <img src="/img/logo_sm.png" alt="" />

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
      </ul>
    </nav>
  );
};

export default Menu;
