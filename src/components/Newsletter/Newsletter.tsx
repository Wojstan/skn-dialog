import { FormEvent, useState } from 'react'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Newsletter() {
  const [applicationSubmited, setApplicationSubmited] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const email = formData.get('EMAIL')?.toString() || ''
    const consent = formData.get('OPT_IN') ? 'Tak' : ''

    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSf6HZC7-W5mehVveff741m3pn3Ar_iMBjVpdX-8vhXKUXG8GQ/formResponse'

    const data = new URLSearchParams()
    data.append('entry.95344110', email) // e-mail
    data.append('entry.1966869942', consent) // zgoda

    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      })

      setApplicationSubmited(true)
      setTimeout(() => setApplicationSubmited(false), 5000)
    } catch (error) {
      setApplicationSubmited(true)
      setTimeout(() => setApplicationSubmited(false), 5000)
    }

    e.currentTarget.reset()
  }
  return (
    <form
      id="sib-form"
      onSubmit={handleSubmit}
      className="mt-8 text-center max-w-[56rem] m-auto px-3"
      data-type="subscription"
    >
      <input
        autoComplete="off"
        placeholder="skndialog@psych.uw.edu.pl"
        data-required="true"
        required
        className="m-auto block p-3 min-w-80 rounded mb-6 text-dark"
        type="email"
        id="EMAIL"
        name="EMAIL"
      />
      <div className="mb-3">
        <input id="OPT_IN" name="OPT_IN" required type="checkbox" />
        <label htmlFor="#terms" className="text-sm text-light font-light tracking-widest ml-1">
          Wyrażam zgodę na otrzymywanie Newslettera od SKN Psychoterapii &quot;Dialog&quot; i akceptuję postanowienie
          dotyczące przetwarzania danych osobowych.
        </label>
      </div>

      <div className="mb-12">
        <div className="text-sm text-zinc-300 font-light tracking-widest mb-4">
          W każdej chwili możesz zrezygnować z otrzymywania wiadomości klikając na link w e-mailu.
        </div>

        {applicationSubmited && (
          <div className="text-sm text-green-600 tracking-widest font-semibold">
            <FontAwesomeIcon className="mr-1" icon={faCheckCircle} />
            Gratulacje! Twój adres e-mail został pomyślnie zapisany do naszego newslettera.
          </div>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-pink hover:text-zinc-200 p-2 min-w-32 rounded border-none transition-colors"
      >
        Dołącz!
      </button>
    </form>
  )
}
