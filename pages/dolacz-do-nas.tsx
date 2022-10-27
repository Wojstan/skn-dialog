import Layout from "@components/Layout/Layout";
import Timeline from "@components/Timeline/Timeline";
import Waves from "@components/Waves/Waves";
import { JoinInterface } from "interfaces/JoinInterface";
import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import { getJoinData } from "services/api-services";

export function getStaticProps() {
  const joinData = getJoinData();

  return {
    props: {
      data: joinData,
    },
  };
}

const Join: NextPage<JoinInterface> = ({ data }) => {
  const { timeline, header } = data;

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

        <article className="pb-5">
          <h2>{header.title}</h2>
          <h5>{header.text}</h5>
        </article>
      </header>

      <Waves src="/img/waves.svg" rotate />

      <section id="os-czasu">
        <Container>
          <article className="pb-5">
            <h3 className="text-center">{timeline.title}</h3>
            <h5>{timeline.text}</h5>

            <Timeline data={timeline.info} />
          </article>
        </Container>
      </section>
    </Layout>
  );
};

export default Join;
