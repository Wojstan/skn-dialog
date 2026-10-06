import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { Subtitle } from 'components/Common/Subtitle'

const currentTeam = [
  'Wiktoria Vincent Kopecka - koordynator merytoryczny',
  'Szymon Mleczak - koordynator logistyczny',
  'Olga Traczyk - koordynatorka logistyczna'
]

const team = [
  'Julia Ukielska - koordynatorka merytoryczna',
  'Szymon Mleczak - koordynator logistyczny',
  'Paulina Gawryś',
  'Marta Gąsieniec',
  'Justyna Gugulska',
  'Zet Kozłowskie',
  'Magdalena Łyskawka',
  'Małgorzata Michalska',
  'Urszula Nikścin',
  'Filip Wiszniewski',
  'Amelia Nowalska',
  'Olga Traczyk',
  'Bartłomiej Jaworowski',
  'Gabriela Długokęcka',
  'Julia Ciach',
  'Katarzyna Drewniak',
  'Maja Urbańska',
  'Matylda Lorin',
  'Michał Muszyński',
  'Urszula Czach',
  'Jakub Ścierzyński',
  'Zuzanna Krzyżaniak',
]

const workshops = [
  {
    image: '/images/psychoedukacyjny/warsztat-1.jpg',
    title: 'TUTAJ TYTUŁ / NAZWA WARSZTATU',
    description: 'TUTAJ OPIS WARSZTATU',
  },
  {
    image: '/images/psychoedukacyjny/warsztat-2.jpg',
    title: 'TUTAJ TYTUŁ / NAZWA WARSZTATU',
    description: 'TUTAJ OPIS WARSZTATU',
  },
]

export default function Psychoedukacyjny() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Projekt PsychoEDUkacyjny</title>
      </Head>

      <DefaultLayout background="gray">
        <main className="container m-auto p-3 py-16">
          <div className="text-center space-y-6">
            <Title>Projekt PsychoEDUkacyjny</Title>

            <Description>
              W projekcie PsychoEDUkacyjnym skupiamy się na rozwoju siebie i innych. Naszym głównym celem jest szerzenie sprawdzonej wiedzy psychologicznej, który realizujemy poprzez warsztaty w liceach — zawiera się w nich część teoretyczna, jak i praktyczna. Są one stworzone z całkowicie autorskich scenariuszy superwizowanych przez doświadczone psycholożki. Poza tym jesteśmy szkoleni z ich prowadzenia przed i w trakcie roku pracy Dialogu. Dołączając do projektu, będziecie mieli szansę rozwinąć się jako prowadzący, nabyć praktycznego doświadczenia i poznać siebie bardziej! 
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

  <section className="mt-20">
    <Subtitle>Zespół 2025/26</Subtitle>

    <div className="grid md:grid-cols-2 gap-x-32 gap-y-1 mt-6 text-left">
      {team.map((person) => (
        <p key={person}>{person}</p>
      ))}
    </div>
  </section>


        </main>
      </DefaultLayout>
    </>
  )
}