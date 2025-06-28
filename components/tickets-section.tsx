import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function TicketsSection() {
  // Sample ticket options
  const ticketOptions = [
    {
      name: "Festival Pass",
      price: "€299",
      description: "Full access to all concerts and events for the entire festival duration",
      features: [
        "Access to all performances",
        "Reserved premium seating",
        "Festival program booklet",
        "Access to exclusive artist meet & greets",
        "Complimentary drinks at intermissions",
        "Festival merchandise package",
      ],
      popular: true,
    },
    {
      name: "Weekend Pass",
      price: "€149",
      description: "Access to all concerts and events during the weekend (Friday-Sunday)",
      features: [
        "Access to all weekend performances",
        "Reserved seating",
        "Festival program booklet",
        "Complimentary drink voucher",
      ],
      popular: false,
    },
    {
      name: "Day Pass",
      price: "€79",
      description: "Access to all concerts and events for a single day of your choice",
      features: ["Access to all performances on selected day", "General admission seating", "Festival program booklet"],
      popular: false,
    },
    {
      name: "Single Concert",
      price: "€39",
      description: "Access to a single concert of your choice",
      features: ["Access to selected performance", "General admission seating"],
      popular: false,
    },
  ]

  return (
    <section
      id="tickets"
      className="py-20 bg-gradient-to-b from-blue-50 to-teal-50 dark:from-slate-900 dark:to-teal-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Tickets & Pricing</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Secure your place at Musikfest Wannsee with our range of ticket options
          </p>
        </div>

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
      </div>
    </section>
  )
}
