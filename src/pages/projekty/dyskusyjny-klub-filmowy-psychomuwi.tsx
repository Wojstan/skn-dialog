import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { Subtitle } from 'components/Common/Subtitle'
import { FacebookEvents } from 'components/Common/FacebookEvents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const currentTeam = [
  'Dominika Kuźbiel - koordynatorka',
  'Jowita Krawczyk - koordynatorka',
]

export default function DyskusyjnyKlubFilmowyPsychomUWi() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Dyskusyjny Klub Filmowy Psycho mUWi</title>
      </Head>

      <DefaultLayout background="gray">
        <main className="container m-auto p-3 py-16">
          <div className="text-center space-y-6">
            <Title>Dyskusyjny Klub Filmowy Psycho mUWi</Title>

            <Description>
              Ten projekt został stworzony z myślą o osobach pasjonujących się
              kinem. Założeniem DKF Psycho mUWi jest łączenie wiedzy
              psychologicznej z wątkami, które znajdziemy w filmach czy
              serialach.
            </Description>
          </div>

<div className="flex justify-center gap-4 mt-10 flex-wrap">
  <a
    href="https://www.instagram.com/dkfpsychomuwi/"
    target="_blank"
    rel="noreferrer"
    className="bg-pink text-white px-5 py-3 rounded hover:opacity-80 transition-opacity"
  >
    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
    Instagram
  </a>

  <a
    href="mailto:projekt.psychomuwi@psych.uw.edu.pl"
    className="bg-white text-blue px-5 py-3 rounded hover:text-pink transition-colors"
  >
    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
    Mail
  </a>

  <a
    href="https://www.facebook.com/dkfpsychomuwi/"
    target="_blank"
    rel="noreferrer"
    className="bg-blue text-white px-5 py-3 rounded hover:opacity-80 transition-opacity"
  >
    <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
    Facebook
  </a>
</div>

  <section className="mt-20">
    <Subtitle>Zespół 2026/27</Subtitle>

    <div className="grid md:grid-cols-2 gap-x-32 gap-y-1 mt-6 text-left">
      {currentTeam.map((person) => (
        <p key={person}>{person}</p>
      ))}
    </div>
  </section>

         <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16 mt-20">
  <section>
    <Subtitle>Zespół 2025/26</Subtitle>

    <div className="mt-10 space-y-1 text-left">
      <p>Dominika Kuźbiel - koordynatorka</p>
      <p>Eliza Zajączkowska - koordynatorka</p>
      <p>Zet Kozłowskie</p>
      <p>Łucja Niziołek</p>
      <p>Aleksandra Budzisz</p>
      <p>Gabriela Bagińska</p>
      <p>Iga Wolińska</p>
      <p>Jowita Krawczyk</p>
      <p>Julia Wojda</p>
      <p>Oliwia Tołkacz</p>
      <p>Jacek Augustyn</p>
      <p>Natalia Koryluk</p>
      <p>Paweł Walczuk</p>
      <p>Julia Osiej</p>
      <p>Marta Karol</p>
      <p>Katarzyna Sitarz</p>
    </div>
  </section>

  <FacebookEvents />
</div>
        </main>
      </DefaultLayout>
    </>
  )
}