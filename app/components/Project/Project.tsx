import { FC } from "react";

import styles from "./Project.module.css";

type ProjectProps = {
  img: string;
  title: string;
  about: string;
};

const Project: FC<ProjectProps> = ({ img, title, about }) => {
  return (
    <li className={styles.project}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3>{title}</h3>
          <h5>{about}</h5>
        </div>
        <img height={160} src={img} alt={title} />
      </div>
    </li>
  );
};

export default Project;
