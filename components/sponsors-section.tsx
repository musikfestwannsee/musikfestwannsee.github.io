import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function SponsorsSection() {
  // Sample sponsors data
  const sponsors = [
    {
      name: "Berlin Cultural Foundation",
      description: "Supporting arts and culture throughout Berlin",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "platinum",
    },
    {
      name: "Deutsche Musikrat",
      description: "Promoting musical education and performance",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "platinum",
    },
    {
      name: "Berliner Sparkasse",
      description: "Local banking partner committed to community events",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "gold",
    },
    {
      name: "Wannsee Hotel Group",
      description: "Luxury accommodations for festival guests",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "gold",
    },
    {
      name: "Berlin Tourism Board",
      description: "Promoting cultural tourism in Berlin",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "silver",
    },
    {
      name: "Classic FM Berlin",
      description: "Official radio partner of Musikfest Wannsee",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "silver",
    },
    {
      name: "Steinway & Sons",
      description: "Official piano provider for all festival venues",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "silver",
    },
    {
      name: "Berlin Transport Authority",
      description: "Providing special services during the festival",
      logo: "/placeholder.svg?height=200&width=400",
      tier: "bronze",
    },
  ]

  // Group sponsors by tier
  const platinumSponsors = sponsors.filter((s) => s.tier === "platinum")
  const goldSponsors = sponsors.filter((s) => s.tier === "gold")
  const silverSponsors = sponsors.filter((s) => s.tier === "silver")
  const bronzeSponsors = sponsors.filter((s) => s.tier === "bronze")

  return (
    <section id="sponsors" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We thank these organizations for making Musikfest Wannsee possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-700 dark:text-slate-200 mb-8">Platinum Sponsors</h3>
          <div className="grid md:grid-cols-2 gap-8">
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
                  <p className="text-slate-600 dark:text-slate-300 text-center">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center text-slate-700 dark:text-slate-200 mb-8">Gold Sponsors</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{sponsor.name}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-center text-sm">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-center text-slate-700 dark:text-slate-200 mb-8">Silver Sponsors</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="relative h-16 w-full mb-3">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">{sponsor.name}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-center text-xs">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div>
          <h3 className="text-lg font-bold text-center text-slate-700 dark:text-slate-200 mb-6">Bronze Sponsors</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {bronzeSponsors.map((sponsor, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-3 flex flex-col items-center">
                  <div className="relative h-12 w-full mb-2">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{sponsor.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
