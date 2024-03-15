import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useState } from 'react'

export function Newsletter() {
  const [applicationSubmited, setApplicationSubmited] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    try {
      const url =
        'https://4358fe60.sibforms.com/serve/MUIFAE_imoCwq8tapbnQXXDTlul2sYDbZGXuTE7cqLwd5QodBODSXywVh2DAB_DHGReXtsK9pXhRxHf2IgIQw4UylPffX_2JOMAO39wV5zCETm-itSdWjTL2m1if0FPrEPY8JHq0Jar99_LNP7GSJAzvs_rM7oAKZPxmUMt9NwJftwpYoCDxIXnsU-da_tC_06heEI2TNYd4Rj87'
      e.currentTarget.reset()
      await fetch(url, {
        method: 'POST',
        body: formData,
      })

      setApplicationSubmited(true)
      setTimeout(() => {
        setApplicationSubmited(false)
      }, 5000)
    } catch (error) {
      setApplicationSubmited(true)
      setTimeout(() => {
        setApplicationSubmited(false)
      }, 5000)
    }
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

      <div className='mb-12'>
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
