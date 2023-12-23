import { Description } from './Description'

interface Props {
  content: {
    img: string
    title: string
    text?: string
  }
}

export function ContentBlock({ content }: Props) {
  const { title, img, text } = content

  return (
    <div className="flex items-center flex-col p-4">
      <div className="w-32 h-32 flex items-center bg-gray justify-center rounded-full mb-5">
        <img className="w-24 rounded-full" src={img} alt={title} />
      </div>

      <h4>{title}</h4>
      <Description>
        <small>{text}</small>
      </Description>
    </div>
  )
}
