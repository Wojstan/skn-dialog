import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { Subtitle } from 'components/Common/Subtitle'
import { Newsletter } from 'components/Newsletter/Newsletter'

const currentTeam = [
  'Zuzanna Konieczna - koordynatorka newslettera',
  'Zet Kozłowskie - osoba koordynująca recenzje',
]

const previousTeam = [
  'Zuzanna Konieczna - koordynatorka newslettera',
  'Zet Kozłowskie - osoba koordynująca recenzje',
  'Inga Błażejak',
  'Natalia Koźmińska',
  'Martyna Krzempek',
  'Aleksandra Lubkowska',
  'Małgorzata Michalska',
  'Hubert Patryn',
  'Aleksandra Suska',
  'Alicja Witczak',
  'Agata Wróblewska',
  'Julia Krajewska',
  'Maria Krawczyk',
  'Michał Muszyński',
  'Nina Kędziora',
  'Patrycja Rakowska',
  'Valeriia Shliakhova',
  'Alicja Dejneka',
  'Mateusz Pleskowicz',
]

const years = [
  {
    year: '2025',
    issues: [
      {
        title: 'Psychowieści — wrzesień 2026',
        file: '/pdf/psychowiesci/2026-09.pdf',
      },
      {
        title: 'Psychowieści — sierpień 2026',
        file: '/pdf/psychowiesci/2026-08.pdf',
      },
      {
        title: 'Psychowieści — lipiec 2026',
        file: '/pdf/psychowiesci/2026-07.pdf',
      },
      {
        title: 'Psychowieści — czerwiec 2026',
        file: '/pdf/psychowiesci/2026-06.pdf',
      },
      {
        title: 'Psychowieści — maj 2026',
        file: '/pdf/psychowiesci/2026-05.pdf',
      },
      {
        title: 'Psychowieści — kwiecień 2026',
        file: '/pdf/psychowiesci/2026-04.pdf',
      },
      {
        title: 'Psychowieści — marzec 2026',
        file: '/pdf/psychowiesci/2026-03.pdf',
      },
      {
        title: 'Psychowieści — styczeń 2026',
        file: '/pdf/psychowiesci/2026-01.pdf',
      },
      {
        title: 'Psychowieści — grudzień 2025',
        file: '/pdf/psychowiesci/2025-12.pdf',
      },
      {
        title: 'Psychowieści — listopad 2025',
        file: '/pdf/psychowiesci/2025-11.pdf',
      },
    ],
  },
]

export default function Psychowiesci() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Psychowieści</title>
      </Head>

      <DefaultLayout background="gray">
<main className="container m-auto p-3 py-16">
  <div className="text-center space-y-6">
    <Title>Psychowieści</Title>

    <Description>
      Co miesiąc SKN Dialog wydaje Newsletter “Psychowieści”, w ramach którego
      pojawiają się streszczenia najnowszych artykułów z zakresu psychologii
      klinicznej oraz recenzje nowych pozycji na rynku psychologicznym.
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
</main>

<section className="bg-white w-full py-12 px-3 md:px-8">
  <div className="max-w-7xl m-auto text-center">
    <Subtitle>Zapisz się do newslettera</Subtitle>

    <div className="mt-2">
      <Description>
        Zapisz się do newslettera Psychowieści, aby otrzymywać najnowsze
        wydania prosto na swoją skrzynkę mailową.
      </Description>
    </div>

    <div className="mt-3">
      <Newsletter />
    </div>
  </div>
</section>

<main className="container m-auto p-3 py-16">
  <section>
    <Subtitle>Zespół 2025/26</Subtitle>

    <div className="grid md:grid-cols-2 gap-x-32 gap-y-1 mt-6 text-left">
      {previousTeam.map((person) => (
        <p key={person}>{person}</p>
      ))}
    </div>
  </section>

  <section className="container m-auto mt-20">
    {years.map((year) => (
      <section key={year.year} className="mb-24">
        <Subtitle>
          {year.year === '2026' ? 'Numery 2026/27' : 'Numery 2025/26'}
        </Subtitle>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {year.issues.map((issue) => (
            <a
              key={issue.file}
              href={issue.file}
              target="_blank"
              rel="noreferrer"
              className="block bg-white p-5 rounded-lg shadow hover:text-pink transition-colors"
            >
              {issue.title}
            </a>
          ))}
        </div>
      </section>
    ))}
  </section>
</main>
      </DefaultLayout>
    </>
  )
}