import HomeHeader from "@components/home/HomeHeader/HomeHeader";
import Layout from "@components/Layout/Layout";
import Project from "@components/Project/Project";
import SectionBlock from "@components/SectionBlock/SectionBlock";
import { HomeInterface } from "interfaces/HomeInterface";
import type { NextPage } from "next";

import { Row } from "react-bootstrap";
import { getHomeData } from "services/api-services";

export function getStaticProps() {
  const homeData = getHomeData();

  return {
    props: {
      data: homeData,
    },
  };
}

const Home: NextPage<HomeInterface> = ({ data }) => {
  const { projects, header } = data;

  return (
    <Layout>
      <HomeHeader title={header.title} text={header.text} info={header.info} />

      <aside>
        <img
          className="d-none d-md-block w-100"
          src="/img/waves.svg"
          style={{ rotate: "-180deg", marginTop: "-2px" }}
          alt="waves"
        />
      </aside>

      <SectionBlock id="projekty" title={projects.title} text={projects.text}>
        <Row>
          {projects.info.map((project, i) => (
            <Project
              pd
              key={i}
              title={project.title}
              img={project.img}
              text={project.text}
            />
          ))}
        </Row>
      </SectionBlock>
    </Layout>
  );
};

export default Home;
