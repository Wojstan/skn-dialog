import type { NextPage } from "next";
import Layout from "@global/Layout/Layout";

import Container from "react-bootstrap/Container";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="main-logo">
        <img src="/img/main-logo.png" alt="" />
      </div>

      <section>
        <Container>
          <h1>O NAS</h1>
          <p className="text-center">
            Serdecznie zapraszamy na pierwsze wydarzenie organizowane w ramach
            tegorocznego cyklu spotkań “W Związku z Rodziną”, które odbędzie się
            już w ten wtorek o godzinie 16:00. Gościnią koła będzie prof. Iwona
            Grzegorzewska, która wygłosi wykład pt. „Parentyfikacja i jej
            znaczenie w życiu dziecka”.
          </p>
        </Container>
      </section>

      <section className="bg-gray">
        <Container>
          <h1>NASZE PROJEKTY</h1>
          <p className="text-center">Krótki opis odnośnie projektów</p>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
