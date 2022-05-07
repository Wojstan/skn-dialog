import type { NextPage } from "next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>Home page</Col>
        <i className="fa-brands fa-facebook"></i>
      </Row>
    </Container>
  );
};

export default Home;
