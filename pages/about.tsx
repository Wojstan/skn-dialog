import type { NextPage } from "next";
import Layout from "@global/Layout/Layout";
import Section from "@global/Section/Section";
import Team from "@About/Team/Team";
import Projects from "@Home/Projects/Projects";

const About: NextPage = () => {
  return (
    <Layout>

      <Section>
        <h1 >
          Kim jesteśmy?
        </h1>

        <h3 className="my-4" style={{ textTransform: "none" }}>
          Opiekunka Koła - dr hab. Anna Cierpka
        </h3>

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
        <h1>Projekty</h1>
        <p className="home-describe text-center">
          W &ldquo;Dialogu&ldquo; działamy wszechstronnie, na wielu polach -
          każdy znajdzie coś dla siebie.
        </p>

        <Projects />
      </Section>
    </Layout>
  );
};

export default About;
