import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Description({ children }: Props) {
  return <h5 className="text-light font-light tracking-widest mt-5 leading-7">{children}</h5>
}
