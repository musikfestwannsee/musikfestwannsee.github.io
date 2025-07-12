export function ArtistsSection() {
  return (
    <section id="artists" className="py-24 water-bg-backwards">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title centered handwritten-first-letter">Künstler:innen</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Freuen Sie sich mit uns auf außergewöhnliche Musik von außergewöhnlichen Menschen:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {artists.map((artist, index) => (
            <div key={index} className="text-center group relative">
              <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto max-w-[250px] relative group-hover:opacity-0"
                style={{ 
                  backgroundImage: `url(${artist.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}>
              </div>
                <h3 className="text-xl font-display mb-2 handwritten-first-letter group-hover:opacity-0">{artist.name}</h3>
                <p className="text-muted-foreground mb-3 group-hover:opacity-0">{artist.instrument}</p>

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[460px] h-[360px] opacity-0 group-hover:opacity-100 transition-opacity overflow-y-scroll p-4 z-10">
                  <p className="text-sm max-w-md mx-auto">{artist.description}</p>
                </div>
            </div>
          ))}
        </div>
      {/*
        <div className="text-center mt-16">
          <Button className="btn-elegant">View All Artists</Button>
        </div>
      */}
      </div>
    </section>
  )
}

const artists = [/*
    {
        name: 'Vocalconsort des Berliner Mädchenchores',
        instrument: 'Chor',
        image: '',
        description: '',
    },
    {
        name: 'Justine Eckhaut',
        instrument: 'Klavier',
        image: '',
        description: '',
    },*/
    {
        name: 'Thorsten Kaldewei | Pianist',
        instrument: 'Klavier',
        image: 'artists/Thorsten_Kaldewei.png',
        description: 'Der Pianist Thorsten Kaldewei ist Dozent für Repertoire und Liedgestaltung an der Universität der Künste Berlin. Er studierte Klavier und Liedgestaltung an der Musikhochschule Köln, u.a. bei Prof. Michael Endres. Bei Rudolf Jansen und Irwin Gage erhielt er weitere wichtige Anregungen für sein Liedrepertoire.\n'+
        'Als Solorepetitor arbeitete er an den Staatsopern Hannover und Stuttgart sowie an der Komischen Oper Berlin. Darüber hinaus ist seine pianistische Tätigkeit vielfältig: Konzerte mit Chören und Orchestern, wie z.B. dem RIAS Kammerchor, Kammermusik, Liederabende, Uraufführungen sowie Rundfunk- und CD- Produktionen. Wichtige Stationen seiner künstlerischen Laufbahn waren u.a. Auftritte in der Tonhalle Düsseldorf, der Stuttgarter Liederhalle und in der Berliner Philharmonie. Weiterhin führten ihn Konzertreisen durch halb Europa sowie in die USA und Südkorea. Im Rahmen seiner Konzerttätigkeit arbeitete er mit Sängern wie u.a. Ute Lemper, Gisela May, Dagmar Schellenberger und Julie Kaufmann.\n\n',
    },
    {
        name: 'Dr. Friederike Südmeyer',
        instrument: 'Kunsthistorikerin',
        image: 'artists/Friederike_suedmeyer.png',
        description: 'Die Kunsthistorikerin Friederike Südmeyer ist Kuratorin einer Stiftung, Vorsitzende des Wannseer Kulturverein, arbeitet als Kunstberaterin und vermittelt in Führungen, Vorträgen und Workshops ihren Blick auf die Welt der Kunst.\n',
    },/*
    {
        name: 'Aaron Dan',
        instrument: 'Flöte',
        image: '',
        description: '',
    },*/
    {
        name: 'Lautten compagney Berlin',
        instrument: 'Ensemble',
        image: 'artists/lauttencompagney.png',
        description: 'Die lautten compagney BERLIN unter der Leitung von Wolfgang Katschner zählt zu den renommiertesten und kreativsten deutschen Barockensembles. Seit ihrer Gründung 1984 begeistert sie Musikliebhaber:innen auf der ganzen Welt. Im Herbst 2019 wurde sie mit dem OPUS Klassik als Ensemble des Jahres ausgezeichnet. Mit Konzerten, Opernaufführungen und Crossoverprojekten setzt sie einzigartige musikalische Akzente. Das Ensemble gehört zu den wenigen freien Produzenten von Musiktheaterprojekten in Deutschland. Für seine ungewöhnlichen und innovativen Programme wird es vom Publikum wie von nationalen und internationalen Feuilletons gleichermaßen geschätzt. Neben ihren Auftritten in Berlin tourt die lautten compagney mit ca. 100 Konzerten pro Jahr durch die Bundesrepublik, Europa und die Welt. Die letzten großen, außereuropäischen Tourneen führten im Jahr 2019 durch 10 Städte Chinas und im Herbst 2021 nach Bogotá in Kolumbien.\n' + 
        'Die lautten compagney pflegt als wichtigen Teil ihres Programmspektrums mit großen Repertoirewerken musikalische Traditionen. Wolfgang Katschner und sein Ensemble sind nicht nur neugierig auf Musik, sondern auch auf neue Wege ihrer konzertanten Darstellung. Ihre eigene, individuelle Plattform für Experimente hat die lautten compagney u.a. mit dem Format der :lounge gefunden. Wenn alte Werke so von neuen Ideen inspiriert werden, verschwinden musikalische Grenzen.\n\n',
        url: 'https://www.lauttencompagney.de/',
    },/*
    {
        name: 'Sapna Joshi',
        instrument: 'Pfarrerin',
        image: '',
        description: '',
    },
    {
        name: 'Mirlan Kasymaliev',
        instrument: 'Orgel, Continuo',
        image: '',
        description: '',
    },*/
    {
        name: 'Johanna Kaldewei',
        instrument: 'Sopranistin',
        image: 'artists/Johanna_Portrait.png',
        description: 'Die mehrfach ausgezeichnete Sopranistin Johanna Kaldewei hat durch ihr natürliches Timbre, ihre Strahlkraft und Wärme auf sich aufmerksam gemacht. Sie ist Gewinnerin des „Podiums Junger Gesangsolisten“ 2017 und Preisträgerin mehrerer internationaler Wettbewerbe, u.a. dem Telemann-Wettbewerb Magdeburg 2017 und dem Giulio-Perotti-Wettbewerb 2013, wo sie außerdem den „Sonderpreis für die schönste Sopranstimme“ gewann.\n'+
        'Johanna Kaldewei ist gefragte Konzertsolistin. Sie arbeitete mit namhaften Dirigenten wie Wolfgang Katschner, Kai-Uwe Jirka, Christoph Spering und Thomaskantor Andreas Reize und mit renommierten Klangkörpern wie dem Konzerthausorchester Berlin, der Staatskapelle Halle, dem Orchester der Komischen Oper Berlin, den Bielefelder Philharmonikern, der lautten compagney BERLIN, l’arte del mondo und dem Neuen Orchester Köln. Engagements führten sie u.a. zu den Händelfestspielen Halle, zum Bachfest Leipzig, dem mdr Musiksommer, der Biennale München, ans Theater Winterthur (CH), ans Staatstheater Cottbus, zum Int. Kirkemusikfestival Oslo, in große Konzertsäle wie die Berliner Philharmonie, das Leipziger Gewandhaus, den Gasteig München sowie quer durch Deutschland und Europa.\n\n',
        url: 'https://www.johannakaldewei.com/'
    },
]
