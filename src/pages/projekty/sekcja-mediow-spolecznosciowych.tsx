import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { Subtitle } from 'components/Common/Subtitle'

const currentTeam = [
  'Karolina Białous - koordynatorka',
  'Julia Ciach - koordynatorka',
]

const team = [
  'Karolina Białous - koordynatorka',
  'Magdalena Łyskawka',
  'Gabriela Długokęcka',
  'Herbert Białach',
  'Jan Strojny',
  'Julia Ciach',
  'Julia Walkiewicz',
  'Kaja Żurawiecka',
  'Magdalena Rafińska',
  'Marta Baczyńska',
  'Natalia Koryluk',
  'Zofia Ostrowska',
  'Wiktoria Szymborska',
]

export default function SekcjaMediowSpolecznosciowych() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Sekcja mediów społecznościowych</title>
      </Head>

      <DefaultLayout background="gray">
        <main className="container m-auto p-3 py-16">
          <div className="text-center space-y-6">
            <Title>Sekcja mediów społecznościowych</Title>

            <Description>
              Sekcja Mediów Społecznościowych została wyodrębniona, aby rozwijać i wzmacniać obecność Koła „Dialog” w mediach społecznościowych. Jej celem jest zwiększanie widoczności naszych działań, promowanie inicjatyw i projektów Koła oraz tworzenie angażujących treści związanych z psychoterapią i działalnością naukową. Chcemy również budować społeczność osób zainteresowanych psychoterapią i rozwijać relacje z osobami spoza murów uczelni, tworząc przestrzeń do wymiany wiedzy, doświadczeń i inspiracji.
            </Description>
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
                {team.map((person) => (
                  <p key={person}>{person}</p>
                ))}
              </div>
            </section>

            <section>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <Subtitle>Zaobserwuj nas by być na bieżąco!</Subtitle>

                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href="https://www.instagram.com/dialog_skn/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-pink text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/SKNdialog/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </DefaultLayout>
    </>
  )
}