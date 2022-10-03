import { Col, Row } from "react-bootstrap";
import styles from "./Team.module.css";

const teamData = [
  {
    name: "Marcin Bagiński",
    about: "Prezes koła",
    avatar: "1.png",
  },
  {
    name: "Misia Zienkiewicz",
    about: "Wiceprezeska koła i specjalistka do spraw HR",
    avatar: "2.png",
  },
  {
    name: "Karolina Marcinkowska",
    about: "Specjalistka ds. PR",
    avatar: "3.png",
  },
  {
    name: "Róża Iwańska",
    about: "Specjalistka ds. finansów",
    avatar: "3.png",
  },
  {
    name: "Oliwia Wieczorek",
    about: "Specjalistka ds. eventów",
    avatar: "3.png",
  },
  {
    name: "Magdalena Michałowska",
    about: "Specjalistka ds. eventów",
    avatar: "3.png",
  },
];

const Team = () => (
  <div>
    <h3 className="mb-3">Zarząd:</h3>

    <div>
      <small>Rok akademicki 2022/23</small>
    </div>

    <ul className={styles.team}>
      <Row>
        {teamData.map((row, i) => (
          <Col key={i} lg="4">
            <li className="mb-5 mb-lg-0">
              <img src={`/img/team/${row.avatar}`} alt="" />
              <h3 className="mb-3">{row.name}</h3>
              <div className={styles.about}>
                <small>{row.about}</small>
              </div>
            </li>
          </Col>
        ))}
      </Row>
    </ul>
  </div>
);

export default Team;
