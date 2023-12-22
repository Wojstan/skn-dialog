import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './Footer.module.css'

const Footer: React.FC = () => (
  <footer className="bg-gray text-center pt-4">
    <Container className="py-3">
      <Row>
        <Col md="6">
          <h4 className="mb-3">Kontakt:</h4>
          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              skndialog@psych.uw.edu.pl
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
              <a href="https://www.facebook.com/SKNdialog/" target="_blank" rel="noreferrer">
                Odwiedź nasz facebook!
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
              <a href="https://www.instagram.com/SKNdialog/" target="_blank" rel="noreferrer">
                Odwiedź nasz instagram!
              </a>
            </li>
          </ul>
        </Col>
        <Col className="align-self-center" md="6">
          <img src="/img/logo_stopka.png" alt="" />
        </Col>
      </Row>

      <div className="mt-4 mb-2 text-muted">
        Projekt i wykonanie strony <br className="d-md-none" />
        <a href="https://ws-portfolio.vercel.app/" target="_blank" rel="noreferrer">
          <strong>Wojciech Staniszewski</strong>
        </a>
      </div>

      <small className="text-muted">© 2022 Wszelkie prawa zastrzeżone</small>
    </Container>
  </footer>
)

export default Footer
