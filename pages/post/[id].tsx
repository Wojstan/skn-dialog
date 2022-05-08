import Layout from "@global/Layout/Layout";
import type { NextPage } from "next";
import parse from "html-react-parser";
import getPosts from "../../utils/getPosts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Post: NextPage = ({ post }: any) => {
  return (
    <Layout>
      <Container>
        <Row>Title: {post.title}</Row>
        <Row>Content: {parse(post.content)}</Row>
        <Row>ID: {post._id}</Row>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const { id } = params;

  const [post] = await getPosts(id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default Post;
