import type { NextPage } from "next";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Custom404: NextPage = () => {
  return (
    <Container className="d-flex" style={{ height: "100vh" }}>
      <Row className="justify-content-center w-100 my-auto text-center">
        <Col sm="12">
          <img src="./img/404-logo.png" alt="404" className="img-fluid h-50" />
          <h2 className="my-4">404 - Nie znaleziono strony</h2>
          <Link href="/">
            <Button className="mt-4" style={{ backgroundColor: "#16649b" }}>
              Wróć na stronę główną
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Custom404;
