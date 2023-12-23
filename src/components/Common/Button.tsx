import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant: 'dark' | 'pink'
  href: string
}

export function Button({ children, variant, href }: Props) {
  const colors = {
    dark: 'text-lightBlue bg-black hover:text-pink',
    pink: 'text-white bg-pink hover:text-zinc-200',
  }[variant]

  return (
    <Link href={href}>
      <button className={`${colors} p-3 min-w-40 rounded-lg border-none transition-colors`}>{children}</button>
    </Link>
  )
}
