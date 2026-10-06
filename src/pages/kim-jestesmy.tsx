import { administration, header, protector } from 'constants/About'
import { Waves } from 'components/Common/Waves'
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
  <article className="container m-auto text-center mb-16 px-4">
    <Subtitle>{administration.title}</Subtitle>
    <Description>{administration.text}</Description>
  </article>

  <div className="container m-auto px-4">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {administration.info.map((person) => (
        <article key={person.name} className="text-center">
          {person.image ? (
            <img
              src={person.image}
              alt={person.name}
              className="w-28 h-28 object-cover rounded-full mx-auto"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-lighterBlue mx-auto" />
          )}

          <h3 className="mt-6 text-xl font-regular text-blue">
            {person.name}
          </h3>

          <p className="mt-2 text-pink">
            {person.role}
          </p>
        </article>
      ))}
    </div>
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
