import type { NextPage } from "next";
import Layout from "@global/Layout/Layout";
import getPosts from "../../utils/getPosts";
import HomePosts from "@Home/HomePosts/HomePosts";
import Section from "@global/Section/Section";

const Posts: NextPage = ({ posts }: any) => {
  return (
    <Layout>
      <Section style={{ marginTop: "80px" }}>
        <h1>Publikacje</h1>

        <HomePosts posts={posts} />
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

export default Posts;
