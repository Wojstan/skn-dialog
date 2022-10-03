import Layout from "@components/Layout/Layout";
import Project from "@components/Project/Project";
import SectionBlock from "@components/SectionBlock/SectionBlock";
import { HomeInterface } from "interfaces/HomeInterface";
import type { NextPage } from "next";

import { Container } from "react-bootstrap";
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
  const { partners, projects, header } = data;

  return (
    <Layout>
      <header className="mb-section">
        <div className="text-center mb-5" style={{ background: "#C8E0FF" }}>
          <Container>
            <img src="/img/main.png" alt="SKN Dialog" />
          </Container>
        </div>
        <Container>
          <article>
            <h1>{header.title}</h1>
            <p className="text-center">{header.text}</p>
          </article>
        </Container>
      </header>

      <Container>
        <aside className="d-flex flex-column justify-content-around align-items-center my-lg-5 flex-lg-row">
          {partners.map((partner, i) => (
            <img
              className="mb-lg-0 mb-5"
              key={i}
              src={`/img/partners/${partner}`}
              alt=""
            />
          ))}
        </aside>
      </Container>
    </Layout>
  );
};

export default Home;
