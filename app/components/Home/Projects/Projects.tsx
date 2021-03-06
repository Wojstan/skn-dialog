import { Col, Row } from "react-bootstrap";
import Project from "./Project/Project";

const projectData = [
  {
    thumbnail: "mtm.png",
    about: "Krótki opis projektu",
    title: "Mind the Mind",
  },
  {
    thumbnail: "meeting.png",
    about: "Krótki opis projektu",
    title: "Spotkania merytoryczne",
  },
  {
    thumbnail: "conference.png",
    about: "Krótki opis projektu",
    title: "Konferencja psychoterapii zaburzeń osobowości",
  },
  {
    thumbnail: "family.png",
    about: "Krótki opis projektu",
    title: "W związku z rodziną",
  },
  {
    thumbnail: "cinema.png",
    about: "Krótki opis projektu",
    title: "PsychomUWi",
  },
];

const Projects = () => (
  <Row className="d-flex justify-content-center align-items-center">
    <Col md="6" style={{ maxWidth: "700px" }}>
      {projectData.map(
        (post, i) =>
          i % 2 !== 0 && (
            <Project
              key={i}
              title={post.title}
              about={post.about}
              thumbnail={post.thumbnail}
            />
          )
      )}
    </Col>
    <Col md="6" style={{ maxWidth: "700px" }}>
      {projectData.map(
        (post, i) =>
          i % 2 === 0 && (
            <Project
              key={i}
              title={post.title}
              about={post.about}
              thumbnail={post.thumbnail}
            />
          )
      )}
    </Col>
  </Row>
);

export default Projects;
