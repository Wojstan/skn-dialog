import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { Subtitle } from 'components/Common/Subtitle'

const currentTeam = [
  'Gabriela Rejnhard - koordynatorka',
]

const team = [
  'Wiktoria Kopecka - osoba koordynująca',
  'Martyna Bachar',
  'Karolina Białous',
  'Martyna Krzempek',
  'Aleksandra Lubkowska',
  'Jakub Szlakiewicz',
  'Agata Wróblewska',
  'Aleksandra Budzisz',
  'Laura Kłos',
  'Natalia Szeliga',
]

export default function SekcjaBadawcza() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Sekcja Badawcza</title>
      </Head>

      <DefaultLayout background="gray">
        <main className="container m-auto p-3 py-16">
          <div className="text-center space-y-6">
            <Title>Sekcja Badawcza</Title>

            <Description>
              Sekcja stworzona dla osób zainteresowanych w przyszłości pracą
              naukową. W jej obrębie przeprowadzamy autorskie badania naukowe.
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
                <p className="text-2xl font-semibold text-blue">
                  Więcej info wkrótce!
                </p>
              </div>
            </section>
          </div>
        </main>
      </DefaultLayout>
    </>
  )
}