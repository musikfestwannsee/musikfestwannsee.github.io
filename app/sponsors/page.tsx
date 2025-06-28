import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { WaterParallaxBackground } from "@/components/parallax-background"

// Sample sponsors data
const sponsors = {
  platinum: [
    {
      id: 1,
      name: "Berlin Cultural Foundation",
      logo: "/placeholder.svg?height=200&width=400&text=Berlin+Cultural+Foundation",
      description: "Supporting arts and culture throughout Berlin for over 30 years.",
      website: "https://example.com/berlin-cultural",
    },
    {
      id: 2,
      name: "Deutsche Bank Arts Program",
      logo: "/placeholder.svg?height=200&width=400&text=Deutsche+Bank+Arts",
      description:
        "Committed to making contemporary art accessible to the public and to promoting young, talented artists.",
      website: "https://example.com/deutsche-bank-arts",
    },
  ],
  gold: [
    {
      id: 3,
      name: "Berlin Tourism Board",
      logo: "/placeholder.svg?height=200&width=400&text=Berlin+Tourism",
      description: "Promoting Berlin as a cultural destination and supporting local events.",
      website: "https://example.com/berlin-tourism",
    },
    {
      id: 4,
      name: "Wannsee Hotel Group",
      logo: "/placeholder.svg?height=200&width=400&text=Wannsee+Hotels",
      description: "Luxury accommodations around the Wannsee area, providing special rates for festival attendees.",
      website: "https://example.com/wannsee-hotels",
    },
    {
      id: 5,
      name: "Brandenburg Music Association",
      logo: "/placeholder.svg?height=200&width=400&text=Brandenburg+Music",
      description: "Supporting musical education and performance throughout the Brandenburg region.",
      website: "https://example.com/brandenburg-music",
    },
  ],
  silver: [
    {
      id: 6,
      name: "Berlin Sound Systems",
      logo: "/placeholder.svg?height=200&width=400&text=Berlin+Sound",
      description: "Providing high-quality audio equipment for all festival venues.",
      website: "https://example.com/berlin-sound",
    },
    {
      id: 7,
      name: "Café Wannsee",
      logo: "/placeholder.svg?height=200&width=400&text=Café+Wannsee",
      description: "Local café providing refreshments at festival venues.",
      website: "https://example.com/cafe-wannsee",
    },
    {
      id: 8,
      name: "Berlin Public Transport",
      logo: "/placeholder.svg?height=200&width=400&text=Berlin+Transport",
      description: "Offering special festival passes for public transportation to and from venues.",
      website: "https://example.com/berlin-transport",
    },
    {
      id: 9,
      name: "Local Arts Magazine",
      logo: "/placeholder.svg?height=200&width=400&text=Arts+Magazine",
      description: "Media partner providing coverage of all festival events.",
      website: "https://example.com/arts-magazine",
    },
  ],
  supporters: [
    {
      id: 10,
      name: "Wannsee Community Center",
      logo: "/placeholder.svg?height=200&width=400&text=Community+Center",
      description: "Supporting community engagement with the festival.",
      website: "https://example.com/community-center",
    },
    {
      id: 11,
      name: "Berlin Music School",
      logo: "/placeholder.svg?height=200&width=400&text=Music+School",
      description: "Providing young musicians for special performances.",
      website: "https://example.com/music-school",
    },
    {
      id: 12,
      name: "Local Printing Company",
      logo: "/placeholder.svg?height=200&width=400&text=Printing+Co",
      description: "Providing all printed materials for the festival.",
      website: "https://example.com/printing-co",
    },
    {
      id: 13,
      name: "Wannsee Boat Tours",
      logo: "/placeholder.svg?height=200&width=400&text=Boat+Tours",
      description: "Offering special festival boat tours of Wannsee.",
      website: "https://example.com/boat-tours",
    },
    {
      id: 14,
      name: "Local Florist",
      logo: "/placeholder.svg?height=200&width=400&text=Florist",
      description: "Providing floral arrangements for all venues.",
      website: "https://example.com/florist",
    },
    {
      id: 15,
      name: "Berlin Catering",
      logo: "/placeholder.svg?height=200&width=400&text=Catering",
      description: "Catering services for VIP events and receptions.",
      website: "https://example.com/catering",
    },
  ],
}

export default function SponsorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h1>
          <p className="text-xl max-w-3xl">
            Musikfest Wannsee is made possible through the generous support of our sponsors and partners.
          </p>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Platinum Sponsors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.platinum.map((sponsor) => (
              <Card key={sponsor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8 flex justify-center bg-white">
                  <div className="relative h-32 w-full">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{sponsor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">{sponsor.description}</p>
                  <Button asChild variant="outline">
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Globe className="h-5 w-5" />
                      <span>Visit Website</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Gold Sponsors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsors.gold.map((sponsor) => (
              <Card key={sponsor.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 flex justify-center bg-white">
                  <div className="relative h-24 w-full">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle className="text-xl">{sponsor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4">{sponsor.description}</p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Visit Website</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Silver Sponsors</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {sponsors.silver.map((sponsor) => (
              <Card key={sponsor.id} className="overflow-hidden hover:shadow-sm transition-shadow">
                <div className="p-4 flex justify-center bg-white">
                  <div className="relative h-20 w-full">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardHeader className="pt-3 pb-1">
                  <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{sponsor.description}</p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Website</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Supporters & Friends</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.supporters.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-beige-50 p-4 rounded-lg text-center hover:shadow-sm transition-shadow"
              >
                <div className="relative h-16 mb-2">
                  <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
                </div>
                <h3 className="text-base font-semibold mb-1">{sponsor.name}</h3>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 px-4 bg-primary-700 text-white relative overflow-hidden">
        <WaterParallaxBackground intensity={0.05} />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Sponsor</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Support the arts and gain visibility for your organization by becoming a sponsor of Musikfest Wannsee.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href="/contact">Contact Us</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20">
              <a href="#">Download Sponsorship Brochure</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
