import Head from 'next/head'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { header, newsletter } from 'constants/Home'
import { Description } from 'components/Common/Description'
import { InfoBlock } from 'components/Common/InfoBlock'
import { Waves } from 'components/Common/Waves'
import { Title } from 'components/Common/Title'
import { Subtitle } from 'components/Common/Subtitle'
import { Newsletter } from 'components/Newsletter/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>SKN Dialog - Strona główna</title>
      </Head>

      <DefaultLayout background="gray">
        <header>
          <div className="text-center bg-lighterBlue">
            <img
              className="m-auto object-cover max-h-80"
              src="/images/main.png"
              alt="SKN Dialog"
            />
          </div>

          <Waves color="blue" />
        </header>

        <section className="bg-gray" id="main">
          <article className="container m-auto p-3 my-10">
            <div className="text-center space-y-6">
              <Title>{header.title}</Title>
              <Description>{header.text}</Description>
            </div>

<ul className="space-y-6 mt-10">
                {header.info.map((info, index) => (
                <InfoBlock key={index} content={info} />
              ))}
            </ul>
          </article>
        </section>

        <section className="bg-white">
  <Waves color="gray" rotate />

  <article className="container mx-auto px-4 text-center mt-20 pb-20 pt-10 md:pt-0 space-y-6 flex flex-col items-center"> 
    <Subtitle>{newsletter.title}</Subtitle> 
    <div className="text-center"> 
      <Description>{newsletter.text}</Description> 
      </div> 
      <Newsletter /> 
      </article>

  <Waves />
</section>
      </DefaultLayout>
    </>
  )
}