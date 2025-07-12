import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function TicketsSection() {

  return (
    <section
      id="tickets"
      className="py-20 water-bg"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Tickets</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Auch in diesem Jahr ist der Eintritt frei.<br/>
            Um Anmeldung wird gebeten unter <br/><br/>
            <b>musikfest.wannsee@gmail.com</b><br/><br/>
            Wir freuen uns auf alle Zuhörer:innen!
          </p>
        </div>

      </div>
    </section>
  )
}

/*

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ticketOptions.map((ticket, index) => (
            <Card
              key={index}
              className={`border ${ticket.popular ? "border-teal-400 dark:border-teal-600" : "border-slate-200 dark:border-slate-700"} shadow-lg hover:shadow-xl transition-shadow`}
            >
              {ticket.popular && (
                <div className="bg-teal-600 text-white text-center py-1 text-sm font-medium">Most Popular</div>
              )}
              <CardHeader className={ticket.popular ? "bg-teal-50 dark:bg-teal-900/30" : ""}>
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white">{ticket.name}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">{ticket.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-800 dark:text-white">{ticket.price}</span>
                  <span className="text-slate-500 dark:text-slate-400"> per person</span>
                </div>
                <ul className="space-y-3">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full text-lg ${ticket.popular ? "bg-teal-600 hover:bg-teal-700" : "bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600"} text-white`}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Additional Information</h3>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>Concessions available for seniors (65+), students, and children under 12</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>Group discounts available for parties of 10 or more</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>Tickets can be purchased online, by phone, or at the festival box office</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>All tickets are transferable but non-refundable</span>
            </li>
          </ul>
        </div>
        */
