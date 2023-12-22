import HomeHeader from '@components/HomeHeader/HomeHeader'
import Layout from '@components/Layout/Layout'
import Project from '@components/Project/Project'
import { HomeInterface } from 'interfaces/HomeInterface'
import type { NextPage } from 'next'

import { Container, Row } from 'react-bootstrap'
import { getHomeData } from 'services/api-services'

export function getStaticProps() {
  const homeData = getHomeData()

  return {
    props: {
      data: homeData,
    },
  }
}

const Home: NextPage<HomeInterface> = ({ data }) => {
  const { projects, header } = data

  return (
    <Layout>
      <HomeHeader title={header.title} text={header.text} info={header.info} />

      <aside>
        <img
          className="d-none d-md-block w-100"
          src="/img/waves.svg"
          style={{ rotate: '-180deg', marginTop: '-2px' }}
          alt="waves"
        />
      </aside>

      <section>
        <Container>
          <article>
            <h2>{projects.title}</h2>
            <h5 className="mb-5">{projects.text}</h5>
          </article>

          <Row className="pb-5">
            {projects.info.map((project, i) => (
              <Project pd key={i} title={project.title} img={project.img} text={project.text} />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default Home
