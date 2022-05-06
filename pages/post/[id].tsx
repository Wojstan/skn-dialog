import type { NextPage } from "next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Post: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>Single post</Col>
      </Row>
    </Container>
  );
};

export default Post;
