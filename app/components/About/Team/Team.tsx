import { Col, Row } from "react-bootstrap";
import styles from "./Team.module.css";

const teamData = [
  {
    name: "Aleksandra Warkocka",
    about: "Przewodnicząca w I semestrze/ Wiceprzewodnicząca w II semestrze",
    avatar: "1.png",
  },
  {
    name: "Julia Kluska",
    about: "Wiceprzewodnicząca w I semestrze/Przewodnicząca w II semestrze:",
    avatar: "2.png",
  },
  {
    name: "Marta Adamiuk",
    about: "Specjalistka ds. merytorycznych",
    avatar: "3.png",
  },
];

const Team = () => (
  <div>
    <h2 className="mb-3">Zarząd:</h2>

    <div>
      <small>Rok akademicki 2021/22</small>
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
