import { FC, ReactNode } from "react";
import styles from "./Timeline.module.css";
import TimelineItem from "./TimelineItem/TimelineItem";

type TimelineProps = {
  data: {
    title: string;
    time: string;
  }[];
};

const Timeline: FC<TimelineProps> = ({ data }) => (
  <div className={styles.timeline}>
    {data.map((item, i) => (
      <TimelineItem key={i} title={item.title} date={item.time} i={i} />
    ))}
  </div>
);

export default Timeline;
