import { administration, header, protector } from 'constants/About'
import { Waves } from 'components/Common/Waves'
import { ContentBlock } from 'components/Common/ContentBlock'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { Title } from 'components/Common/Title'
import { Description } from 'components/Common/Description'
import { Subtitle } from 'components/Common/Subtitle'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Kim jesteśmy?</title>
      </Head>
      <DefaultLayout background="gray">
        <header>
          <Waves color="blue" />

          <article className="container text-center m-auto p-3 py-16">
            <Title>{header.title}</Title>
            <Description>{header.text}</Description>
          </article>
        </header>

        <Waves rotate />

        <section id="team">
          <article className="container m-auto text-center mb-10">
            <Subtitle>{administration.title}</Subtitle>
            <Description>{administration.text}</Description>
          </article>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-16">
            {administration.info.map((project, index) => (
              <ContentBlock content={project} key={index} margin={3} />
            ))}
          </div>
        </section>

        <section id="protector" className="bg-white">
          <Waves rotate />

          <article className="container m-auto my-20 max-w-3xl text-center p-4">
            <img
              className="h-28 m-auto mb-10 rounded-full mt-10 md:mt-0"
              src="/images/team/ac.jpeg"
              alt="Anna Cierpka"
            />
            <Subtitle>{protector.title}</Subtitle>
            <Description>{protector.text}</Description>
          </article>

          <Waves />
        </section>
      </DefaultLayout>
    </>
  )
}
