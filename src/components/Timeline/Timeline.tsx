import { FC } from 'react'
import TimelineItem from './TimelineItem/TimelineItem'

type TimelineProps = {
  data: {
    title: string
    time: string
  }[]
}

const Timeline: FC<TimelineProps> = ({ data }) => (
  <div style={{ maxWidth: '58rem', margin: '6rem auto' }}>
    {data.map((item, i) => (
      <TimelineItem key={i} title={item.title} date={item.time} i={i} />
    ))}
  </div>
)

export default Timeline
