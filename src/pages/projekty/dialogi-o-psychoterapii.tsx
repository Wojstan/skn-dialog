import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { DialogueEdition } from 'components/Common/DialogueEdition'

export default function DialogiOPsychoterapii() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Dialogi o psychoterapii</title>
      </Head>

      <DefaultLayout background="gray">
        <main className="container m-auto p-3 py-16">
          <div className="text-center space-y-6">
            <Title>Dialogi o psychoterapii</Title>

            <Description>
              W ramach projektu przeprowadzane będą rozmowy z psychoterapeutkami i psychoterapeutami różnych nurtów. Będziemy poruszać tematy dotyczące zarówno ścieżki zawodowej, jak i szczegółów pracy w danym podejściu.
            </Description>
          </div>
        </main>

<DialogueEdition
  banner="/images/dialogi/2025-26-banner.jpg"
  currentTeam={[
    'Zofia Lutek - koordynatorka',
  ]}
  previousTeam={[
    'Zofia Lutek - koordynatorka',
    'Hubert Bołbot',
    'Marta Gąsieniec',
    'Michalina Jakubowska',
    'Julia Miążek',
    'Łucja Niziołek',
    'Łucja Perkowska',
    'Maja Sostaric',
    'Agata Taborowicz',
    'Maria Czwojdzińska',
    'Dagmara Cześnik',
    'Jan Strojny',
    'Julia Walkiewicz',
    'Alicja Dejneka',
    'Hanna Baranowska',
    'Melania Piekarzewska',
    'Rut Kamińska Calderon',
  ]}
  previousTeamImages={[
    {
      src: '/images/dialogi/spotkanie-1.jpg',
      position: '50% 65%',
    },
    {
      src: '/images/dialogi/spotkanie-2.jpg',
      position: '50% 85%',
    },
  ]}
/>
</DefaultLayout>
    </>
  )
}