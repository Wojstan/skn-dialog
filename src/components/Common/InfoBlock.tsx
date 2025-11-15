import { Description } from 'components/Common/Description'

interface Props {
  content: {
    title: string
    text?: string
    img: string
    reverse?: boolean
  }
}

export function InfoBlock({ content }: Props) {
  const { reverse, text, title, img } = content

  return (
    <li className={`flex flex-col  items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} `}>
      <div>
        <h3 className="text-pink text-3xl font-medium tracking-wider">{title}</h3>
        <Description>{text}</Description>
      </div>
      <img className="p-2 h-72" src={img} alt={title} />
    </li>
  )
}
