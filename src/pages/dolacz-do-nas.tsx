import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Waves } from 'components/Common/Waves'
import { Timeline } from 'components/Common/Timeline/Timeline'
import { header, timeline } from 'constants/Join'
import { Subtitle } from 'components/Common/Subtitle'
import { Description } from 'components/Common/Description'
import Head from 'next/head'

export default function Join() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Dołącz do nas!</title>
      </Head>
      <DefaultLayout background="white">
        <header>
          <Waves color="blue" />

          <article className="container m-auto my-20 text-center">
            <Subtitle>{header.title}</Subtitle>
            <Description>{header.text}</Description>
          </article>
        </header>

        <section id="os-czasu">
          <article className="container m-auto my-20 text-center">
            <Subtitle>{timeline.title}</Subtitle>

            <Timeline data={timeline.info} />
          </article>
        </section>

        <Waves />
      </DefaultLayout>
    </>
  )
}
