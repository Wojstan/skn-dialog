import type { NextPage } from "next";
import Layout from "@global/Layout/Layout";
import Section from "@global/Section/Section";
import Team from "@About/Team/Team";
import Projects from "@Home/Projects/Projects";

const Join: NextPage = () => {
  return (
    <Layout>
      <Section style={{ marginTop: "10rem" }}>
        <h1 className="mb-5">Chcesz do nas dołączyć?</h1>
        <p className="text-center">
          Nie zwlekaj, już dziś zgłoś się do naszego koła przez formularz
          rekrutacyjny, a my zaprosimy Cię na rozmowę rekrutacyjną.
        </p>

        <h4 className="text-center mb-5">
          <a
            href="https://warsawpsy.eu.qualtrics.com/jfe/form/SV_e52LdEUtHjiJN7E"
            target="_blank"
            rel="noreferrer"
          >
            [Kliknij tutaj, żeby przejść do formularza rekrutacyjnego]
          </a>
        </h4>

        <div className="text-center">
          <img src="/img/qr.png" alt="" />
        </div>
      </Section>
    </Layout>
  );
};

export default Join;
