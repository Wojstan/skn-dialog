import { ReactNode } from 'react'
import { Subtitle } from 'components/Common/Subtitle'

interface Event {
  title: string
  date: string
  time: string
  place: string
  description?: ReactNode
  facebookUrl: string
}

const upcomingEvents: Event[] = [
  {
    title: '"Nie ma duchów w mieszkaniu na Dobrej" - seans z dyskusją psychologiczną',
    date: '23 kwietnia 2026',
    time: '19:30',
    place: 'Kino Atlantic',
description: (
  <>
    <p>
      Jeśli szukacie filmu, który nie traktuje problemów młodych ludzi
      protekcjonalnie, garściami czerpie z psychologii, a wśród widowni
      wywołuje na przemian uśmiech i ciche „rel”, to nie musicie już dłużej
      szukać!
    </p>

    <p className="mt-4">
      Po seansie zapraszamy do udziału w dyskusji, w której uczestniczyć będzie
      profesor <strong>Anna Cierpka</strong>, wykładowczyni Uniwersytetu
      Warszawskiego, zajmująca się między innymi tematyką rodziny oraz
      psychologią narracyjną, co bez wątpienia wniesie ciekawe spojrzenie na
      film.
    </p>
  </>
),    facebookUrl: 'https://www.facebook.com/events/26517028751314743/',
  },
]

const pastEvents: Event[] = [
{
    title: '"Sentimental Value" - filmowy seans z dyskusją',
    date: '5 marca 2026',
    time: '19:00',
    place: 'Kino Atlantic',
    description: (
      <>
      <p>
        Jest to norweski dramat eksplorujący zawiłość relacji rodzinnych, 
        w tym problem dziedziczonej traumy. Opowiada historię dwóch sióstr, 
        w których życiach na nowo pojawia się ich ojciec, Gustav, niegdyś 
        wielki reżyser filmowy. Trudna relacja córek z ojcem zostaje dodatkowo 
        skomplikowana przez współpracę z młodą gwiazdą Hollywood, 
        która ma zagrać w jego najnowszym filmie.
        </p>
        
        <p className="mt-4">
          Po seansie zapraszamy na rozmowę w sali kinowej z dr <strong>Karoliną Małek</strong>, 
          doświadczoną psychoterapeutką par i rodzin. Będzie to przestrzeń na dzielenie się 
          swoimi przemyśleniami oraz zadawanie pytań, do czego gorąco zachęcamy!
        </p>
      </>
),    facebookUrl: 'https://www.facebook.com/events/771915999293868/',
  },
  {
    title: '"Dom dobry" (2025) - pokaz filmu oraz dyskusja',
    date: '12 grudnia 2025',
    time: '18:00',
    place: 'Kino Atlantic',
    description: (
      <>
      <p>Film w reżyserii Wojciecha Smarzowskiego, który porusza 
        problem toksycznych relacji i doświadczeń przemocy w rodzinie 
        skrywanych za fasadą normalności. Projekcja filmowa to dla nas okazja 
        do rozmów. Poruszymy temat przemocy domowej oraz kwestię konfrontacji 
        z trudnymi emocjami podczas oglądania filmów.
        </p>
        
        <p className="mt-4">
        Przed seansem odbędzie się rozmowa z naszym gościem z Instytutu Psychologii Zdrowia &quot;Niebieska Linia&quot;
        - <strong>Anetą Bukowską</strong>, która opowie o działaniu instytucji pomocowych, w kontekście przemocy domowej. 
        Po projekcji zapraszamy na wspólną dyskusję z udziałem Pana <strong>Piotra Pawłowskiego</strong> - psychologa, psychoterapeuty, wykładowcy Wydziału Psychologii UW. 
        Będzie to przestrzeń na dzielenie się swoimi przemyśleniami oraz zadawanie pytań, do czego gorąco zachęcamy!
        </p>
        </>
),    facebookUrl: 'https://www.facebook.com/events/24387733724233274/',
  },
]


function EventCard({ event }: { event: Event }) {
  return (
    <article className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-blue">
        {event.title}
      </h3>

      <div className="mt-4 space-y-1 text-sm">
        <p>
          <span className="font-semibold">Data:</span> {event.date}
        </p>

        <p>
          <span className="font-semibold">Godzina:</span> {event.time}
        </p>

        <p>
          <span className="font-semibold">Miejsce:</span> {event.place}
        </p>
      </div>

{event.description && (
  <div className="mt-4 text-gray-600">
    {event.description}
  </div>
)}
      <a
        href={event.facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 text-pink font-semibold hover:underline"
      >
        Zobacz wydarzenie na Facebooku →
      </a>
    </article>
  )
}

function FeaturedEventCard({ event }: { event: Event }) {
  return (
    <article className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-pink">
      <p className="text-sm font-semibold text-pink tracking-widest uppercase">
        Ostatnie wydarzenie
      </p>

      <h3 className="text-2xl font-bold text-blue mt-3">
        {event.title}
      </h3>

      <div className="mt-5 space-y-2">
        <p>
          <span className="font-semibold">Data:</span> {event.date}
        </p>

        <p>
          <span className="font-semibold">Godzina:</span> {event.time}
        </p>

        <p>
          <span className="font-semibold">Miejsce:</span> {event.place}
        </p>
      </div>

{event.description && (
  <div className="mt-5 text-gray-600">
    {event.description}
  </div>
)}
      <a
        href={event.facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-pink text-white px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Zobacz wydarzenie na Facebooku →
      </a>
    </article>
  )
}

export function FacebookEvents() {
  return (
    <section>
      <Subtitle>Wydarzenia</Subtitle>

      {upcomingEvents.length > 0 && (
        <div className="mt-10 space-y-6">
          {upcomingEvents.map((event) => (
            <FeaturedEventCard
              key={`${event.title}-${event.date}`}
              event={event}
            />
          ))}
        </div>
      )}

      {pastEvents.length > 0 && (
        <div className="mt-10 space-y-6">
          {pastEvents.map((event) => (
            <EventCard
              key={`${event.title}-${event.date}`}
              event={event}
            />
          ))}
        </div>
      )}
    </section>
  )
}