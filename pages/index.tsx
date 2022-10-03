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
        <h1>SKN DIALOG</h1>
        <p className="text-center">
          Witamy na oficjalnej stronie Studenckiego Koła Naukowego
          &ldquo;Dialog&ldquo; działającego przy Wydziale Psychologii
          Uniwersytetu Warszawskiego.
        </p>
      </Section>

      <Section>
        <Partners />
      </Section>
    </Layout>
  );
};

export default Home;
