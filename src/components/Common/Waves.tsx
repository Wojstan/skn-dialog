interface Props {
  rotate?: boolean
  color?: 'blue' | 'gray'
}

export function Waves({ rotate, color = 'gray' }: Props) {
  return (
    <aside className={`${rotate ? 'rotate-180' : ''} hidden md:block`}>
      <img className="w-full" src={`/images/waves_${color}.svg`} alt="waves" />
    </aside>
  )
}
