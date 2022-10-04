import Layout from "@components/Layout/Layout";
import type { NextPage } from "next";
import { Container } from "react-bootstrap";

const Join: NextPage = () => {
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
          <h2>Chcesz do nas dołączyć?</h2>
          <h5>
            Nie zwlekaj, już dziś zgłoś się do naszego koła przez formularz
            rekrutacyjny, a my zaprosimy Cię na rozmowę rekrutacyjną.
          </h5>
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

      <aside>
        <img
          className="d-none d-md-block w-100"
          src="/img/waves.svg"
          style={{ rotate: "-180deg", marginTop: "-2px" }}
          alt="waves"
        />
      </aside>

      <section id="os-czasu">
        <Container>
          <article>
            <h3>Na osi czasu</h3>
          </article>
        </Container>
      </section>
    </Layout>
  );
};

export default Join;
