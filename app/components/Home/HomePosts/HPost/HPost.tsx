import styles from "./HPost.module.css";

type Props = {
  id: number;
  thumbnail: string;
  date: string;
  title: string;
};

const HPost = ({ id, thumbnail, date, title }: Props) => (
  <div className={styles.post} key={id}>
    <img className="mb-4" src={thumbnail} alt="" />
    <h2>{title}</h2>
    <small>Opublikowano: {date}</small>
  </div>
);

export default HPost;
