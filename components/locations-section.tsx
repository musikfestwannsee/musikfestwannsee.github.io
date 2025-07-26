import { Button } from "@/components/ui/button"

export function LocationsSection() {
  return (
    <section id="locations" className="py-24 water-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title centered handwritten-first-letter">Veranstaltungsorte</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {otherLocations.map((location, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square bg-muted rounded-sm overflow-hidden mb-6 elegant-border" style={{
                backgroundImage: `url(${location.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-display mb-2 handwritten-first-letter">{location.name}</h2>
                <p className="text-sm text-muted-foreground mb-4 min-h-[200px]">{location.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-display mb-2 handwritten-first-letter">Anfahrt</h3>
                <p className="text-sm text-muted-foreground mb-4">{location.address}</p>
                <p className="text-sm text-muted-foreground mb-4">{location.anfahrt}</p>
                <a href={location.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" >Google Maps</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const otherLocations = [
  {
    name: 'Kirche am Stölpchensee',
    image: 'locations/Stoelpchenseekirche.png',
    description: 'Die Kirche befindet sich im alten Dorfkern des Dorfes Stolpe. Sie wurde 1859 geweiht. Der Architekt der Kirche war F. A. Stüler. In ihrem Turm befindet sich ein mechanisches Glockenspiel, das zu jeder vollen Stunde einen von drei Chorälen passend zum Kichenjahr spielt.\n\n',
    anfahrt: 'Bus 118, 318 | Haltestelle Wilhelmplatz | 140m Fußweg',
    address: 'Wilhelmplatz 1, 14109 Berlin',
    url: 'https://www.google.com/maps/place/Wilhelmpl.+1,+14109+Berlin/@52.4119456,13.1388765,17z/data=!3m1!4b1!4m6!3m5!1s0x47a858c7b4b03d3f:0xbd39994147b2b66d!8m2!3d52.4119456!4d13.1414514!16s%2Fg%2F11bw43blsn?entry=ttu',
  },
  {
    name: 'St. Peter und Paul auf Nikolskoe',
    image: 'locations/St._Peter_und_Paul.png',
    description: 'Die Evangelische Kirche St. Peter und Paul auf Nikolskoe wurde zwischen 1834 und 1837 für die Bewohner der Pfaueninsel und von Kleinglienicke auf Erlass des Königs Friedrich Wilhelm III. erbaut. Die schlichte beschauliche Kirche mit ihrem romantischen Ambiente zieht heute nicht nur Wanderer in ihren Bann, sondern immer mehr junge Leute, die in dieser ruhigen, von aller Hektik der Stadt abgewandten Kirche, den Bund der Ehe schließen und ihre Kinder taufen lassen wollen.',
    address: 'Nikolskoer Weg 17, 14109 Berlin',
    anfahrt: 'Bus 316 | Haltestelle Nikolskoer Weg | ca. 1500m Fußweg',
    url: 'https://www.google.com/maps/place/Ev.+Kirche+St.+Peter+und+Paul+auf+Nikolskoe/@52.4247097,13.1151359,17z/data=!3m1!4b1!4m6!3m5!1s0x47a8589f70e949a1:0xf470b8b3e9c07fcb!8m2!3d52.4247097!4d13.1177108!16zL20vMGJxNzhs?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Andreaskirche',
    image: 'locations/Andreas_Kirche.png',
    description: 'Lassen Sie sich begeistern durch dieses Kleinod in neugotischem Stil. Diese, 1896, ohne auffälligen Prunk gebaute Kirche bildet zusammen mit der zuvor begonnenen Anlage des Friedhofs und der ursprünglich als Aussegnungshalle geschaffenen Vorhalle ein in Berlin einzigartiges Ensemble.',
    address: 'Lindenstraße 1, 14109 Berlin',
    anfahrt: 'Bus 118, 218, 316 | Haltestelle Pfaueninselchaussee/Königstr. | ca. 800m Fußweg',
    url: 'https://www.google.com/maps/place/Lindenstra%C3%9Fe+1,+14109+Berlin/@52.4247729,13.154347,17z/data=!4m6!3m5!1s0x47a858eeccbab2db:0x107a68b11e611c0b!8m2!3d52.4251623!4d13.1541646!16s%2Fg%2F11c4kfrxmr?entry=ttu',
  },
]
