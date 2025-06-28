import { Button } from "@/components/ui/button"

export function ArtistsSection() {
  return (
    <section id="artists" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title centered handwritten-first-letter">Artists</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the extraordinary musicians who will bring classical masterpieces to life at Musikfest Wannsee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {artists.map((artist, index) => (
            <div key={index} className="text-center group">
              <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto max-w-[250px] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <Button variant="outline" size="sm" className="text-white border-white">
                    View Profile
                  </Button>
                </div>
              </div>
              <h3 className="text-xl font-display mb-2 handwritten-first-letter">{artist.name}</h3>
              <p className="text-muted-foreground mb-3">{artist.instrument}</p>
              <p className="text-sm max-w-md mx-auto">{artist.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="btn-elegant">View All Artists</Button>
        </div>
      </div>
    </section>
  )
}

const artists = [
  {
    name: "Clara Schumann",
    instrument: "Piano",
    bio: "Internationally acclaimed pianist known for her profound interpretations of Romantic repertoire and her commitment to championing new works.",
  },
  {
    name: "Johannes Brahms",
    instrument: "Violin",
    bio: "Award-winning violinist who has performed with major orchestras worldwide and is celebrated for his technical brilliance and emotional depth.",
  },
  {
    name: "Robert Schumann",
    instrument: "Cello",
    bio: "Distinguished cellist whose lyrical playing and innovative programming have earned him recognition as one of today's most compelling performers.",
  },
]
