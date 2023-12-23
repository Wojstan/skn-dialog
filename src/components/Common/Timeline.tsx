import styles from './TimelineItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

interface Props {
  data: {
    title: string
    time: string
  }[]
}

export function Timeline({ data }: Props) {
  return (
    <div style={{ maxWidth: '58rem', margin: '6rem auto' }}>
      {data.map((item, i) => (
        <TimelineItem key={i} title={item.title} date={item.time} i={i} />
      ))}
    </div>
  )
}

interface ItemProps {
  title: string
  date: string
  i: number
}

function TimelineItem({ title, date, i }: ItemProps) {
  const notEven = i % 2 !== 0

  const mainContent = (
    <div style={{ textAlign: notEven ? 'left' : 'right' }}>
      <div className={styles.phase}>
        <small>ETAP {i + 1}</small>
      </div>

      <div className={styles.time}>
        <FontAwesomeIcon icon={faCalendar} /> {date}
      </div>
      <h4 className={styles.title}>{title}</h4>
    </div>
  )

  const subContent = (
    <div style={{ position: 'relative' }}>
      <span className={styles.round}>
        <div></div>
      </span>
      <span className={styles.line}></span>
    </div>
  )

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
  )
}
