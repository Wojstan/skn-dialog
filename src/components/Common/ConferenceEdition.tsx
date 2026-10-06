import { Subtitle } from 'components/Common/Subtitle'

interface Section {
  title: string
  people: string[]
}

interface Props {
  year: string
  banner?: string
  sections: Section[]
}

export function ConferenceEdition({ year, banner, sections }: Props) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue tracking-widest text-center">
        {year}
      </h2>

      {banner && (
        <div className="mt-10">
          <img
            src={banner}
            alt={`Baner Ogólnopolskiej Konferencji Zaburzeń Osobowości ${year}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-x-32 gap-y-12 text-left mt-16">
        {sections.map((section) => (
          <section key={section.title}>
            <Subtitle>{section.title}</Subtitle>

            <div className="mt-6 space-y-1">
              {section.people.map((person) => (
                <p key={person}>{person}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}