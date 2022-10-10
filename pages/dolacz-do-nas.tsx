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

        <article>
          <h2>{header.title}</h2>
          <h5>{header.text}</h5>
        </article>

        <h4 className="text-center mb-5">
          <a
            href="https://warsawpsy.eu.qualtrics.com/jfe/form/SV_e52LdEUtHjiJN7E"
            target="_blank"
            rel="noreferrer"
          >
            [Kliknij tutaj, żeby przejść do formularza rekrutacyjnego]
          </a>
        </h4>

        <div className="text-center pb-5">
          <img style={{ borderRadius: "1rem" }} src="/img/qr.png" alt="" />
        </div>
      </header>

      <Waves src="/img/waves.svg" rotate />

      <section id="os-czasu">
        <Container>
          <article className="pb-5">
            <h3 className="text-center">{timeline.title}</h3>

            <Timeline data={timeline.info} />
          </article>
        </Container>
      </section>
    </Layout>
  );
};

export default Join;
