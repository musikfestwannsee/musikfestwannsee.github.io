import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"
import { WaterParallaxBackground, LightParallaxBackground } from "@/components/parallax-background"

// Sample locations data
const locations = [
  {
    id: 1,
    name: "Main Stage",
    image: "/placeholder.svg?height=600&width=800&text=Main+Stage",
    address: "Wannsee Park, Am Großen Wannsee 10, 14109 Berlin",
    description:
      "Our largest venue, located in the heart of Wannsee Park with a capacity of 1,500 people. The Main Stage hosts our opening and closing ceremonies, as well as major orchestral performances.",
    mapUrl: "https://maps.google.com/?q=Wannsee+Park+Berlin",
    capacity: 1500,
    facilities: ["Covered seating", "Accessible entrance", "Restrooms", "Food and beverage stands"],
    featured: true,
  },
  {
    id: 2,
    name: "Historic Villa",
    image: "/placeholder.svg?height=600&width=800&text=Historic+Villa",
    address: "Villa am Wannsee, Königstraße 42, 14109 Berlin",
    description:
      "A beautiful 19th-century villa with exceptional acoustics, perfect for intimate chamber music performances and solo recitals. The ornate interior adds to the magical atmosphere of the performances.",
    mapUrl: "https://maps.google.com/?q=Villa+am+Wannsee+Berlin",
    capacity: 200,
    facilities: ["Indoor seating", "Historical architecture", "Accessible entrance", "Garden area"],
    featured: true,
  },
  {
    id: 3,
    name: "Lakeside Pavilion",
    image: "/placeholder.svg?height=600&width=800&text=Lakeside+Pavilion",
    address: "Strandbad Wannsee, Wannseebadweg 25, 14129 Berlin",
    description:
      "An open-air pavilion right on the shores of Wannsee, offering breathtaking views of the lake. This venue hosts our jazz performances and evening social events.",
    mapUrl: "https://maps.google.com/?q=Strandbad+Wannsee+Berlin",
    capacity: 400,
    facilities: ["Open-air seating", "Lake view", "Bar service", "Accessible paths"],
    featured: true,
  },
  {
    id: 4,
    name: "Modern Hall",
    image: "/placeholder.svg?height=600&width=800&text=Modern+Hall",
    address: "Kulturzentrum Wannsee, Hohenzollernstraße 3, 14109 Berlin",
    description:
      "A contemporary performance space with state-of-the-art acoustics and lighting. This venue is ideal for contemporary music performances and multimedia presentations.",
    mapUrl: "https://maps.google.com/?q=Kulturzentrum+Wannsee+Berlin",
    capacity: 350,
    facilities: ["Modern architecture", "Advanced sound system", "Multimedia capabilities", "Café"],
    featured: false,
  },
  {
    id: 5,
    name: "Historic Church",
    image: "/placeholder.svg?height=600&width=800&text=Historic+Church",
    address: "St. Peter und Paul Kirche, Am Großen Wannsee 32, 14109 Berlin",
    description:
      "A beautiful historic church with exceptional acoustics, perfect for choral performances and sacred music concerts. The serene atmosphere enhances the spiritual dimension of the music.",
    mapUrl: "https://maps.google.com/?q=St+Peter+und+Paul+Kirche+Wannsee+Berlin",
    capacity: 300,
    facilities: ["Historic architecture", "Excellent acoustics", "Limited accessibility"],
    featured: false,
  },
]

export default function LocationsPage() {
  const featuredLocations = locations.filter((location) => location.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Festival Locations</h1>
          <p className="text-xl max-w-3xl">
            Discover the beautiful venues around Wannsee where our performances and events will take place.
          </p>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Main Venues</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLocations.map((location) => (
              <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{location.name}</CardTitle>
                  <CardDescription className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="line-clamp-1">{location.address}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4 line-clamp-3">{location.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`#${location.id}`}>View Details</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Venue Details</h2>

          <Tabs defaultValue={locations[0].id.toString()} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {locations.map((location) => (
                <TabsTrigger
                  key={location.id}
                  value={location.id.toString()}
                  className="text-lg"
                  id={location.id.toString()}
                >
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {locations.map((location) => (
              <TabsContent key={location.id} value={location.id.toString()} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{location.name}</h3>
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg">{location.address}</p>
                    </div>
                    <p className="text-lg mb-6">{location.description}</p>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Capacity</h4>
                      <p className="text-lg">{location.capacity} seats</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Facilities</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {location.facilities.map((facility, index) => (
                          <li key={index} className="text-lg">
                            {facility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="flex items-center gap-2">
                      <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                        <Navigation className="h-5 w-5" />
                        <span>Get Directions</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-beige-50 relative overflow-hidden">
        <LightParallaxBackground />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="section-title">Festival Map</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden bg-gray-200">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg mb-4">
              All festival venues are located within walking distance of each other around the beautiful Wannsee area.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="#" download>
                Download Printable Map (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
