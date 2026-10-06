import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Title({ children }: Props) {
  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue tracking-wide">
      {children}
    </h1>
  )
}