import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Subtitle({ children}: Props) {
  return <h2 className={`text-3xl font-semibold text-pink tracking-widest`}>{children}</h2>
}
