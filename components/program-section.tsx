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
                    <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <div>
                          <p className="text-md md:text-sm font-medium text-amber-50">{concert.date}</p>
                          <p className="text-md md:text-sm font-medium text-amber-50">{concert.time}</p>
                        </div>
                        <br/>
                        <h3 className="text-xl md:text-md text-amber-50 font-display mt-1 handwritten-first-letter">{concert.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="min-h-[170px] mb-4">
                    <div>{concert.description.split('\n').map((line, index) => (
                        <p key={index} className="text-sm text-muted-foreground mb-4">
                            {line}
                            <br />
                        </p>
                    ))}
                  </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <a href="#locations">
                    <Button variant="outline" size="sm">
                      {concert.location}
                    </Button>
                    </a>
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
    image: 'program/Der_Wellen_Wechselspiel.png',
    description:
      "Vokalconsort des Berliner Mädchenchores\nJustine Eckhaut - Klavier\nThorsten Kaldewei - Klavier\nJohanna Kaldewei - Sopran\nLtg. Sabine Wüsthoff",
  },
  {
    title: "Jeux d'eau",
    date: "20. September 2025",
    time: "16.00 Uhr",
    location: 'Andreaskirche',
    image: 'program/Jeux_deau.png',
    description:
      "Die rauschenden Klänge des Wassers in Melodien und Bilder um 1900\nDr. Friederike Südmeyer - Kunsthistorikerin\nAaron Dan - Flöte\nThorsten Kaldewei - Klavier",
  },
  {
    title: "Sturm und Stille",
    date: "20. September 2025",
    time: "19.30 Uhr",
    location: 'Kirche am Stölpchensee',    
    image: 'program/Sturm_und_Stille.png',
    description:
      "Barockmusik über Wasser, Wandel und die Seele zwischen Aufruhr und Einkehr\nJohanna Kaldewei - Sopran\nlautten compagney BERLIN\nLtg: Wolfgang Katschner",
  },
  {
    title: "J.S. Bach: Gleich wie Regen und Schnee vom Himmel fällt",
    date: "21. September 2025",
    time: "10.00 Uhr",
    location: 'Kirche am Stölpchensee',
    image: 'program/Kantatengottesdienst.png',
    description:
      "Kantatengottesdienst\nPredigt: Pfarrerin Sapna Joshi\nVokal- und Instrumentalsolist:innen\nMirlan Kasymaliev - Orgel",
  },
  {
    title: "Panta rhei - Alles fließt (und nichts bleibt)",
    date: "21. September 2025",
    time: "18.00 Uhr",
    location: 'St. Peter und Paul auf Nikolskoe',
    image: 'program/Abschlusskonzert.png',
    description:
      "J.S. Bach: Motetten, Vokalmusik der Romantik\nMirlan Kasymaliev - Continuo",
  },
]
