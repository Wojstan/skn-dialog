import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface Props {
  children: ReactNode
  background: string
}

export function DefaultLayout({ children, background }: Props) {
  return (
    <>
      <Navbar />
      <main className={`bg-${background}`}>{children}</main>
      <Footer />
    </>
  )
}
