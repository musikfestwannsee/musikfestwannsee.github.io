import { Button } from "@/components/ui/button"
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
                <div className="lg:min-h-[400px] mb-4">{artist.description.split('\n').map((line, index) => (
                      <p key={index} className="text-sm font-medium mb-3">
                          {line}
                          <br />
                      </p>
                  ))}
                </div>
                {artist.url && <a href={artist.url}>
                  <Button variant="outline" size="sm">
                      {artist.url}
                  </Button>
                </a>}
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
        description: 'Die lautten compagney BERLIN zählt zu den renommiertesten und innovativsten Ensembles für Alte Musik. 1984 in der DDR von Hans-Werner Apel und Wolfgang Katschner gegründet, prägt sie unter Katschners Leitung bis heute ein unverwechselbarer Klang, stilistische Vielseitigkeit und außergewöhnliche Programmatik. 2025 wird sie bereits zum zweiten Mal mit dem Opus Klassik als „Ensemble des Jahres“ geehrt.\nMit kreativen Konzertformaten und Kooperationen mit internationalen Künstler:innen und Institutionen erobert die lautten compagney Bühnen weltweit. Große Erfolge feierte sie etwa mit Monteverdis L’Orfeo an der Semperoper Dresden mit Rolando Villazón. Ihre interdisziplinäre Offenheit zeigt sich in zahlreichen Wort-Musik-Programmen mit Persönlichkeiten wie Corinna Harfouch oder Sophie Rois. Neben Konzertprojekten realisiert das Ensemble eigene Opernproduktionen, die historische Aufführungspraxis mit zeitgenössischer Theaterästhetik verbinden. Rund 100 Konzerte jährlich führen die lautten compagney zu bedeutenden Festivals und auf internationale Tourneen, u. a. nach China, Kolumbien und in die Mongolei. In Berlin kooperiert sie mit Partnern wie dem Humboldt Forum und der Neuköllner Oper und engagiert sich in Nachwuchsförderung und Musikvermittlung. Mehr als 60 CD-Einspielungen dokumentieren die künstlerische Bandbreite der lautten compagney, darunter die preisgekrönten Alben "Timeless", "War and Peace" und "Dancing Queen".\nMit über 40 Jahren Erfahrung ist die lautten compagney eine lebendige Stimme der Alten Musik – traditionsbewusst, experimentierfreudig und immer im Dialog zwischen Vergangenheit und Gegenwart.',
        url: 'https://www.lauttencompagney.de/',
    },
    {
        name: 'Vokalconsort des Berliner Mädchenchores',
        instrument: 'Chor',
        image: 'artists/KVC.png',
        description: 'Das Vokalconsort ist der „junge“ Frauenkammerchor des Berliner Mädchenchores. Gegründet 2015 auf Initiative ehemaliger Konzertchormädchen, besteht das Ensemble heute kontinuierlich aus ca. 30 aktiven Sängerinnen unter der Leitung der Dirigentin und freischaffenden Komponistin Sabine Wüsthoff.\n Das musikalische Programm umfasst mehrstimmige Literatur für gleiche Stimmen von der Renaissance bis zur Moderne. Gesungen werden Volkslieder, weltliche und geistliche Werke. Die Sängerinnen konzertieren a cappella, mit Klavierbegleitung, Kammerensembles und Orchestern, z. B. mit dem Landesjugendorchester, dem Jungen Orchester der FU Berlin, der Jungen Sinfonie Berlin und dem Schöneberger Kammerorchester.\n Das Vokalconsort war schon in der Berliner Philharmonie, im Konzerthaus Berlin, der Französischen Friedrichstadtkirche, der Kaiser-Wilhelm-Gedächtniskirche, in der Philharmonie Stettin, der Nikolaikirche Potsdam, dem Dom in Brandenburg, und weiteren bekannten Kirchen und Konzertsälen zu hören. Konzertreisen führten das Ensemble bisher nach Japan und Südchina. 2021 wurde es mit einem OPUS KLASSIK ausgezeichnet, außerdem errang es mehrfach erste Preise bei Wettbewerben, so u. a. 2018 und 2023 beim Deutschen Chorwettbewerb.\n',
        url: 'https://www.berlinermaedchenchor.de',
    },
    {
        name: 'Concerto Festante Wannsee',
        instrument: 'Ensemble',
        image: 'artists/Concerto_Festante_Wannsee.png',
        description: "Concerto Festante Wannsee ist das eigens für das Musikfest Wannsee neu gegründete Ensemble, welches im Rahmen des diesjährigen Festivals seine Premiere feiert.\n Das Ensemble vereint eine Gruppe ausgewählter Sängerinnen und Sänger aus ganz Deutschland, die sowohl solistisch national und international gefragt sind als auch vielfältige Ensembleerfahrung mitbringen. Beim Abschlusskonzert des Musikfest Wannsee wird das Concerto Festante Wannsee erstmalig gemeinsam auftreten und ein anspruchsvolles, exklusives Programm mit Werken von Barock bis Romantik zum Thema „Panta rhei – alles fließt (und nichts bleibt)“ musizieren.\n Die Gründung des Ensembles ermöglicht nicht nur musikalische Begegnungen auf höchstem Niveau, sondern setzt auch ein starkes Zeichen für kreative Zusammenarbeit im Rahmen des Festivals.",
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
      name: 'Sabine Wüsthoff',
      instrument: 'Chorleiterin',
      image: 'artists/Sabine_Wuesthoff.png',
      description: 'Sabine Wüsthoff stammt aus einer Berliner Musikerfamilie. Nach einer Ausbildung zur Sport- und Gymnastiklehrerin studierte sie Schulmusik und Geschichte an der Hochschule für Musik und Theater und Universität in Hannover. Später spezialisierte sie sich in Meisterkursen auf Chor-und Orchesterleitung. Bis heute arbeitet sie als freischaffende Dirigentin, Komponistin und Musikpädagogin. Sie leitete bis 2023 die Chorschule Berliner Mädchenchor; der Konzertchor und das Vokalconsort des BMC sind vielfach national und international preisgekrönt ist. Sabine Wüsthoff ist eine gefragte Dozentin für die Themenschwerpunkte Körperarbeit mit DirigentInnen und Kreative Chorprobenmethodik und ist international als Jurorin bei Chorwettbewerben tätig. Der Chorverband Berlin e.V. ehrte sie 2015  mit der Geschwister-Mendelssohn-Medaille für ihre Verdienste um das Berliner Chorleben, und 2024 verlieh ihr der Bundespräsident Frank Walter Steinmeier das Bundesverdienstkreuz am Bande.',
    },
    {
      name: 'Christian Pohlers',
      instrument: 'Tenor',
      image: 'artists/Christian_Pohlers.png',
      description: 'Christian Pohlers wurde 1999 in den Thomanerchor Leipzig aufgenommen. Dort übernahm er unter Thomaskantor Georg Christoph Biller regelmäßig chorsolistische Aufgaben. Ab 2014 nahm er an der Hochschule für Musik und Theater Felix Mendelssohn Bartholdy in Leipzig ein Gesangsstudium bei KS Prof. Regina Werner-Dietrich auf. Ab 2017 setzte er seine Studien im Rahmen eines Masterstudienganges bei Prof. Berthold Schmid fort und schloss sie 2020 mit einem Master of Music ab. Wichtige musikalische Impulse erhielt er in Meisterkursen bei Prof. Rudolph Piernay, KS Prof. Peter Schreier und Prof. Phillip Moll. Er war bis 2023 Mitglied des 2006 gegründeten Vokalquintetts Ensemble Nobiles.\nSeit frühester Kindheit permanent mit den großen Oratorien Bachs und Mendelsohns und ihren verschiedenen Interpretationen in Berührung, entwickelte Christian Pohlers in den vergangenen Jahren zunehmend einen eigenen Zugang zur oratorischen Gattung, der sich primär durch seine packende Erzählweise ausdrückt. Klang, Sprache und Stimme werden vollends in den Dienst der Dramaturgie der jeweiligen Geschichte gestellt, was bisweilen auch opernhafte Elemente beinhalten kann.\nErfolgreiche musikalische Zusammenarbeit verbindet ihn u.a. mit Wolfgang Katschner, Dorothee Oberlinger, Thomaskantor Andreas Reize, Kai-Uwe Jirka, Unversitätsmusikdirektor David Timm, Thomaskantor i.R. Gotthold Schwarz, Nils Jensen, Gerd Amelung und Prof. Peter Kopp.',
    },
    {
      name: 'Kevin Klötzer',
      instrument: 'Bariton',
      image: 'artists/Kevin_Kloetzer.png',
      description: 'Der in Zwickau aufgewachsene Bariton studierte von 2011-2015 Gesang in Dresden an der Hochschule für Musik Carl Maria von Weber bei Prof. Christiane Bach-Röhr. Im Anschluss erhielt er ein Engagement im Staatsopernchor der Semperoper Dresden und ist desweiteren auch als Solist im Konzert- und Oratorienbereich tätig.'
    },
    {
      name: 'Paula Nilse',
      instrument: 'Mezzosopranistin',
      image: 'artists/Paula_Nilse.png',
      description: 'Paula Nilse ist Mezzosopranistin und vor allem als Lied- und Oratorieninterpretin aktiv. Sie konzertiert mit renommierten Ensembles, darunter der Rundfunkchor Berlin, der Dresdner Kammerchor und weitere. Sie absolvierte ein Studium der Schulmusik und Französisch, und ist als Musikpädagogin und Chorleiterin tätig. Derzeit studiert sie Gesang an der Universität der Künste Berlin.',
    },
    {
      name: 'Shimon Yoshida',
      instrument: 'Tenor',
      image: 'artists/Shimon_Yoshida.png',
      description: 'Shimon Yoshida wurde 1992 in Nagoya (Japan) geboren und absolvierte sein Masterstudium (Konzertgesang) an der Hochschule für Musik und Theater München bei Prof. Sylvia Greenberg.\n2022 hat Shimon Yoshida unter Leitung von René Jacobs Bachs h-Moll-Messe als Einspringer des Tenorsolisten gesungen. Oktober 2023 hat er für erkrankten Tenorsolist kurzfristig die Partie von Rossinis Stabat Mater übernommen (Philharmonie Berlin, Großersaal).\nBei dem renommierten Bach Collegium Japan unter der Leitung von Masaaki Suzuki ist er seit 2022 regelmäßiger Gast. April 2024 gab er seinen US-Debüt als Solist (Bachs h-Moll Messe) in Boston.\nSeit März 2020 ist Shimon Yoshida festes Mitglied bei RIAS Kammerchor Berlin.\nMit seiner Familie wohnt er in Berlin.',
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
    },
    {
        name: 'Majella Münz',
        instrument: 'Cellistin',
        image: 'artists/Majella_Muenz.png',
        description: "Majella Münz ist als Cellistin, Barockcellistin und Gambistin in den verschiedensten musikalischen Sprachen Zuhause: von den Tänzen der Renaissancezeit über die Symphonik der Klassik bis hin zu zeitgenössischen Klangexplorationen. Nachdem sie ihr Studium auf dem modernen Cello bei Julian Steckel, Thomas Kaufmann und Valentin Radutiu absolviert hatte, folgte sie ihrer tiefen Faszination für die Alte Musik und die organischen Klangwelten historischer Instrumente und zog in die Niederlande, wo sie Unterricht auf dem Barockcello und der Gambe erhielt. Aktuell lebt sie wieder in Berlin und ist sehr glücklich darüber, in zahlreichen Formationen ihre Leidenschaft für musikalische Kommunikation ausleben zu können. Mit Illtupia verbindet sie Alte Musik mit Kunstformen der Gegenwart, welche bei Festivals wie FELIX! urban der Kölner Philharmonie zur Aufführung kamen. Mit der Himmelhofkappelle gewann sie den 2. Preis beim Berliner Bachwettbewerb 2021 und war mit I Fiori Selvatici im Finale des digitalen Biagio-Marini- Wettbewerbs 2020. Außerdem ist sie Gründungsmitglied und Teil der künstlerischen Leitung des preisgekrönten Kammerorchesters ensemble reflektor, mit welchem sie regelmäßig in eigenen Reihen sowie bei den Festspielen MV, Schleswig-Holstein Musikfestival, den Sommerlichen Musiktagen Hitzacker, der Elbphilharmonie, dem Konzerthaus Berlin, der Alten Oper Frankfurt und dem hauseigenen Festival in Lüneburg, ultraBACH auftritt. Als gefragte Barockcellistin und Gambistin spielt sie mit Ensembles wie der lautten compagney, Akademie für Alte Musik Berlin, Holland Baroque, Concerto Copenhagen, Orchestra of the 18th Century (NL), {oh!} Orkiestra, Gaechinger Cantorey und im Rahmen dessen auf europäischen Podien und Festivals, wie dem Resonanzen Festival Wien, dem London International Festival of Early Music, dem Early Music Festival Utrecht, dem MA Festival Brügge oder dem Oranjewoud Festival (NL). Majella studierte bei Lea Rahel Bader, Thomas Pitt und Jan Freiheit in Berlin und bei Lucia Swarts und Mieneke van der Velden in Den Haag. Weitere wichtige Impulse erhielt sie von Christoph Huntgeburth, Kate Clark, Hidemi Suzuki, Kristin v. d. Goltz, Irene Klein und im Rahmen der Ensembleakademie des Freiburger Barockorchesters, des experience scheme des Orchestra of the Age of Enlightenment London sowie der MA Academy des B'Rock'Orchestra und Il Gardellino.\nMit viel Freude experimentiert sie außerdem mit den Möglichkeiten der Improvisation und Stimme.",
    },
    {
        name: 'Mirlan Kasymaliev',
        instrument: 'Organist, Pianist',
        image: 'artists/Mirlan_Kasymaliev.png',
        description: "Mirlan Kasymaliev ist in Kyrgyzstan geboren, wo er 1980 seine musikalische Ausbildung im Fach Klavier begann. Nach einem erfolgreichen Abschluss setzte er seine Studien in den Fächern Klavier und Orgel am Staatlichen Konservatorium in Kazan/Russland fort. Beide Fächer schloss er 1997/98 mit dem Konzertdiplom mit Auszeichnung ab.\n Im Jahr 1996 gewann er beim 3. Internationalen Orgelwettbewerb in Kislowodsk/Russland ein Stipendium der Alfred-Sittard-Stiftung für ein Orgelstudium an der Hochschule der Künste (heute UdK) in Berlin. Bei dieser sowie der „Käthe Dorsch – Stiftung“ war er in den Jahren 1998-2002 Stipendiat.\n Er absolvierte als Schüler von Prof. Leo van Doeselaar und Dozent Erwin Wiersinga im Juli 2004 das Konzertexamen mit Auszeichnung.\n Seit April 2025 ist er Kirchenmusiker in der Evangelischen Kirchengemeinde Wannsee (Kirche am Stölpchensee und Andreaskirche) und der Kirche St. Peter und Paul auf Nikolskoe. Außerdem ist er als Konzertorganist und Konzertpianist tätig, ist Mitbegründer des Musikprojekts „Die Jüdische Musikreihe für Liebhaber & Neugierige“ ('KOL - Jüdische Musik beleben und erleben e.V.'), wirkt europaweit bei verschiedenen Ensembles mit und gibt Solokonzerte.",
    },/*
    {
        name: 'Sapna Joshi',
        instrument: 'Pfarrerin',
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
