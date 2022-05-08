import Layout from "@global/Layout/Layout";
import type { NextPage } from "next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Post: NextPage = ({ post }: any) => {
  return (
    <Layout>
      <Container>
        <Row>Title: {post.title}</Row>
        <Row>Content: {post.content}</Row>
        <Row>ID: {post._id}</Row>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const user = await fetch(`http://localhost:3000/api/posts`);
  const data = await user.json();
  const [post] = await data.posts.filter((el: any) => el._id.toString() === id);

  if (!data || !post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default Post;
