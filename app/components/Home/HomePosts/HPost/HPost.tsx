import Link from "next/link";
import { FC } from "react";
import styles from "./HPost.module.css";

type HPostProps = {
  id: number;
  thumbnail: string;
  date: string;
  title: string;
};

const HPost: FC<HPostProps> = ({ id, thumbnail, date, title }) => (
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
