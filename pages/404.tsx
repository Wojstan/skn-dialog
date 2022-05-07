import type { NextPage } from "next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Custom404: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>404 - Page Not Found</Col>
      </Row>
    </Container>
  );
};

export default Custom404;
