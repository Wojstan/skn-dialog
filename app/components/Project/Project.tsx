import { FC } from "react";
import { Col } from "react-bootstrap";

import styles from "./Project.module.css";

type ProjectProps = {
  img: string;
  title: string;
  text?: string;
  pd?: boolean;
};

const Project: FC<ProjectProps> = ({ img, title, text, pd }) => {
  return (
    <Col className="text-center p-5" md="6" xl="4">
      <div className={styles.flex}>
        <div
          style={{ padding: pd ? "1.3rem" : undefined }}
          className={styles.avatar}
        >
          <img src={img} alt={title} />
        </div>

        <h4 className="mb-3">{title}</h4>
        <p>
          <small>{text}</small>
        </p>
      </div>
    </Col>
  );
};

export default Project;
