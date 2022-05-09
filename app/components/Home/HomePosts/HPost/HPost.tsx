import Link from "next/link";
import styles from "./HPost.module.css";

type Props = {
  id: number;
  thumbnail: string;
  date: string;
  title: string;
};

const HPost = ({ id, thumbnail, date, title }: Props) => (
  <div className={styles.post}>
    <div className="hover-zoom">
      <div className="zoom">
        <Link href={`/posts/${id}`}>
          <img src={thumbnail} alt="" />
        </Link>
      </div>

      <h2>
        <Link href={`/posts/${id}`}>{title}</Link>
      </h2>
    </div>

    <small>Opublikowano: {date}</small>
  </div>
);

export default HPost;
