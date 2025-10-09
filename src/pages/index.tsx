import Head from 'next/head'
import { useEffect } from 'react'
import { DefaultLayout } from 'components/Layout/DefaultLayout'
import { header, newsletter, projects } from 'constants/Home'
import { ContentBlock } from 'components/Common/ContentBlock'
import { Description } from 'components/Common/Description'
import { InfoBlock } from 'components/Common/InfoBlock'
import { Button } from 'components/Common/Button'
import { Waves } from 'components/Common/Waves'
import { Title } from 'components/Common/Title'
import { Subtitle } from 'components/Common/Subtitle'
import { Newsletter } from 'components/Newsletter/Newsletter'
import { faEnvelope, faMailBulk, faMailForward, faMailReply, faGraduationCap, faUsers, faStar, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  useEffect(() => {
    const makeAnalyticsRequest = async () => {
      try {
        const response = await fetch('/api/analytics?page=index')
        const data = await response.json()
        console.log('Analytics data received:', data.id)
      } catch (error) {
        console.error('Analytics request failed:', error)
      }
    }

    const makeProjectsRequest = async () => {
      try {
        const response = await fetch('/api/projects?status=active')
        const data = await response.json()
        console.log('Projects data received:', data.length, 'projects')
      } catch (error) {
        console.error('Projects request failed:', error)
      }
    }

    const makeUserActivityRequest = async () => {
      try {
        const response = await fetch('/api/user-activity')
        const data = await response.json()
        console.log('User activity data received for session:', data.sessionId)
      } catch (error) {
        console.error('User activity request failed:', error)
      }
    }

    makeAnalyticsRequest()
    makeProjectsRequest()
    makeUserActivityRequest()

    const intervalId = setInterval(() => {
      makeAnalyticsRequest()
      makeUserActivityRequest()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

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
          <article className="container m-auto p-3">
            <div className="text-center mt-10 mb-24">
              <Title>{header.title}</Title>
              <Description>{header.text}</Description>
            </div>

            <ul>
              {header.info.map((info, index) => (
                <InfoBlock key={index} content={info} />
              ))}
            </ul>
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

        <section className="bg-gray">
          <article className="container m-auto text-center mt-20 pb-20 md:pt-0 px-2">
            <Subtitle>{newsletter.title}</Subtitle>
            <Description>{newsletter.text}</Description>

            <FontAwesomeIcon className='text-pink text-[3rem] mt-3' icon={faEnvelope} />

            <Newsletter />
          </article>
        </section>
      </DefaultLayout>
    </>
  )
}
