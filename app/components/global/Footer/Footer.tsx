import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FooterLink from "./FooterLink/FooterLink";

import styles from "./Footer.module.css";

const footerData = [
  {
    link: "https://www.facebook.com/SKNdialog/",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    link: "skndialog@psych.uw.edu.pl",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    link: "https://www.instagram.com/dialog_skn/",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <h3 className="mb-3">Kontakt:</h3>
      <ul>
        {footerData.map((row, i) => (
          <FooterLink key={i} link={row.link} icon={row.icon} />
        ))}
      </ul>
    </div>
    <div>
      <h3 className="mb-3">Studenckie Koło Naukowe Psychoterapii DIALOG</h3>
      <span>
        <small>Wydział Psychologii Uniwersytetu Warszawskiego</small>
      </span>
      <br />
      <span>
        <small>ul. Stawki 5/7, 00-183 Warszawa</small>
      </span>
    </div>
    <img src="/img/logo_stopka.png" alt="" />
  </footer>
);

export default Footer;
