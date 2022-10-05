import styles from "./TimelineItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FC } from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

type TimelineItemProps = {
  title: string;
  date: string;
  i: number;
};

const TimelineItem: FC<TimelineItemProps> = ({ title, date, i }) => {
  const notEven = i % 2 !== 0;

  const mainContent = (
    <div style={{ textAlign: notEven ? "left" : "right" }}>
      <div className={styles.phase}>
        <small>ETAP {i + 1}</small>
      </div>

      <div className={styles.time}>
        <FontAwesomeIcon icon={faCalendar} /> {date}
      </div>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );

  const subContent = (
    <div style={{ position: "relative" }}>
      <span className={styles.round}>
        <div></div>
      </span>
      <span className={styles.line}></span>
    </div>
  );

  return (
    <div className={styles.item}>
      {notEven ? (
        <>
          <div></div>
          {subContent}
          {mainContent}
        </>
      ) : (
        <>
          {mainContent}
          {subContent}
        </>
      )}
    </div>
  );
};

export default TimelineItem;
