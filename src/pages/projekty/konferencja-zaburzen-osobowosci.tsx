import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { Waves } from 'components/Common/Waves'
import { ConferenceEdition } from 'components/Common/ConferenceEdition'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Konferencja() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Ogólnopolska Konferencja Zaburzeń Osobowości</title>
      </Head>

      <DefaultLayout background="gray">
        {/* Nagłówek konferencji */}
        <header>
          <Waves color="blue" />

          <article className="container mx-auto text-center px-4 py-16">
            <Title>Ogólnopolska Konferencja Zaburzeń Osobowości</Title>

            <div className="max-w-3xl m-auto mt-6">
              <Description>
                Konferencja odbywa się stacjonarnie. Co roku wybierane jest
                inne zaburzenie osobowości, które jest tematem przewodnim.
                Praca w projekcie koncentruje się na organizacji i
                przeprowadzeniu konferencji.
              </Description>
            </div>

            {/* Social media */}
            <div className="flex justify-center gap-4 mt-10 flex-wrap">
              <a
                href="https://www.instagram.com/kzo.skndialog/"
                target="_blank"
                rel="noreferrer"
                className="bg-pink text-white px-5 py-3 rounded hover:opacity-80 transition-opacity"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                Instagram
              </a>

              <a
                href="mailto:konferencja.przekraczajacgranice@psych.uw.edu.pl"
                className="bg-white text-blue px-5 py-3 rounded hover:text-pink transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Mail
              </a>

              <a
                href="https://www.facebook.com/konferencja.skndialog"
                target="_blank"
                rel="noreferrer"
                className="bg-blue text-white px-5 py-3 rounded hover:opacity-80 transition-opacity"
              >
                <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
                Facebook
              </a>

            </div>
          </article>
        </header>

<ConferenceEdition
  year="2026/27"
  sections={[
    {
      title: 'Sekcja Merytoryczna',
      people: [
        'Martyna Krzempek',
        'Łucja Niziołek',
      ],
    },
    {
      title: 'Sekcja Logistyczna',
      people: [
        'Hanna Ciekanowska - koordynatorka logistyczna',
      ],
    },
    {
      title: 'Sekcja PR',
      people: [
        'koordynatorka PR',
      ],
    },
    {
      title: 'Graficzka',
      people: [
        'Urszula Andrzejuk',
      ],
    },
  ]}
/>

        <ConferenceEdition
          year="2025/26"
          banner="/images/konferencja/2025-26-banner.jpg"
          sections={[
            {
              title: 'Sekcja Merytoryczna',
              people: [
                'Gabriela Rejnhard - koordynatorka merytoryczna',
                'Aleksandra Budzisz - specjalistka ds. merytorycznych',
                'Valeriia Shliakhova',
                'Martyna Krzempek',
                'Aleksandra Piasecka',
                'Łucja Niziołek',
              ],
            },
            {
              title: 'Sekcja Logistyczna',
              people: [
                'Martyna Bachar - koordynatorka logistyczna',
                'Katarzyna Woźniak',
                'Laura Kłos',
                'Magdalena Rafińska',
                'Barbara Synak',
                'Urszula Nikścin',
              ],
            },
            {
              title: 'Sekcja PR',
              people: [
                'Hanna Ciekanowska - specjalistka ds. PR',
                'Urszula Głowicka',
                'Weronika Orzeł',
                'Aleksandra Suska',
              ],
            },
            {
              title: 'Graficzki',
              people: [
                'Urszula Andrzejuk',
                'Barbara Synak',
                'Kaja Żurawiecka',
              ],
            },
          ]}
        />

                <ConferenceEdition
          year="2024/25"
          banner="/images/konferencja/2024-25-banner.jpg"      
          sections={[
            {
              title: 'Sekcja Merytoryczna',
              people: [
                'Jagoda Krzos - koordynatorka merytoryczna',
                'Dominik Stępiński - specjalista ds. merytorycznych',
                'Małgorzata Budzińska',
                'Julia Ners',
                'Aleksandra Piasecka',
                'Zofia Górska',
              ],
            },
            {
              title: 'Sekcja Logistyczna',
              people: [
                'Gabriela Kucharska (Rejnhard) - koordynatorka logistyczna',
                'Julia Wierzchowska',
                'Monika Fijołek',
                'Maria Krajewska',
                'Martyna Bachar',
                'Hanna Ciekanowska',
              ],
            },
            {
              title: 'Sekcja PR',
              people: [
                'Julia Wójciak - specjalistka ds. PR',
                'Gabriela Burak',
                'Weronika Śliwińska',
                'Kamila Pożarowska',
              ],
            },
            {
              title: 'Graficzki',
              people: [
                'Urszula Andrzejuk',
                'Wiktoria Krzywy',
              ],
            },
          ]}
        />

      </DefaultLayout>
    </>
  )
}