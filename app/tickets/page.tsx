"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CreditCard, HelpCircle, Ticket } from "lucide-react"
import Link from "next/link"
import { WaterParallaxBackground, LightParallaxBackground } from "@/components/parallax-background"

// Sample ticket data
const ticketTypes = [
  {
    id: "festival-pass",
    name: "Festival Pass",
    description: "Full access to all concerts and events for the entire festival duration.",
    price: 299,
    benefits: [
      "Access to all concerts and performances",
      "Priority seating at main events",
      "Access to exclusive receptions",
      "Festival program book",
      "Commemorative festival gift",
    ],
  },
  {
    id: "weekend-pass",
    name: "Weekend Pass",
    description: "Access to all concerts and events on Friday, Saturday, and Sunday.",
    price: 199,
    benefits: ["Access to all weekend concerts and performances", "Standard seating", "Festival program book"],
  },
  {
    id: "day-pass",
    name: "Day Pass",
    description: "Access to all concerts and events on a single day of your choice.",
    price: 89,
    benefits: ["Access to all concerts on one day", "Standard seating", "Digital program access"],
  },
  {
    id: "single-concert",
    name: "Single Concert Ticket",
    description: "Access to a specific concert of your choice.",
    price: 39,
    benefits: ["Access to one specific concert", "Standard seating"],
  },
]

