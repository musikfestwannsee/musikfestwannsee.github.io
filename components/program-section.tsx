import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProgramSection() {
  return (
    <section id="program" className="py-24 water-bg"> 
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title centered">Programm</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert, index) => (
            <Card key={index} className="card-elegant">
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
                  <div className="min-h-[250px] mb-4">
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
    title: "Der Schatten eines Traumes",
    date: "18. September 2026",
    time: "19.00 Uhr",
    location: 'Kirche am Stölpchensee',
    image: 'program/Eroeffnungskonzert.png',
    description:
      "Eröffnungskonzert\nCorinna Harfouch liest Karoline von Günderode und Christa Wolf\nLieder und Kammermusik aus der Zeit um 1800\n" +
        "Corinna Harfouch - Lesung\nJohanna Kaldewei - Sopran\nLautten compagney Berlin - Ltg. Wolfgang Katschner",
  },
  {
    title: "HerStory",
    date: "19. September 2026",
    time: "11.00 Uhr",
    location: 'Gemeindehaus',
    image: 'program/Der_Wellen_Wechselspiel.png',
    description:
      "Vortrag und Gespräch\nKomponistinnen im Spiegel ihrer Zeit\nHenrike Leißner - Moderation\nJohanna Kaldewei - Sopran\nThorsten Kaldewei - Klavier\nund weitere",
  },
  {
    title: "Allegra con Fuoco",
    date: "19. September 2026",
    time: "16.00 Uhr",
    location: 'Andreaskirche',
    image: 'program/Jeux_deau.png',
    description:
      "Kammermusik\nWerke von Clara Schumann, Emilie Mayer und Claude Arrieu\nYoshiaki Shibata - Violine\nThorsten Kaldewei - Klavier\nSabine Techritz - Violoncello",
  },
  {
    title: "Kalliope im Spiegel",
    date: "19. September 2026",
    time: "19.30 Uhr",
    location: 'Andreaskirche',
    image: 'program/Sturm_und_Stille.png',
    description:
      "Liederabend im Dialog der Künste\nMusen, Stimmen und Bilder - Portraits von Künstlerinnen\nDr. Friederike Südmeyer - Kunsthistorikerin\nJohanna Kaldewei - Sopran\nLaila Salome Fischer - Mezzosopran\nKatharina Landl - Klavier",
  },
  {
    title: "Kantatengottesdienst",
    date: "20. September 2026",
    time: "15.00 Uhr",
    location: 'St. Peter und Paul auf Nikolskoe',
    image: 'program/Kirchturm.png',
    description:
      "Predigt: Pfarrerin Ute Hagmayer\nVokal- und Instrumentalmusik: Concerto Festante Wannsee",
  },
  {
    title: "Verborgene Linien",
    date: "20. September 2026",
    time: "18.00 Uhr",
    location: 'St. Peter und Paul auf Nikolskoe',
    image: 'program/Abschlusskonzert.png',
    description:
      "Abschlusskonzert\nKomponistinnen durch die Jahrhunderte\nMitglieder des RIAS-Kammerchor\nLtg. Joachim Buhrmann",
  },
]
