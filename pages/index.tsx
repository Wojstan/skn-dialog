import type { NextPage } from "next";
import Layout from "@global/Layout/Layout";

import Section from "@global/Section/Section";
import Partners from "@Home/Partners/Partners";
import { Container } from "react-bootstrap";

const Home: NextPage = ({ posts }: any) => {
  return (
    <Layout>
      <div style={{ background: "#C8E0FF" }}>
        <Container>
          <img className="img-fluid" src="/img/main.png" alt="" />
        </Container>
      </div>

      <Section>
        <h1>Kim jesteśmy?</h1>
        <p className="text-center">
          Serdecznie zapraszamy na pierwsze wydarzenie organizowane w ramach
          tegorocznego cyklu spotkań “W Związku z Rodziną”, które odbędzie się
          już w ten wtorek o godzinie 16:00. Gościnią koła będzie prof. Iwona
          Grzegorzewska, która wygłosi wykład pt. „Parentyfikacja i jej
          znaczenie w życiu dziecka”.
        </p>
      </Section>

      <Section>
        <Partners />
      </Section>
    </Layout>
  );
};

export default Home;
