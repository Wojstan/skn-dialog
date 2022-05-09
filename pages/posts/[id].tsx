import Layout from "@global/Layout/Layout";
import type { NextPage } from "next";
import parse from "html-react-parser";
import getPosts from "../../utils/getPosts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Post: NextPage = ({ post }: any) => {
  return (
    <Layout>
      <Container className="p-5">
        <Row>
          <h1 className="text-start mt-4">{post.title}</h1>
        </Row>
        <Row className="mt-4 mb-5 d-inline-block">
          <small>
            Opublikowano: wtorek, {post.publication_date},{" "}
            {post.publication_time}
            <span className="ms-3">&#9679;</span>
          </small>
          <span>
            <a href="">
              <FontAwesomeIcon
                className="share-icon"
                size="lg"
                icon={faFacebook}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="share-icon mx-3"
                size="lg"
                icon={faTwitter}
              />
            </a>
            <a href="">
              <FontAwesomeIcon className="share-icon" size="lg" icon={faLink} />
            </a>
          </span>
        </Row>
        <Row className="mb-5">
          <img src={post.thumbnail} alt="post-image" className="" />
        </Row>
        <Row>{parse(post.content)}</Row>
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
