import type { NextPage } from "next";
import Layout from "@global/Layout/Layout";

import Section from "@global/Section/Section";
import AboutText from "@Home/AboutText/AboutText";
import Projects from "@Home/Projects/Projects";
import HomePosts from "@Home/HomePosts/HomePosts";
import Newsletter from "@Home/Newsletter/Newsletter";
import Partners from "@Home/Partners/Partners";
import getPosts from "../utils/getPosts";

const Home: NextPage = ({ posts }: any) => {
  return (
    <Layout>
      <div className="main-logo ">
        <img className="img-fluid" src="/img/main-logo.png" alt="" />
      </div>

      <Section>
        <AboutText />
      </Section>

      <Section gray>
        <Projects />
      </Section>

      <Section>
        <HomePosts posts={posts} />
      </Section>

      <Section gray>
        <Newsletter />
      </Section>

      <Section>
        <Partners />
      </Section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { posts } = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default Home;
