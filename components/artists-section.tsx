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
        description: 'Die lautten compagney BERLIN zählt zu den renommiertesten und innovativsten Ensembles für Alte Musik. ' +
            '1984 in der DDR von Hans-Werner Apel und Wolfgang Katschner gegründet, prägt sie unter Katschners Leitung bis ' +
            'heute ein unverwechselbarer Klang, stilistische Vielseitigkeit und außergewöhnliche Programmatik. 2025 wurde sie ' +
            'bereits zum zweiten Mal mit dem Opus Klassik als „Ensemble des Jahres“ geehrt.\nMit kreativen Konzertformaten ' +
            'und Kooperationen mit internationalen Künstler:innen und Institutionen erobert die lautten compagney Bühnen ' +
            'weltweit. Große Erfolge feierte sie etwa mit Monteverdis L’Orfeo an der Semperoper Dresden mit Rolando Villazón. ' +
            'Ihre interdisziplinäre Offenheit zeigt sich in zahlreichen Wort-Musik-Programmen mit Persönlichkeiten wie ' +
            'Corinna Harfouch oder Sophie Rois. Neben Konzertprojekten realisiert das Ensemble eigene Opernproduktionen, ' +
            'die historische Aufführungspraxis mit zeitgenössischer Theaterästhetik verbinden. Rund 100 Konzerte jährlich ' +
            'führen die lautten compagney zu bedeutenden Festivals und auf internationale Tourneen, u. a. nach China, ' +
            'Kolumbien und in die Mongolei. In Berlin kooperiert sie mit Partnern wie dem Humboldt Forum und der ' +
            'Neuköllner Oper und engagiert sich in Nachwuchsförderung und Musikvermittlung. Mehr als 60 CD-Einspielungen ' +
            'dokumentieren die künstlerische Bandbreite der lautten compagney, darunter die preisgekrönten Alben ' +
            '"Timeless", "War and Peace" und "Dancing Queen".\nMit über 40 Jahren Erfahrung ist die lautten compagney ' +
            'eine lebendige Stimme der Alten Musik – traditionsbewusst, experimentierfreudig und immer im Dialog zwischen ' +
            'Vergangenheit und Gegenwart.',
        url: 'https://www.lauttencompagney.de/',
    },/*
    {
        name: 'Vokalconsort des Berliner Mädchenchores',
        instrument: 'Chor',
        image: 'artists/KVC.png',
        description: 'Das Vokalconsort ist der „junge“ Frauenkammerchor des Berliner Mädchenchores. Gegründet 2015 auf Initiative ehemaliger Konzertchormädchen, besteht das Ensemble heute kontinuierlich aus ca. 30 aktiven Sängerinnen unter der Leitung der Dirigentin und freischaffenden Komponistin Sabine Wüsthoff.\n Das musikalische Programm umfasst mehrstimmige Literatur für gleiche Stimmen von der Renaissance bis zur Moderne. Gesungen werden Volkslieder, weltliche und geistliche Werke. Die Sängerinnen konzertieren a cappella, mit Klavierbegleitung, Kammerensembles und Orchestern, z. B. mit dem Landesjugendorchester, dem Jungen Orchester der FU Berlin, der Jungen Sinfonie Berlin und dem Schöneberger Kammerorchester.\n Das Vokalconsort war schon in der Berliner Philharmonie, im Konzerthaus Berlin, der Französischen Friedrichstadtkirche, der Kaiser-Wilhelm-Gedächtniskirche, in der Philharmonie Stettin, der Nikolaikirche Potsdam, dem Dom in Brandenburg, und weiteren bekannten Kirchen und Konzertsälen zu hören. Konzertreisen führten das Ensemble bisher nach Japan und Südchina. 2021 wurde es mit einem OPUS KLASSIK ausgezeichnet, außerdem errang es mehrfach erste Preise bei Wettbewerben, so u. a. 2018 und 2023 beim Deutschen Chorwettbewerb.\n',
        url: 'https://www.berlinermaedchenchor.de',
    },*/
    {
        name: 'Concerto Festante Wannsee',
        instrument: 'Ensemble',
        image: 'artists/Concerto_Festante_Wannsee.png',
        description: "Concerto Festante Wannsee ist das eigens für das Musikfest Wannsee neu gegründete Ensemble, welches im " +
            "Rahmen des Festivals im vergangenen Jahr seine Premiere feierte mit Werken von Barock bis Romantik zum Thema „Panta " +
            "rhei - alles fließt (und nichts bleibt)“ begeisterte.\n Das Ensemble vereint eine Gruppe ausgewählter " +
            "Sängerinnen und Sänger aus ganz Deutschland, die sowohl solistisch national und international gefragt sind als " +
            "auch vielfältige Ensembleerfahrung mitbringen.\n " +
            "Die Gründung des Ensembles ermöglicht nicht nur musikalische Begegnungen auf höchstem Niveau, sondern setzt auch " +
            "ein starkes Zeichen für kreative Zusammenarbeit im Rahmen des Festivals.",
    },
  ];
