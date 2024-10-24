import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'
import { Button } from 'components/Common/Button'

export function Navbar() {
  return (
    <nav className="bg-lighterBlue p-4 flex flex-col items-center justify-between lg:flex-row">
      <Link href="/">
        <img className="cursor-pointer h-28" src="/images/blue-logo.png" alt="SKN DIALOG" />
      </Link>

      <div className="flex items-center flex-col lg:flex-row">
        <ul className="flex gap-6">
          {innerLinks.map(({ label, href }, index) => (
            <li className="text-blue tracking-widest hover:text-pink transition-colors" key={index}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-6 mx-6">
          {externalLinks.map(({ href, label }, index) => (
            <li className="text-blue tracking-widest hover:text-pink transition-colors" key={index}>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const innerLinks = [
  {
    label: 'Strona główna',
    href: '/',
  },
  {
    label: 'Kim jesteśmy?',
    href: '/kim-jestesmy',
  },
]

const externalLinks = [
  {
    label: <FontAwesomeIcon icon={faFacebookF} />,
    href: 'https://www.facebook.com/SKNdialog/',
    link: true,
  },
  {
    label: <FontAwesomeIcon icon={faInstagram} />,
    href: 'https://www.instagram.com/dialog_skn/',
    link: true,
  },
]
