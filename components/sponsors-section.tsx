import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function SponsorsSection() {
  // Sample sponsors data
  const sponsors = [
    {
      name: "Freundeskreis Nikolskoe",
      logo: "/logos/Logo_Freundeskreis_Nikolskoe.png",
      url: 'https://freundeskreis-nikolskoe.de/',
      tier: "platinum",
    },
    {
      name: "Förderverein Ev. Kirchengemeinde Berlin-Wannsee",
      logo: "/logos/Logo_Foerderverein_Ev_Kirchengemeinde_Wannsee.png",
      tier: "platinum",
    },
    {
      name: "Stiftung für die evangelische Kirchengemeinde Wannsee",
      logo: "/logos/Logo_Stiftung_Ev_Kirchengemeinde_Wannsee.png",
      tier: "platinum",
    },
  ]

  // Group sponsors by tier
  const platinumSponsors = sponsors.filter((s) => s.tier === "platinum")
  const goldSponsors = sponsors.filter((s) => s.tier === "gold")
  const silverSponsors = sponsors.filter((s) => s.tier === "silver")
  const bronzeSponsors = sponsors.filter((s) => s.tier === "bronze")

  return (
    <section id="sponsors" className="py-20 water-bg-backwards">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Förderer & Sponsoren</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Wir bedanken uns von Herzen bei unseren Förderern und Unterstützern <br/><br/>  
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {platinumSponsors.map((sponsor, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="relative h-24 w-full mb-6">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