const artists_portrait = [
    {
        name: 'Henrike Leißner',
        instrument: 'Musikwissenschaftlerin und Redakteurin',
        image: 'artists/Henrike_Leissner.png',
        description: 'Henrike Leißner ist Musikwissenschaftlerin, Beitragsautorin, Moderatorin und Musikredakteurin bei radio3 (rbb) und Opernkritikerin bei mdr ' +
            'Klassik und mdr Kultur. Sie hat unter anderem zu den Themen Komponieren für den Rundfunk in den 1920er Jahren, Musik der Neuen Sachlichkeit und ' +
            'Aufführungspraktiken und -traditionen von Neuer Musik und von Musik des Barock (insb. Tasteninstrumente und Gesang) geforscht. Seit 2025 moderiert ' +
            'sie regelmäßig die Sendung „Auftakt“ auf radio3 und die radio3 Listening Lounge. ',
    },
    {
        name: 'Sabine Techritz',
        instrument: 'Cellistin',
        image: 'artists/Sabine_Techritz.png',
        description: 'Sabine Techritz, geboren 1973 in Ost-Berlin, begann im Alter von acht Jahren Cello zu spielen. Nach '+
            'langjährigem Unterricht an der „Spezialschule für Musik Hanns Eisler“ Berlin bei Sabine Andert setzte '+
            'sie ihre Ausbildung an der Hochschule für Musik Hanns Eisler Berlin bei Prof. Michael Sanderling fort.\n'+
            'Bereits während des Studiums sammelte sie prägende Orchestererfahrung als Substitutin der Staatskapelle '+
            'Berlin. Von 2003 bis 2007 war sie Solo-Cellistin des neu gegründeten Neuen Sinfonieorchesters Berlin '+
            'und wirkte zudem im E.T.A.-Hoffmann-Kammerorchester sowie als Vertretung im Filmorchester '+
            'Babelsberg mit. Als freiberufliche Musikerin ist sie in verschiedenen Ensembles aktiv, darunter im '+
            'Erichson-Quartett (mit Yoshiaki Shibata) und im Ensemble für neue Klänge. Seit 2007 unterrichtet sie an '+
            'Musikschulen in Berlin und dem Umland und begleitet Kinder wie Erwachsene auf ihrem musikalischen Weg.',
    },
    {
        name: 'Anette Lösch',
        instrument: 'Sopranistin',
        image: 'artists/Anette_Loesch.png',
        description: 'Ihre musikalische Ausbildung erfolgte in verschiedenen Vokalensembles und bei renommierten Gesangspädagog*innen ' +
            'in Schweinfurt, Würzburg und Berlin. Konzerte und Liederabende gestaltete sie u. a. am Berliner Dom und beim Internationalen Bodenseefestival.\n'+
            'Im Bereich der Ensemble- und Chorarbeit konnte sie beim Collegium Vocale Gent unter der Leitung von Philippe Herreweghe weitere Erfahrungen sammeln. ' +
            'Mit dem Vocalconsort Berlin trat sie in mehreren Opernproduktionen an der Staatsoper Berlin auf, u. a. in Purcells Dido unter der Leitung von ' +
            'Attilio Cremonesi und Monteverdis Orfeo mit René Jacobs.',
    },
    {
        name: 'Mi-Young Kim',
        instrument: 'Sopranistin',
        image: 'artists/Mi-Young_Kim.png',
        description: 'Die koreanische Sopranistin Mi-Young Kim studierte Gesang an der Kyungwon Universität in Korea bei Prof. Sang Young Lee, ' +
            'Operngesang an der Musikhochschule Hanns Eisler in Berlin bei Prof. Renate Faltin und bei Prof. Julia Varady. Während ihrer ' +
            'Studienzeit hatte sie als lyrischer Koloratursopran mehrere Opernauftritte und ergänzte ihr Repertoire und ihre musikalischen ' +
            'Ausdrucksmöglichkeiten durch den Besuch von Meisterkursen bei Prof. Dr. Dietrich Fischer-Dieskau, Prof. Julia Varady und bei ' +
            'Prof. Mirella Freni. Seit 2010 ist Mi-Young Kim festes Mitglied im RIAS Kammerchor Berlin und singt ein umfangreiches Repertoire ' +
            '– von Barock- bis zu zeitgenössischer Musik.\n'+
            'In zahlreichen Konzerten und Aufnahmen unter namhaften Dirigenten wie Iván Fischer, René Jakobs, Rinaldo Alessandrini, ' +
            'Hans-Christoph Rademann, Alexander Liebreich, Florian Helgath, Pablo Heras-Casado und Justin Doyle trat sie als Solistin ' +
            'und Ensemblemitglied erfolgreich auf. Sopran Mi-Young Kim ist in Berlin und Umgebung aktiv solistisch zu hören.',
    },
    {
        name: 'Michelle Baum',
        instrument: 'Mezzosopranistin',
        image: 'artists/Michelle_Baum.png',
        description: 'Michelle Baum studiert - parallel zur Tätigkeit beim RIAS Kammerchor - Master Liedgestaltung an der Hochschule für Musik, ' +
            'Theater und Medien Hannover in der Gesangsklasse von Henryk Böhm und der Liedklasse von Jan Philip Schulze.\n' +
            'Bereits in ihrer Jugend beteiligte sie sich an Benefizkonzerten und spielte bei kleineren Opernproduktionen mit. ' +
            'Sie absolvierte die Schola und Akademie des Rundfunkchors Berlin. Nach der Akademie des RIAS Kammerchors Berlin begann sie dort ' +
            'ihre Probezeit als Mitglied mit der Saison 2025/26.\n' +
            'Sie bekam künstlerische Eindrücke durch Meisterkurse bei Ulrich Eisenlohr, Wolfram Rieger, Christoph Prégardien, Anne Sofie von Otter und Brigitte Fassbaender.',
    },
    {
        name: 'Susanne Langner',
        instrument: 'Mezzosopranistin',
        image: 'artists/Susanne_Langner.png',
        description: 'Susanne Langner musiziert(e) als Solistin mit Dirigenten wie H.-Ch. Rademann, H. Rilling und L. Güttler, mit ' +
        'Ensembles wie dem Freiburger Barockorchester oder der Akademie für Alte Musik Berlin, ' +
        'mit dem Kreuzchor Dresden unter den Kreuzkantoren R. Kreile und M. Lehmann oder dem ' +
        'Thomanerchor Leipzig unter den Thomaskantoren G. Ch. Biller, G. Schwarz und A. Reize ' +
        'ebenso wie als Ensemblesängerin im RIAS Kammerchor oder dem Ensemble amarcord.\n' +
        'Die gebürtige Dresdnerin studierte am Mozarteum Salzburg Gesang und absolvierte mit ' +
        'Auszeichnung. Sie war mehrfache Preisträgerin und Finalistin internationaler Wettbewerbe, ' +
        'unter anderem beim Bachwettbewerb Leipzig. ' +
        'Gemeinsam mit dem Leipziger Synagogalchor setzt sie sich für die Bewahrung und Belebung ' +
        'weltlicher und geistlicher jüdischer Musik ein. Diese Arbeit wurde unter L. Böhme 2016 mit ' +
        'dem Obermayer German Jewish History Award gewürdigt. ' +
        'Seit 2021 ist sie Direktoriumsmitglied der Neuen Bachgesellschaft, seit 2026 im Vorstand .',
    },
    {
        name: 'Jonathan de la Paz Zaens',
        instrument: 'Bassbariton',
        image: 'artists/Jonathan_de_la_Paz_Zaens.png',
        description: 'Jonathan de la Paz Zaens, Bassbariton, erhielt sein Bachelor´s Degree in Voice ' +
        '(Bakkalaureat), cum laude, an der University of the Philippines bei Prof. Andrea O. Veneracion.\n ' +
        '2000 schloss er sein Studium an der Universität der Künste Berlin bei Prof. Herbert Brauer ab.\n ' +
        'Er ist Preisträger des 7. Sylvia Geszty Internationalen Koloratur-Gesangswettbewerbs, ' +
        'Finalist beim 13. Internationalen Johann-Sebastian-Bach-Wettbewerb und beim ' +
        'Mendelssohn-Gesangswettbewerb.\n ' +
            'Am Ständetheater und an der Staatsoper Prag gastierte er in den Mozart-Rollen Leporello und ' +
        'Guglielmo. In Berlin führten ihn Verpflichtungen an die Neuköllner Oper, die Neue ' +
        'Opernbühne und die Kammeroper.\n ' +
            'Als Konzertsänger gestaltet er wiederholt die Basspartien der großen Oratorien Bachs sowie ' +
        'Mozarts, Händels, Haydns, Brahms´, Mendelssohns und Rossinis. ' +
        'Liederabende gab er in Deutschland, Italien, Schweden, Tschechien, Costa Rica, USA und in ' +
        'seiner Heimat.\n ' +
        'Er widmet sich auch der zeitgenössischen Musik, indem er u.a. bei den Salzburger Festspielen ' +
        'in der Uraufführung von Karl-Heinz Stockhausens „Düfte-Zeichen“ sang. Bei der ' +
        'Uraufführung von Stockhausens letztem Opus KLANG übernahm er das Solostück für ' +
        'Bartion ORVONTON bei der Kölner Triennale. Darüber hinaus führte er andere Werke ' +
        'Stockhausens sowie Sciarinnos, Zenders, Rihms, Eötvös und Piazollas bei den Berliner ' +
        'Festspielen, den Schwetzinger Festspielen, der Biennale Venedig, dem Agora Festival in ' +
        'Paris, dem Warschauer Herbst sowie im Koblenzer Stadttheater und der Zeitgenössischen ' +
        'Oper Berlin auf.',
    },
    {
        name: 'Manuel Nickert',
        instrument: 'Bariton',
        image: 'artists/Manuel_Nickert.png',
        description: 'Der Bariton und Chorleiter Manuel Nickert wurde in Berlin geboren. Er studierte Gesang bei Prof. Renate Faltin und Prof. Thomas Quasthoff an ' +
        'der Hochschule für Musik Hanns Eisler Berlin und Chorleitung an der University of Birmingham in England bei Prof. Simon Halsey. ' +
        'Seit 2014 ist er vor allem als Konzertsänger und im Bereich der Alten Musik sehr aktiv und singt regelmäßig u.a. mit der lautten compagney Berlin, ' +
        'der Cappella Saggitariana Dresden oder dem Ensemble „Les Temperamens Variations“ in Paris bedeutende Werke der Renaissance und des Barock. ' +
        'Außerdem interpretiert er leidenschaftlich gern Musik der Moderne: die „Aventures" und „Nouvelles Aventures" von György Ligeti mit dem ' +
        'Ensemble ilinx, mehrere Uraufführungen der „Berliner Atonale” an der Staatsoper Berlin oder zuletzt „Les Noces" von Igor Stravinsky und die „Faustkantate" von Alfred Schnittke mit Cantus Domus. ' +
        'Er war mit Werken von Felix Mendelssohn und Lili Boulanger bereits als Solist mit dem Rundfunk-Sinfonieorchester Berlin und den Bielefelder Symphonikern zu hören ' +
        'und gab im April 2026 sein Solodebüt mit dem Konzerthausorchester Berlin mit der h-Moll-Messe von Johann Sebastian Bach.',
    },
    {
        name: 'Thaddäus Böhm',
        instrument: 'Tenor',
        image: 'artists/Thaddaeus_Boehm.png',
        description: 'Der Tenor Thaddäus Böhm ist zur Zeit Mitglied des RIAS Kammerchors Berlin. Zuvor sammelte er wertvolle ' +
            'Ensembleerfahrungen bei Vox Luminis und der Gächinger Cantorey. Meisterkurse bei Georg Poplutz und Patrick Grahl bereicherten ' +
            'sein musikalisches Schaffen mit neuen Impulsen. Als Solist trat er bereits in renommierten Häusern wie St. Nikolai am ' +
            'Klosterstern Hamburg, dem Herkulessaal München und der Marktkirche Karlsruheauf. Sein Gesangstudium absolvierte er bei ' +
            'Prof. Monika Köhler in Halle (Saale), wo er bereits während des Studiums als Akademist beim RIAS Kammerchor Berlin wirkte.',
    },
    /*
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
    },*/
    {
      name: 'Shimon Yoshida',
      instrument: 'Tenor',
      image: 'artists/Shimon_Yoshida.png',
      description: 'Shimon Yoshida wurde 1992 in Nagoya (Japan) geboren und absolvierte sein Masterstudium (Konzertgesang) ' +
          'an der Hochschule für Musik und Theater München bei Prof. Sylvia Greenberg.\n' +
          '2022 hat Shimon Yoshida unter Leitung von René Jacobs Bachs h-Moll-Messe als Einspringer des Tenorsolisten gesungen. ' +
          'Im Oktober 2023 übernahm er für den erkrankten Tenorsolisten kurzfristig die Partie von Rossinis Stabat Mater (Philharmonie ' +
          'Berlin, Großer Saal).\n' +
          'Bei dem renommierten Bach Collegium Japan unter der Leitung von Masaaki Suzuki ist er seit 2022 regelmäßiger Gast. ' +
          '2024 gab er in Boston sein US-Debüt als Solist (Bachs h-Moll Messe).',
    },
    {
      name: 'Joachim Buhrmann',
      instrument: 'Tenor',
      image: 'artists/Joachim_Buhrmann.png',
      description: 'Joachim Buhrmann studierte zunächst Kirchenmusik in der Orgelklasse von Gerhard Gnann,' +
        'danach Gesang bei Prof. Melinda Paulsen sowie Dirigieren bei Prof. Dr. Jürgen Blume in Mainz.' +
            'Bereits während der Studienzeit wurde er auf die Kantorenstelle der Peterskirche Mainz ' +
        'berufen. Mit den dortigen Ensembles führte er u.a. alle Mozart-Messen, das „Requiem“ von G. ' +
        'Fauré, Bachs „Johannespassion“ sowie den „Paulus“ von F. Mendelssohn Bartholdy auf.\n' +
        'Neben der regen Tätigkeit als Sänger in verschiedenen Rundfunkchören (Bayrischer, ' +
        'Norddeutscher und Westdeutscher Rundfunk), wo er mit Dirigenten wie R. Muti, M. Gielen, M. ' +
        'Viotti, J. Levine, R. Hickox, L. Maazel, C. Thielemann u.v.a. zusammenarbeitete, widmete sich ' +
        'der Tenor auch stark der zeitgenössischen Musik. So war er als Solist u.a. mit den ' +
        'Bamberger Symphonikern unter J. Nott beim Edinburgh Festival und nahm bei einem großen ' +
        'Komponistenportrait H. Lachenmanns mit H. Zender und dem Klangforum Wien teil. Mehr als 15 ' +
        'Jahre prägte er den Werdegang des „Klangforum Heidelberg“ unter Prof. W. Nußbaum mit ' +
        'zahlreichen CD-Einspielungen entscheidend mit.\n' +
        'Mit dem Landesjugendchor Rheinland-Pfalz konnte Joachim Buhrmann zunächst sein ' +
        'dirigentisches Repertoire erweitern. So studierte er dort unzählige A-capella-Werke ein, leitete ' +
        'Proben zu Bizets „Carmen“ und bereitete den Chor für eine CD-Produktion mit Verdis ' +
        '„Requiem“ für J. Nelson vor.\n' +
        'Parallel gründete er das „Mundy-Ensemble“, welches sich explizit mit Musik des 16. ' +
        'Jahrhunderts beschäftigte.\n' +
        '2005 trat Joachim Buhrmann in eine Festanstellung als Tenor beim RIAS Kammerchor ein.\n' +
        'Im Rahmen der Forumkonzerte des RIAS Kammerchors dirigierte er erstmals 2017 ein ' +
        'spannendes Programm mit Werken von Mundy, Hosokawa, Vaughan Williams und Britten, 2019 ' +
        'eines mit Werken von Bach und Pärt. Die vielbeachteten Konzerte wurden von ' +
        'Deutschlandradio Kultur mitgeschnitten und live gesendet sowie in den Folgejahren in ' +
        'Benefizkonzerten und Veranstaltungen des deutschen Bundestages mehrfach aufgeführt.',
    },/*
    {
      name: 'Joohoon Shin',
      instrument: 'Tenor',
      image: 'artists/Joohoon_Shin.png',
      description: 'Joohoon Shin wurde in Incheon, (Südkrea) geboren. Zunächst nahm er ein Gesangsstudium am Royal Welsh College of Music in Cardiff auf und schloss seine Studien mit einem Diplom im Hauptfach Gesang an der Hochschule für Musik „Franz Liszt“ Weimar bei Gudrun Fischer ab.\nAls gefragter Solist und beliebter Interpret Bachscher Werke widmet er sich verschiedenen Konzertrepertoires und arbeitet mit namhaften Orchestern zusammen, darunter dem Rundfunk-Sinfonieorchester Berlin, dem Deutschen Symphonie-Orchester Berlin, dem Deutschen Kammerorchester Berlin, dem Neuen Kammerorchester Potsdam, der lauttencompagney BERLIN, L’arte del Mondo, Zwischenakt Berlin sowie mit vielen Chören und Kantoreien.\nSeit 2014 ist er festes Mitglied des Rundfunkchores Berlin, für den er auch regelmäßig Soloparts übernimmt. Er arbeitete schon mit so renommierten Dirigenten wie Sir Simon Rattle, Zubin Mehta, Daniel Barenboim, Kirill Petrenko, Riccardo Chailly, Christian Thielemann, Yannick Nezet-Seguin, Daniel Harding, Christoph Eschenbach und Kent Nagano arbeiten. Neben deutschlandweiten Auftritten führten ihn internationale Konzerttourneen nach New York, Paris, London, Budapest, Barcelona, Granada, Mailand, Amsterdam, Rotterdam, Brüssel, Luzern, Basel, Salzburg, Wien, Stettin, Hong Kong, Taiwan, Seoul, San Paulo, Buenos Aires und Santiago de Chile.\nZuletzt sang Joohoon Shin in Händels Oratorium „Solomon“ den Part des Dieners sowie in der Wagner-Oper „Tristan und Isolde“ die Rolle des Hirten mit dem Deutschen Symphonie Orchester Berlin unter Robin Ticciati in der Berliner Philharmonie.'
    },*/
    {
        name: 'Katharina Landl',
        instrument: 'Pianistin',
        image: 'artists/Katharina_Landl.png',
        description: 'Die aus Reith im Alpbachtal (Österreich) stammende Pianistin Katharina Landl studierte Klavier ' +
            'in Innsbruck und Freiburg. Anschließend spezialisierte sie sich in Berlin bei Wolfram Rieger im ' +
            'Fach Liedgestaltung.\n' +
            'Künstlerische Impulse erhielt sie im Rahmen von Meisterkursen bei renommierten ' +
            'Musikerpersönlichkeiten wie Thomas Quasthoff, Thomas Hampson, Justus Zeyen, Charles Spencer, ' +
            'Irwin Gage und Brigitte Fassbaender. Sie war Stipendiatin der Liedakademie des Heidelberger ' +
            'Frühlings unter der Leitung von Thomas Hampson.\n' +
            'Beim Internationalen Hugo-Wolf-Wettbewerb für Liedkunst gewann sie gemeinsam mit der ' +
            'Mezzosopranistin Diana Haller den 1. Preis.\n' +
            'Als gefragte Liedpianistin konzertiert sie international mit Sängerinnen und Sängern sowie in ' +
            'kammermusikalischen Besetzungen. Engagements führten sie unter anderem in den Palacio de ' +
            'Bellas Artes, zur Fundación Juan March, ins Magyar Zene Háza, in die Philharmonie Berlin sowie ' +
            'nach Schloss Neuhardenberg.',
    },
    {
        name: 'Thorsten Kaldewei',
        instrument: 'Pianist',
        image: 'artists/Thorsten_Kaldewei.png',
        description: 'Der Pianist Thorsten Kaldewei ist Dozent für Repertoire und Liedgestaltung ' +
            'an der Universität der Künste Berlin. Er studierte Klavier und Liedgestaltung an der ' +
            'Musikhochschule Köln, u.a. bei Prof. Michael Endres. Bei Rudolf Jansen und Irwin Gage ' +
            'erhielt er weitere wichtige Anregungen für sein Liedrepertoire.\n'+
        'Als Solorepetitor arbeitete er an den Staatsopern Hannover und Stuttgart sowie an der Komischen ' +
            'Oper Berlin. Darüber hinaus ist seine pianistische Tätigkeit vielfältig: Sie umfasst Konzerte mit Chören ' +
            'und Orchestern, wie z.B. dem RIAS Kammerchor, Kammermusik, Liederabende, Uraufführungen sowie ' +
            'Rundfunk- und CD-Produktionen.\n' +
            'Wichtige Stationen seiner künstlerischen Laufbahn waren u.a. ' +
            'Auftritte in der Tonhalle Düsseldorf, der Stuttgarter Liederhalle und in der Berliner ' +
            'Philharmonie. Weiterhin führten ihn Konzertreisen durch halb Europa sowie in die USA und nach ' +
            'Südkorea.\n' +
            'Im Rahmen seiner Konzerttätigkeit arbeitete er mit Sängern wie u.a. Ute Lemper, ' +
            'Gisela May, Dagmar Schellenberger und Julie Kaufmann.\n',
    },
    {
        name: 'Dr. Friederike Südmeyer',
        instrument: 'Kunsthistorikerin',
        image: 'artists/Friederike_suedmeyer.png',
        description: 'Die Kunsthistorikerin Friederike Südmeyer ist Kuratorin einer Stiftung, Vorsitzende des Wannseer Kulturverein, arbeitet als Kunstberaterin und vermittelt in Führungen, Vorträgen und Workshops ihren Blick auf die Welt der Kunst.\n',
    },/*
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
    },*/
    {
        name: 'Mirlan Kasymaliev',
        instrument: 'Organist, Pianist',
        image: 'artists/Mirlan_Kasymaliev.png',
        description: "Mirlan Kasymaliev ist in Kyrgyzstan geboren, wo er 1980 seine musikalische Ausbildung im Fach Klavier begann. Nach einem erfolgreichen Abschluss setzte er seine Studien in den Fächern Klavier und Orgel am Staatlichen Konservatorium in Kazan/Russland fort. Beide Fächer schloss er 1997/98 mit dem Konzertdiplom mit Auszeichnung ab.\n Im Jahr 1996 gewann er beim 3. Internationalen Orgelwettbewerb in Kislowodsk/Russland ein Stipendium der Alfred-Sittard-Stiftung für ein Orgelstudium an der Hochschule der Künste (heute UdK) in Berlin. Bei dieser sowie der „Käthe Dorsch – Stiftung“ war er in den Jahren 1998-2002 Stipendiat.\n Er absolvierte als Schüler von Prof. Leo van Doeselaar und Dozent Erwin Wiersinga im Juli 2004 das Konzertexamen mit Auszeichnung.\n Seit April 2025 ist er Kirchenmusiker in der Evangelischen Kirchengemeinde Wannsee (Kirche am Stölpchensee und Andreaskirche) und der Kirche St. Peter und Paul auf Nikolskoe. Außerdem ist er als Konzertorganist und Konzertpianist tätig, ist Mitbegründer des Musikprojekts „Die Jüdische Musikreihe für Liebhaber & Neugierige“ ('KOL - Jüdische Musik beleben und erleben e.V.'), wirkt europaweit bei verschiedenen Ensembles mit und gibt Solokonzerte.",
    },
    {
        name: 'Johanna Kaldewei',
        instrument: 'Sopranistin',
        image: 'artists/Johanna_Portrait.png',
        description: 'Die mehrfach ausgezeichnete Sopranistin Johanna Kaldewei hat durch ihr ' +
            'natürliches Timbre, ihre Strahlkraft und Wärme auf sich aufmerksam gemacht. Sie ' +
            'geht einer vielfältigen Konzerttätigkeit nach und ist auch im Opern- und Liedbereich ' +
            'tätig. Sie arbeitet mit Dirigenten wie u.a. Wolfgang Katschner, Ekkehard Klemm, Kai-' +
            'Uwe Jirka, Gregor Meyer, Christoph Spering, Achim Zimmermann, Thomaskantor ' +
            'Andreas Reize, Antonius Adamske und Yuval Weinberg. Engagements führten sie ' +
            'u.a. zu den Händelfestspielen Halle, wo sie 2025 in der Titelpartie der Oper &quot;Octavia&quot; ' +
            'von Reinhard Keiser zu erleben war, dem Bachfest Leipzig, dem mdr Musiksommer, ' +
            'an die Oper Leipzig, das Staatstheater Cottbus, in die Berliner Philharmonie, das ' +
            'Konzerthaus Berlin, das Leipziger Gewandhaus, die Elbphilharmonie Hamburg oder ' +
            'den Gasteig München sowie quer durch Deutschland und Europa. Im Sommer 2026 ' +
            'gibt sie ihr Rollendebüt als Anastasio in Händels Oper „Giustino“ und als Norina in ' +
            '„Don Pasquale“ von Gaetano Donizetti.\n' +
            'Johanna Kaldewei ist Gewinnerin des „PodiumJungerGesangsSolisten“ 2017 und ' +
            'Preisträgerin mehrerer internationaler Wettbewerbe wie dem Telemann-Wettbewerb. ' +
            'Außerdem ist sie die Initiatorin und Künstlerische Leiterin des Musikfest Wannsee.',
        url: 'https://www.johannakaldewei.com/'
    },
]
