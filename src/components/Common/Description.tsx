import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  margin?: number
}

export function Description({ children, margin = 5 }: Props) {
  return <h5 className={`text-light font-light tracking-widest mt-${margin} leading-7`}>{children}</h5>
}
