import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Subtitle({ children }: Props) {
  return (
    <h2 className="text-2xl sm:text-3xl font-semibold text-pink tracking-wide">
      {children}
    </h2>
  )
}