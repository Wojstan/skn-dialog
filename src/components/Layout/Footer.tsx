import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className="bg-gray text-center p-3">
      <ul className="text-zinc-500 flex justify-center gap-4">
        <li className="hover:text-pink transition-colors">
          <a href="mailto:skndialog@psych.uw.edu.pl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li className="hover:text-pink transition-colors">
          <a href="https://www.facebook.com/SKNdialog/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li className="hover:text-pink transition-colors">
          <a href="https://www.instagram.com/SKNdialog/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>

      <small className="text-zinc-500">© 2022 Wszelkie prawa zastrzeżone</small>
    </footer>
  )
}