// Sample concert data for single tickets
const concerts = [
  { id: "c1", name: "Opening Ceremony - Berlin Philharmonic", date: "June 15, 19:00", venue: "Main Stage" },
  { id: "c2", name: "Chamber Music Morning", date: "June 16, 10:00", venue: "Historic Villa" },
  { id: "c3", name: "Contemporary Compositions", date: "June 16, 14:00", venue: "Modern Hall" },
  { id: "c4", name: "Evening Concert - Vienna String Quartet", date: "June 16, 19:00", venue: "Main Stage" },
  { id: "c5", name: "Baroque Breakfast", date: "June 17, 09:30", venue: "Garden Terrace" },
  { id: "c6", name: "Jazz by the Lake", date: "June 17, 15:00", venue: "Lakeside Stage" },
  { id: "c7", name: "Opera Highlights", date: "June 17, 19:30", venue: "Main Stage" },
  { id: "c8", name: "Children's Concert", date: "June 18, 11:00", venue: "Community Hall" },
  { id: "c9", name: "Piano Recital - Maria Schmidt", date: "June 18, 19:00", venue: "Historic Villa" },
  { id: "c10", name: "Folk Traditions", date: "June 19, 12:00", venue: "Garden Stage" },
  { id: "c11", name: "String Orchestra", date: "June 19, 16:00", venue: "Main Stage" },
  { id: "c12", name: "Contemporary Dance & Music", date: "June 19, 20:00", venue: "Modern Hall" },
  { id: "c13", name: "Choral Concert", date: "June 20, 11:00", venue: "Historic Church" },
  { id: "c14", name: "Closing Symphony - Beethoven's 9th", date: "June 20, 18:00", venue: "Main Stage" },
]

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedConcert, setSelectedConcert] = useState<string>("")
  const [daySelection, setDaySelection] = useState<string>("june-15")

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTicket(ticketId)
    // Reset concert selection if not selecting single concert
    if (ticketId !== "single-concert") {
      setSelectedConcert("")
    }
  }

  const calculateTotal = () => {
    if (!selectedTicket) return 0
    const ticket = ticketTypes.find((t) => t.id === selectedTicket)
    return ticket ? ticket.price * quantity : 0
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Festival Tickets</h1>
          <p className="text-xl max-w-3xl">
            Secure your place at Musikfest Wannsee 2025. Choose from a variety of ticket options to suit your schedule
            and preferences.
          </p>
        </div>
      </section>

      {/* Ticket Selection */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Select Your Tickets</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <RadioGroup value={selectedTicket || ""} onValueChange={handleTicketSelect}>
                  {ticketTypes.map((ticket) => (
                    <div key={ticket.id} className="flex">
                      <RadioGroupItem value={ticket.id} id={ticket.id} className="mt-4" />
                      <Label htmlFor={ticket.id} className="flex-1 ml-2">
                        <Card
                          className={`overflow-hidden transition-all ${selectedTicket === ticket.id ? "ring-2 ring-primary" : "hover:shadow-md"}`}
                        >
                          <CardHeader>
                            <CardTitle className="text-2xl flex justify-between">
                              <span>{ticket.name}</span>
                              <span className="text-primary">€{ticket.price}</span>
                            </CardTitle>
                            <CardDescription className="text-base">{ticket.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-semibold text-lg mb-2">Includes:</h4>
                            <ul className="space-y-1">
                              {ticket.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {selectedTicket === "single-concert" && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Select Concert</h3>
                    <Select value={selectedConcert} onValueChange={setSelectedConcert}>
                      <SelectTrigger className="w-full text-lg">
                        <SelectValue placeholder="Choose a concert" />
                      </SelectTrigger>
                      <SelectContent>
                        {concerts.map((concert) => (
                          <SelectItem key={concert.id} value={concert.id} className="text-base">
                            {concert.name} - {concert.date}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {selectedTicket === "day-pass" && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Select Day</h3>
                    <RadioGroup value={daySelection} onValueChange={setDaySelection}>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="june-15" id="june-15" />
                          <Label htmlFor="june-15">June 15 (Monday)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="june-16" id="june-16" />
                          <Label htmlFor="june-16">June 16 (Tuesday)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="june-17" id="june-17" />
                          <Label htmlFor="june-17">June 17 (Wednesday)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="june-18" id="june-18" />
                          <Label htmlFor="june-18">June 18 (Thursday)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="june-19" id="june-19" />
                          <Label htmlFor="june-19">June 19 (Friday)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="june-20" id="june-20" />
                          <Label htmlFor="june-20">June 20 (Saturday)</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

                {selectedTicket ? (
                  <>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-lg font-medium">
                          {ticketTypes.find((t) => t.id === selectedTicket)?.name}
                          {selectedTicket === "single-concert" && selectedConcert && (
                            <span className="block text-sm text-gray-500 mt-1">
                              {concerts.find((c) => c.id === selectedConcert)?.name}
                            </span>
                          )}
                          {selectedTicket === "day-pass" && (
                            <span className="block text-sm text-gray-500 mt-1">
                              {daySelection.replace("-", " ").replace("june", "June")}
                            </span>
                          )}
                        </span>
                        <span className="text-lg">€{ticketTypes.find((t) => t.id === selectedTicket)?.price}</span>
                      </div>

                      <div className="flex items-center">
                        <Label htmlFor="quantity" className="mr-4">
                          Quantity:
                        </Label>
                        <Select
                          value={quantity.toString()}
                          onValueChange={(value) => setQuantity(Number.parseInt(value))}
                        >
                          <SelectTrigger id="quantity" className="w-24">
                            <SelectValue placeholder="1" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>€{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full text-lg" size="lg">
                      Proceed to Checkout
                    </Button>

                    <div className="mt-4 text-center text-sm text-gray-500">
                      <p>Secure payment processing</p>
                      <div className="flex justify-center gap-2 mt-2">
                        <CreditCard className="h-5 w-5" />
                        <span>All major credit cards accepted</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Ticket className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-lg text-gray-500">Please select a ticket type to continue</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="general" className="text-lg">
                General
              </TabsTrigger>
              <TabsTrigger value="tickets" className="text-lg">
                Tickets
              </TabsTrigger>
              <TabsTrigger value="venue" className="text-lg">
                Venues
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <FaqItem
                question="When and where does Musikfest Wannsee take place?"
                answer="Musikfest Wannsee takes place from June 15-20, 2025, at various venues around the Wannsee area in Berlin, Germany."
              />
              <FaqItem
                question="What types of music will be performed?"
                answer="The festival features a diverse range of musical styles, including classical, contemporary, jazz, opera, and folk music. Check our program page for details on specific performances."
              />
              <FaqItem
                question="Is the festival suitable for children?"
                answer="Yes, we have several family-friendly events, including a dedicated Children's Concert. Children under 12 receive discounted tickets for most events."
              />
            </TabsContent>

            <TabsContent value="tickets" className="space-y-6">
              <FaqItem
                question="Can I get a refund if I can't attend?"
                answer="Tickets can be refunded up to 30 days before the festival. After that, we offer ticket exchanges or credit for next year's festival."
              />
              <FaqItem
                question="Are there discounts available?"
                answer="Yes, we offer discounts for students, seniors, and groups of 10 or more. Contact our ticket office for details."
              />
              <FaqItem
                question="How will I receive my tickets?"
                answer="Tickets are delivered electronically to your email. You can print them or show them on your mobile device at the entrance."
              />
            </TabsContent>

            <TabsContent value="venue" className="space-y-6">
              <FaqItem
                question="Are the venues accessible for people with disabilities?"
                answer="Most of our venues are fully accessible. Please check the specific venue information on our Locations page or contact us for detailed accessibility information."
              />
              <FaqItem
                question="Is there parking available at the venues?"
                answer="Limited parking is available at most venues. We recommend using public transportation when possible. See our Locations page for specific parking information."
              />
              <FaqItem
                question="What happens if it rains during an outdoor event?"
                answer="Outdoor events have contingency plans in case of inclement weather. This may include moving to an indoor venue or rescheduling. Ticket holders will be notified of any changes."
              />
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-lg mb-4">Have more questions? We're here to help!</p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Group Bookings */}
      <section className="py-16 px-4 bg-beige-50 relative overflow-hidden">
        <LightParallaxBackground />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Group Bookings</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Planning to attend with a group? Groups of 10 or more receive special discounts and benefits.
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/contact">Inquire About Group Rates</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-beige-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
        <HelpCircle className="h-5 w-5 text-primary" />
        {question}
      </h3>
      <p className="text-lg pl-7">{answer}</p>
    </div>
  )
}
