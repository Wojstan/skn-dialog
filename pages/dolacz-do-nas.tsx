import Layout from "@components/Layout/Layout";
import type { NextPage } from "next";

const Join: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Join;
