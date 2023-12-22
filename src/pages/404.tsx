import type { NextPage } from "next";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Custom404: NextPage = () => (
  <Container className="d-flex" style={{ height: "100vh" }}>
    <Row className="justify-content-center w-100 my-auto text-center">
      <Col sm="12">
        <img src="/img/404-logo.png" alt="404" className="img-fluid mb-1" />
        <h2 style={{ marginBottom: "5rem" }}>404 - Nie znaleziono strony</h2>
        <Link href="/">
          <span className="gray-link">Wróć na stronę główną</span>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Custom404;
