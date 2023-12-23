import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { header, projects } from 'constants/Home'
import { ContentBlock } from 'components/Common/ContentBlock'
import { Description } from 'components/Common/Description'
import { InfoBlock } from 'components/Common/InfoBlock'
import { Button } from 'components/Common/Button'
import { Waves } from 'components/Common/Waves'
import { Title } from 'components/Common/Title'
import { Subtitle } from 'components/Common/Subtitle'

export default function Home() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Strona główna</title>
      </Head>
      <DefaultLayout background="gray">
        <header>
          <div className="text-center bg-lighterBlue">
            <img className="m-auto object-cover max-h-80" src="/images/main.png" alt="SKN Dialog" />
          </div>

          <Waves color="blue" />
        </header>

        <section className="bg-gray" id="main">
          <article className="container m-auto">
            <div className="text-center mt-10 mb-24">
              <Title>{header.title}</Title>
              <Description>{header.text}</Description>
            </div>

            <ul>
              {header.info.map((info, index) => (
                <InfoBlock key={index} content={info} />
              ))}
            </ul>

            <div className="text-center mt-5 pb-5">
              <Button href="/dolacz-do-nas" variant="pink">
                Dołącz do nas!
              </Button>
            </div>
          </article>
        </section>

        <section className="bg-white">
          <Waves color="gray" rotate />

          <article className="container m-auto text-center my-10 pt-10 md:pt-0">
            <Subtitle>{projects.title}</Subtitle>
            <Description>{projects.text}</Description>

            <div className="grid md:grid-cols-3 gap-10 my-20">
              {projects.info.map((project, index) => (
                <ContentBlock content={project} key={index} />
              ))}
            </div>
          </article>

          <Waves />
        </section>
      </DefaultLayout>
    </>
  )
}
