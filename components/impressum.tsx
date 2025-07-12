import Link from "next/link"

export function Impressum() {
  return (
    <section id="impressum" className="py-12 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">Impressum</h2>
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Johanna Kaldewei
            <br />
            Schuchardtweg 5
            <br />
            14109 Berlin
          </p>

          <h3>Kontakt</h3>
          <p>
            E-Mail: musikfestwannsee@gmail.de
          </p>
        </div>
      </div>
    </section>
  )
}
