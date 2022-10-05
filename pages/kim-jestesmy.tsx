import Layout from "@components/Layout/Layout";
import Project from "@components/Project/Project";
import { ProjectInterface } from "interfaces/ProjectInterface";
import type { NextPage } from "next";
import { Container, Row } from "react-bootstrap";
import { getAboutData } from "services/api-services";

export function getStaticProps() {
  const aboutData = getAboutData();

  return {
    props: {
      data: aboutData,
    },
  };
}

const About: NextPage<ProjectInterface> = ({ data }) => {
  const { header, guard, administration } = data;

  return (
    <Layout>
      <header className="bg-gray">
        <aside>
          <img
            className="d-none d-md-block w-100"
            src="/img/waves_blue.svg"
            alt="waves-blue"
          />
        </aside>
        <article className="pb-1">
          <h2>{header.title}</h2>
          <h5>{header.text}</h5>
        </article>
      </header>

      <section id="opiekun" className="bg-gray">
        <Container>
          <article className="text-center">
            <h3>{guard.title}</h3>

            <p className="pb-5 mb-0">{guard.text}</p>
          </article>
        </Container>
      </section>

      <aside>
        <img
          className="d-none d-md-block w-100"
          src="/img/waves.svg"
          style={{ rotate: "-180deg", marginTop: "-2px" }}
          alt="waves"
        />
      </aside>

      <section id="zarzad">
        <Container>
          <article className="mb-5">
            <h3>{administration.title}</h3>
            <p>{administration.text}</p>
          </article>

          <Row className="pb-5">
            {administration.info.map((project, i) => (
              <Project
                key={i}
                title={project.title}
                img={project.img}
                text={project.text}
              />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
