import { Subtitle } from 'components/Common/Subtitle'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 pt-28">
      <img src="/images/404-logo.png" alt="404" className="h-28 mb-1" />
      <Subtitle>404 - Nie znaleziono strony</Subtitle>
      <Link href="/">
        <span className="text-light hover:text-pink cursor-pointer">Wróć na stronę główną</span>
      </Link>
    </div>
  )
}
