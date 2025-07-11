import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProgramSection() {
  return (
    <section id="program" className="py-24 water-bg"> 
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title centered handwritten-first-letter">Programm</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert, index) => (
            <Card key={index} className="card-elegant overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[3/2] bg-muted relative">
                  <div className="absolute inset-0 flex items-end p-6 " style={{
                    backgroundImage: `url(${concert.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                    <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="text-white">
                        <p className="text-sm font-medium">{concert.date}</p>
                        <p className="text-sm font-medium">{concert.time}</p>
                        <br/>
                        <h3 className="text-xl font-display mt-1 handwritten-first-letter">{concert.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 min-h-[90px]">{concert.description}</p>
                  <div className="flex items-center justify-center">
                    <Button variant="outline" size="sm">
                      {concert.location}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
      </div>
    </section>
  )
}

const concerts = [
  {
    title: "Der Wellen Wechselspiel",
    date: "19. September 2025",
    time: "19:30 Uhr",
    location: 'Andreaskirche',
    image: 'program/Mein_Arkadien.png',
    description:
      "Vokalconsort des Berliner Mädchenchores\nJustine Eckhaut\nThorsten Kaldewei\nJohanna Kaldewei\nLtg. Sabine Wüsthoff",
  },
  {
    title: "Jeux d'eau",
    date: "20. September 2025",
    time: "16.00 Uhr",
    location: 'Andreaskirche',
    image: 'program/Kantatengottesdienst.png',
    description:
      "Die rauschenden Klänge des Wassers in Melodien und Bilder um 1900\nDr. Friederike Südmeyer | Aaron Dan | Thorsten Kaldewei",
  },
  {
    title: "Sturm und Stille",
    date: "20. September 2025",
    time: "19.30 Uhr",
    location: 'Kirche am Stölpchensee',
    image: 'program/Hirtenidyll.png',
    description:
      "Barockmusik über Wasser, Wandel und die Seele zwischen Aufruhr und Einkehr\nJohanna Kaldewei | lautten compagney BERLIN | Ltg: Wolfgang Katschner",
  },
  {
    title: "J.S. Bach: Gleich wie Regen und Schnee vom Himmel fällt",
    date: "21. September 2025",
    time: "10.00 Uhr",
    location: 'Kirche am Stölpchensee',
    image: 'program/Eroeffnungskonzert.png',
    description:
      "Kantatengottesdienst\nPredigt: Pfarrerin Sapna Joshi | Vokal- und Instrumentalsolist:innen | Orgel: Mirlan Kasymaliev",
  },
  {
    title: "Panta rhei - Alles fließt (und nichts bleibt)",
    date: "21. September 2025",
    time: "18.00 Uhr",
    location: 'Nikolskoe',
    image: 'program/Abschlusskonzert.png',
    description:
      "J.S. Bach: Motetten, Vokalmusik der Romantik\nContinuo: Mirlan Kasymaliev | N.N.",
  },
]
