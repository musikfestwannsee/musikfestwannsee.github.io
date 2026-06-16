import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TicketsSection() {

  return (
    <section
      id="tickets"
      className="py-20 water-bg"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title centered">Tickets</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Eintritt frei. Platzreservierung empfohlen!<br/>
            Sichern Sie sich einen garantierten Sitzplatz. Anmeldungen unter</p><br/>
            <h2 className="md:text-3xl text-xl font-bold text-slate-700 mb-4">musikfest.wannsee@gmail.com</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Bitte alle Veranstaltungen angeben, die Sie besuchen wollen. Sie erhalten von uns eine
            Reservierungsbestätigung.<br/><br/><br/>
            Bitte haben Sie Verständnis dafür, dass wir Ihre Reservierung bis 15 Minuten vor
            Veranstaltungsbeginn aufrechterhalten können. Danach werden nicht eingenommene Plätze an
            andere Besucher:innen vergeben.<br/><br/><br/>
          </p>
          <h2 className="section-title centered">Spenden</h2>
          <p>
          Um das Musikfest Wannsee auf musikalisch höchstem Niveau auch in Zukunft nachhaltig und verlässlich stattfinden lassen zu können, benötigen wir Ihre Unterstützung.<br/><br/>
          </p>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden bg-beige-50 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 dark:bg-slate-800">
                <h2 className="text-xl font-display mb-2 handwritten-first-letter group-hover:opacity-0">Ev. Kirchenkreisverband Berlin Süd-West</h2>
                <h4 className="text-l text-sky-700 font-display mb-2 group-hover:opacity-0">Evangelische Bank eG, Kassel </h4>
                <div>
                  IBAN: DE85 5206 0410 3903 9663 99 <br/>
                  BIC: GENODEF1EK1 <br/>
                  Zweck: Musikfest <br/>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
}
