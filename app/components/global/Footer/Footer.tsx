import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      footer
    </div>
  );
};

export default Footer;
