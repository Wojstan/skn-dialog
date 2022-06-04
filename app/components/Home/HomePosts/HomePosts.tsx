import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import HPost from "./HPost/HPost";

type Props = {
  posts: Array<any>;
};

const HomePosts = ({ posts }: Props) => (
  <>
    <Row className="d-flex justify-content-center">
      <Col md="6" style={{ maxWidth: "550px" }}>
        {posts.map(
          (post, i) =>
            i % 2 === 0 && (
              <HPost
                key={post._id}
                id={post._id}
                thumbnail={post.thumbnail}
                title={post.title}
                date={post.publication_date}
              />
            )
        )}
      </Col>
      <Col md="6" style={{ maxWidth: "550px" }}>
        {posts.map(
          (post, i) =>
            i % 2 !== 0 && (
              <HPost
                key={post._id}
                id={post._id}
                thumbnail={post.thumbnail}
                title={post.title}
                date={post.publication_date}
              />
            )
        )}
      </Col>
    </Row>
    <Link href="/posts">
      <a className="text-center d-block">
        <strong>Zobacz wszystkie</strong>
      </a>
    </Link>
  </>
);

export default HomePosts;
