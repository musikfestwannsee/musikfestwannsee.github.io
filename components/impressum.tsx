import Link from "next/link"

export function Impressum() {
  return (
    <section id="impressum" className="py-12 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">Impressum</h2>
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Musikfest Wannsee e.V.
            <br />
            Am Großen Wannsee 56-58
            <br />
            14109 Berlin
          </p>

          <h3>Vertreten durch</h3>
          <p>
            Dr. Musikliebhaber
            <br />
            Vorstandsvorsitzender
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 (0) 30 123456789
            <br />
            E-Mail: info@musikfest-wannsee.de
          </p>

          <h3>Registereintrag</h3>
          <p>
            Eintragung im Vereinsregister.
            <br />
            Registergericht: Amtsgericht Berlin-Charlottenburg
            <br />
            Registernummer: VR 12345 B
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Dr. Musikliebhaber
            <br />
            Am Großen Wannsee 56-58
            <br />
            14109 Berlin
          </p>

          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              className="text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
            >
              https://ec.europa.eu/consumers/odr/
            </Link>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </div>
    </section>
  )
}
