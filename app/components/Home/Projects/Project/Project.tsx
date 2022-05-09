import styles from "./Project.module.css";

type Props = {
  thumbnail: string;
  about: string;
  title: string;
};

const Project = ({ thumbnail, about, title }: Props) => (
  <div className={styles.post}>
    <div className="hover-zoom">
      <div className="zoom" style={{ width: "100%" }}>
        <img src={`/img/projects/${thumbnail}`} alt="" />
      </div>

      <h3>{title}</h3>
    </div>

    <small>{about}</small>
  </div>
);

export default Project;
