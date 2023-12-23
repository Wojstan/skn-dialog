import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Title({ children }: Props) {
  return <h1 className="text-5xl font-cursive font-bold text-blue tracking-widest">{children}</h1>
}
