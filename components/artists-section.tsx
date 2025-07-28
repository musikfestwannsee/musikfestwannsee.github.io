import { Card, CardContent } from "./ui/card"
import Image from "next/image"

export function ArtistsSection() {
  return (
    <section id="artists" className="py-24 water-bg">
      <div className="container mx-auto px-6">
        <div className="text-center text-white mb-16">
          <h2 className="section-title centered">Künstler:innen</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Freuen Sie sich mit uns auf außergewöhnliche Musik von außergewöhnlichen Menschen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {artists_landscape.map((artist, index) => (
            <Card key={index} className="overflow-hidden bg-beige-50 border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative m-2">
                  <Image 
                    src={artist.image || "/placeholder.svg"} 
                    alt={artist.name}
                    layout="responsive"
                    width={1}
                    height={1}
                    className="object-cover"
                  />
                </div>
              <CardContent className="p-6 dark:bg-slate-800">
                <h2 className="text-xl font-display mb-2 handwritten-first-letter group-hover:opacity-0">{artist.name}</h2>
                <h4 className="text-l text-sky-700 font-display mb-2 group-hover:opacity-0">{artist.instrument}</h4>
                <div>{artist.description.split('\n').map((line, index) => (
                      <p key={index} className="text-sm font-medium mb-3">
                          {line}
                          <br />
                      </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <br/>
          <br/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {artists_portrait.map((artist, index) => (
            <Card key={index} className="overflow-hidden bg-beige-50 border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover"/>
              </div>
              <CardContent className="p-6 dark:bg-slate-800">
                <h2 className="text-xl font-display mb-2 handwritten-first-letter group-hover:opacity-0">{artist.name}</h2>
                <h4 className="text-l text-sky-700 font-display mb-2 group-hover:opacity-0">{artist.instrument}</h4>
                <div>{artist.description.split('\n').map((line, index) => (
                      <p key={index} className="text-sm font-medium mb-3">
                          {line}
                          <br />
                      </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const artists_landscape = [
    {
        name: 'Lautten compagney Berlin',
        instrument: 'Ensemble',
        image: 'artists/lauttencompagney.png',
        description: 'Die lautten compagney BERLIN unter der Leitung von Wolfgang Katschner zählt zu den renommiertesten und kreativsten deutschen Barockensembles. Seit ihrer Gründung 1984 begeistert sie Musikliebhaber:innen auf der ganzen Welt. Im Herbst 2019 wurde sie mit dem OPUS Klassik als Ensemble des Jahres ausgezeichnet. Mit Konzerten, Opernaufführungen und Crossoverprojekten setzt sie einzigartige musikalische Akzente. Das Ensemble gehört zu den wenigen freien Produzenten von Musiktheaterprojekten in Deutschland. Für seine ungewöhnlichen und innovativen Programme wird es vom Publikum wie von nationalen und internationalen Feuilletons gleichermaßen geschätzt. Neben ihren Auftritten in Berlin tourt die lautten compagney mit ca. 100 Konzerten pro Jahr durch die Bundesrepublik, Europa und die Welt. Die letzten großen, außereuropäischen Tourneen führten im Jahr 2019 durch 10 Städte Chinas und im Herbst 2021 nach Bogotá in Kolumbien.\n' + 
        'Die lautten compagney pflegt als wichtigen Teil ihres Programmspektrums mit großen Repertoirewerken musikalische Traditionen. Wolfgang Katschner und sein Ensemble sind nicht nur neugierig auf Musik, sondern auch auf neue Wege ihrer konzertanten Darstellung. Ihre eigene, individuelle Plattform für Experimente hat die lautten compagney u.a. mit dem Format der :lounge gefunden. Wenn alte Werke so von neuen Ideen inspiriert werden, verschwinden musikalische Grenzen.\n\n',
        url: 'https://www.lauttencompagney.de/',
    },
    {
        name: 'Vocalconsort des Berliner Mädchenchores',
        instrument: 'Chor',
        image: 'artists/KVC.png',
        description: '',
    },
  ];
const artists_portrait = [
    {
        name: 'Justine Eckhaut',
        instrument: 'Pianistin',
        image: 'artists/Justine_Eckhaut.png',
        description: 'Die französische Pianistin Justine Eckhaut studierte am CNSMD in Lyon bei Florent Boffard und David Selig sowie an der Universität der Künste Berlin bei Björn Lehmann und Eric Schneider. Engagements führten sie an die Opéra National de Lyon, das Opéra Orchestre National Montpellier, die Berliner Philharmonie, die Bregenzer Festspiele, zu France Musique, an das Nationale Konservatorium für Musik in Mexiko und das Oriental Art Center in Shanghai.\nIm Februar 2025 gewann sie gemeinsam mit der lettischen Sopranistin Katrina Paula Felsberga sowohl den Ersten Preis als auch den Preis für die beste Interpretation des Auftragswerks beim Wettbewerb „Franz Schubert und die Musik der Moderne“ in Graz. Im November 2024 wurde ihr der Pianist*innenpreis für herausragende Leistungen in der Liedbegleitung beim Bundeswettbewerb Gesang in Berlin verliehen.\nIm Jahr 2020 gründete Justine Eckhaut das Festival berlied, ein unabhängiges Liedfestival in Berlin, das bisher mit drei innovativen Liederabendreihen mediale Aufmerksamkeit auf sich gezogen hat. Von 2019 bis 2021 wurde sie von Thomas Hampson eingeladen, an der Lied Akademie des Heidelberger Frühling teilzunehmen. Sie tritt außerdem als Pianistin mit dem Trio Dara auf und ist Mitglied von Let me LIED you, einem interdisziplinären Projekt unter der Leitung der Sopranistin Amanda Becker.\nSeit 2019 arbeitet sie als Gesangscoach an der Universität der Künste Berlin. Seit 2021 ist sie außerdem Pianistin des Vokalconsort des Berliner Mädchenchor unter der Leitung von Sabine Wüsthoff sowie des Kinderchores der Staatsoper Unter den Linden (Berlin) unter der Leitung von Vinzenz Weissenburger.',
    },
    {
        name: 'Thorsten Kaldewei',
        instrument: 'Pianist',
        image: 'artists/Thorsten_Kaldewei.png',
        description: 'Der Pianist Thorsten Kaldewei ist Dozent für Repertoire und Liedgestaltung an der Universität der Künste Berlin. Er studierte Klavier und Liedgestaltung an der Musikhochschule Köln, u.a. bei Prof. Michael Endres. Bei Rudolf Jansen und Irwin Gage erhielt er weitere wichtige Anregungen für sein Liedrepertoire.\n'+
        'Als Solorepetitor arbeitete er an den Staatsopern Hannover und Stuttgart sowie an der Komischen Oper Berlin. Darüber hinaus ist seine pianistische Tätigkeit vielfältig: Konzerte mit Chören und Orchestern, wie z.B. dem RIAS Kammerchor, Kammermusik, Liederabende, Uraufführungen sowie Rundfunk- und CD- Produktionen. Wichtige Stationen seiner künstlerischen Laufbahn waren u.a. Auftritte in der Tonhalle Düsseldorf, der Stuttgarter Liederhalle und in der Berliner Philharmonie. Weiterhin führten ihn Konzertreisen durch halb Europa sowie in die USA und Südkorea. Im Rahmen seiner Konzerttätigkeit arbeitete er mit Sängern wie u.a. Ute Lemper, Gisela May, Dagmar Schellenberger und Julie Kaufmann.\n\n',
    },
    {
        name: 'Dr. Friederike Südmeyer',
        instrument: 'Kunsthistorikerin',
        image: 'artists/Friederike_suedmeyer.png',
        description: 'Die Kunsthistorikerin Friederike Südmeyer ist Kuratorin einer Stiftung, Vorsitzende des Wannseer Kulturverein, arbeitet als Kunstberaterin und vermittelt in Führungen, Vorträgen und Workshops ihren Blick auf die Welt der Kunst.\n',
    },
    {
        name: 'Aaron Dan',
        instrument: 'Flötist',
        image: 'artists/Aaron_Dan.png',
        description: 'Aaron Dan wurde 1981 in eine rumänisch-ungarische Musikerfamilie in Siebenbürgen geboren. Mit 15 Jahren zog er mit seinem Bruder nach Budapest /Ungarn, wo er am Bartók-Konservatorium ausgebildet wurde. Seit dieser Zeit unternehmen die Brüder (Duo Dan, später Trio Dan) jährlich Konzertreisen nach Deutschland, Österreich, Frankreich und in die Schweiz. Nach seinem Abitur studierte er Querflöte in Berlin (Universität der Künste und Hochschule für Musik Hanns Eisler) und in Paris (Ecole Normale de Musique Alfred Cortot). Derzeit studiert Aaron Instrumentale Komposition an der Hochshule für Musik Weimar.\nAls Solist, Kammermusiker, Komponist und Moderator ist Aaron Dan sehr gefragt; er ist Gründungsmitglied des Ensembles Berlin Counterpoint, mit welchen er in vielen wichtigen Konzertsälen auftrat, u.a. im Kammermusiksaal der Berliner Philharmonie, Rheingau Musik Festival, Palau de Musica Valencia, Paax Fest Mexico City, The Rockefeller University NYC, Sao Paolo, New Orleans University, Istanbul Music Festival uvm. 2005 gewann er an den 1. Preis und drei Sonderpreise des internationalen Flötenwettbewerbs „The Winner of Belgrade“, Serbien. Im Jahr 2013 wurde dem Ensemble Berlin Counterpoint der Usedomer Musikpreis verliehen.\nSein kompositorisches Schaffen umfasst gut 100 Werke, darunter viele Stücke für Flöte und Loop Station, Kammermusik, etliche Chorwerke und vokalsymphonische Werke die Kinderoper „der kleine Prinz“, mehrere Stücke für Kindermusiktheater sowie dutzende Arrangements für seine Ensembles.\nAaron Dan lebt als freischaffender Flötist und Komponist mit seiner Familie in Berlin.',
    },
    {
        name: 'Julia Danz',
        instrument: 'Sopranistin',
        image: 'artists/Julia_Danz.png',
        description: 'Julia Danz studierte Gesang in Saarbrücken und Leipzig und schloss ihr Studium mit Auszeichnung ab. Sie ist mehrfache Preisträgerin und Finalistin internationaler Gesangswettbewerbe. Nach ihrem Studium war sie zunächst Mitglied des Opernstudios Niederrhein, gefolgt von einem Festengagement an der Staatsoperette Dresden. Seitdem ist Julia Danz freischaffend tätig und gastiert regelmäßig an renommierten Bühnen, darunter das Gärtnerplatztheater München, die Deutsche Oper am Rhein, die Staatstheater Chemnitz und Regensburg und die Opernfestspiele Heidenheim. Ihr Repertoire umfasst eine Vielzahl wichtiger Partien, darunter Pamina (»Die Zauberflöte«), Gretel (»Hänsel und Gretel«), Lauretta (»Gianni Schicchi«) und Mimi (»La Bohème«). Neben ihren Opernengagements ist Julia Danz auch eine gefragte Konzertsolistin. Sie wurde unter anderem für Beethovens 9. Sinfonie nach Japan eingeladen und arbeitete mit namhaften Orchestern wie der Philharmonie Baden-Baden, dem Sinfonieorchester Wuppertal, der Philharmonie Südwestfalen und dem Gewandhausorchester Leipzig.',
    },
    {
        name: 'Meinhardt Möbius',
        instrument: 'Bassbariton',
        image: 'artists/Meinhardt_Moebius.png',
        description: 'Der Bassbariton Meinhardt Möbius wurde in Dresden geboren und erhielt seine erste musikalische Ausbildung bei den Dresdner Kapellknaben. Er studierte zunächst Musikwissenschaft und Geschichte an der TU Dresden, bevor er sein Bachelorstudium Gesang an der HMT Leipzig bei KS Prof. Jürgen Kurth und anschließend den Masterstudiengang Operngesang an der HfM Dresden bei KS Prof. Matthias Henneberg absolvierte. Er ist seit 2019 Mitglied im Sächsischen Staatsopernchor an der Semperoper Dresden und übernimmt regelmäßig chorsolistische Partien.\nAls Solist gastierte er bei den Festtagen Alte Musik (Basel), dem Festival Retz (Niederösterreich), sowie dem Gerhart-Hauptmann-Theater Görlitz und dem Theater Plauen/ Zwickau. 2018 war er Finalist beim Bundeswettbewerb Gesang. Im Konzertbereich singt Meinhardt Möbius ein vielseitiges und epochenübergreifendes Repertoire. Die freie Musiktheater-Szene liegt ihm besonders am Herzen, da er dort auch schon während des Studiums viel Bühnenerfahrung sammeln konnte, vor allem bei Produktionen des Dresdner Opernkollektivs szene12.',
    },
    {
        name: 'Anna-Luise Oppelt',
        instrument: 'Altistin',
        image: 'artists/Anna-Luise_Oppelt.png',
        description: 'Die Berlinerin Anna-Luise Oppelt ist als Konzert- und Opernsängerin tätig. Sie ist OPUS KLASSIK Preisträgerin des Jahres 2022. Engagements führten sie zum Bachfest Leipzig, den Musikfestspielen Potsdam-Sanssouci, dem MDR Musiksommer, dem Beethovenfest Bonn, den Thüringer Bachwochen, ins Konzerthaus sowie in den Kammermusik- und Großen Saal der Philharmonie Berlin, die Alte Oper Frankfurt, zu den Salzburger Festtagen und den Köthener Bachfesttagen u.a. 2024 sang sie das Alt-Solo in Mahlers 3. Sinfonie in Berlin. Im Radialsystem Berlin sang sie Altpartie in Bachs inszenierter Johannespassion unter Marcus Creed. \nZu ihren Opernpartien zählen u.a. Bradamante in Händels Alcina, 3. Dame in Mozarts Zauberflöte, Lola in Mascagnis Cavalleria Rusticana sowie Mrs. Peachum in Brittens Beggar´s Opera. In der UA von Trip to the Moon von Andrew Norman trat sie unter Sir Simon Rattle mit den Berliner Philharmonikern auf.\nSie ist Mitbegründerin vom Musik- und Radprojekt Bach by Bike, das 2024 mit dem RESONANZEN Konzeptpreis für Musikvermittlung, 2022 mit dem OPUS KLASSIK Innovationspreis und 2021 mit dem Music Cities Award „Best Use of Music to Drive Tourism” prämiert wurde.\nAnna-Luise engagiert sich für interkulturellen und -disziplinären Austausch und war 2024 Stipendiatin im MozartLabor des Mozartfest Würzburg, 2023 von Culture Moves Europe und vom Post Truth Project Germany.\nSie schloss ihr Gesangsstudium 2018 mit dem Master an der HfM Weimar ab. Ein Barockviolinstudium in Utrecht (NL) sowie Meisterkurse bei Lioba Braun, Ingeborg Danz, Petra Lang, Christa Ludwig, Teresa Berganza, Anke Vondung, Petra Lang und die Bachakademie mit Helmuth Rilling und Hans-Christoph Rademann ergänzen ihre vielseitige Ausbildung.',
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
