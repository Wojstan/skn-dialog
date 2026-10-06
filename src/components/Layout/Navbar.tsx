import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'

export function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false)
  
  return (
    <nav className="bg-lighterBlue p-4 flex flex-col items-center justify-between lg:flex-row">
      <Link href="/">
        <img className="cursor-pointer h-28" src="/images/blue-logo.png" alt="SKN DIALOG" />
      </Link>

      <div className="flex items-center flex-col lg:flex-row">
        <ul className="flex gap-6">
          {innerLinks.map(({ label, href }, index) => (
            <li
              className="text-blue tracking-widest hover:text-pink transition-colors"
              key={index}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}

          <li className="relative text-blue tracking-widest group">
  <button
    type="button"
    onClick={() => setProjectsOpen(!projectsOpen)}
    className="cursor-pointer hover:text-pink transition-colors"
  >
    Projekty
  </button>

  <ul
    className={`absolute top-full right-0 ${
      projectsOpen ? 'block' : 'hidden'
    } lg:group-hover:block bg-white shadow-lg z-50 w-[420px] max-w-[90vw] py-2`}
  >
    {projectLinks.map(({ label, href }, index) => (
      <li key={index}>
        <Link
          href={href}
          className="block px-4 py-2 whitespace-normal break-words hover:text-pink hover:bg-gray transition-colors"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
</li>
        </ul>

        <ul className="flex gap-6 mx-6">
          {externalLinks.map(({ href, label }, index) => (
            <li
              className="text-blue tracking-widest hover:text-pink transition-colors"
              key={index}
            >
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

const projectLinks = [
  {
    label: 'Ogólnopolska Konferencja Zaburzeń Osobowości',
    href: '/projekty/konferencja-zaburzen-osobowosci',
  },
  {
    label: 'Dialogi o psychoterapii',
    href: '/projekty/dialogi-o-psychoterapii',
  },
  {
    label: 'Psychowieści',
    href: '/projekty/psychowiesci',
  },
  {
    label: 'Projekt PsychoEDUkacyjny',
    href: '/projekty/psychoedukacyjny',
  },
  {
    label: 'Dyskusyjny Klub Filmowy Psycho mUWi',
    href: '/projekty/dyskusyjny-klub-filmowy-psychomuwi',
  },
  {
    label: 'Sekcja Badawcza',
    href: '/projekty/sekcja-badawcza',
  },
  {
    label: 'Sekcja mediów społecznościowych',
    href: '/projekty/sekcja-mediow-spolecznosciowych',
  },
]

const externalLinks = [
  {
    label: <FontAwesomeIcon icon={faFacebookF} />,
    href: 'https://www.facebook.com/SKNdialog/',
  },
  {
    label: <FontAwesomeIcon icon={faInstagram} />,
    href: 'https://www.instagram.com/dialog_skn/',
  },
]