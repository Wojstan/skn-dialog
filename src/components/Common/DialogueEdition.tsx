import { Subtitle } from 'components/Common/Subtitle'

interface Image {
  src: string
  position: string
}

interface Props {
  banner: string
  currentTeam: string[]
  previousTeam: string[]
  previousTeamImages: Image[]
}

export function DialogueEdition({
  banner,
  currentTeam,
  previousTeam,
  previousTeamImages,
}: Props) {
  return (
    <section className="container mx-auto px-4 py-16">
      <section>
        <Subtitle>Zespół 2026/27</Subtitle>

        <div className="grid md:grid-cols-2 gap-x-32 gap-y-1 mt-6">
          {currentTeam.map((person) => (
            <p key={person}>{person}</p>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <img
          src={banner}
          alt="Dialogi o psychoterapii 2025/26"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <section className="mt-16">
        <Subtitle>Zespół 2025/26</Subtitle>

        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-10 mt-6">
          <div className="space-y-1 text-left">
            {previousTeam.map((person) => (
              <p key={person}>{person}</p>
            ))}
          </div>

          <div className="space-y-8"> {previousTeamImages.map((image) => ( 
            <img key={image.src} src={image.src} 
            alt="Spotkanie Dialogów o psychoterapii 2025/26" 
            className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" style={{ objectPosition: image.position }} /> ))} </div>
        </div>
      </section>
    </section>
  )
}