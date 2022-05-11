import type { NextPage } from "next";
import Layout from "@global/Layout/Layout";
import Section from "@global/Section/Section";
import Team from "@About/Team/Team";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="team-about" />

      <Section>
        <h1 className="mb-5">Kim jesteśmy?</h1>

        <h2 className="my-4" style={{ textTransform: "none" }}>
          Opiekun Koła - dr hab. Anna Cierpka
        </h2>

        <p>
          Jestem psychologiem, adiunktem Wydziału Psychologii Uniwersytetu
          Warszawskiego. Moje zainteresowania naukowe skupiają się wokół rodziny
          jako środowiska wychowawczego oraz tematyki narracji. Jestem
          współredaktorem książek Narracja: koncepcje i badania psychologiczne
          oraz Psychologia narracyjna. Tożsamość, dialogowość, pogranicza i
          autorem wielu tekstów poświęconych problematyce narracji. W praktyce
          psychologicznej (Centrum Pomocy Profesjonalnej) wykorzystuję założenia
          terapii systemowej i techniki terapii narracyjnej. Hobby to przede
          wszystkim dbanie o ogród i kwiaty. I podróże &#x1F60A;
        </p>
      </Section>

      <Section gray>
        <Team />
      </Section>

      <Section>
        <h1>Działalność</h1>
      </Section>
    </Layout>
  );
};

export default About;
