import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"
import { WaterParallaxBackground } from "@/components/parallax-background"

// Sample artists data
const artists = [
  {
    id: 1,
    name: "Berlin Philharmonic Orchestra",
    image: "/placeholder.svg?height=400&width=400&text=Berlin+Philharmonic",
    category: "orchestra",
    country: "Germany",
    bio: "One of the world's most prestigious orchestras, known for their exceptional performances of classical repertoire.",
    website: "https://www.berliner-philharmoniker.de/",
    featured: true,
  },
  {
    id: 2,
    name: "Maria Schmidt",
    image: "/placeholder.svg?height=400&width=400&text=Maria+Schmidt",
    category: "piano",
    country: "Austria",
    bio: "Award-winning pianist known for her interpretations of Romantic era compositions, particularly Chopin and Liszt.",
    website: "https://example.com/maria-schmidt",
    featured: true,
  },
  {
    id: 3,
    name: "Vienna String Quartet",
    image: "/placeholder.svg?height=400&width=400&text=Vienna+String+Quartet",
    category: "chamber",
    country: "Austria",
    bio: "Renowned chamber ensemble specializing in classical and contemporary string quartet repertoire.",
    website: "https://example.com/vienna-quartet",
    featured: true,
  },
  {
    id: 4,
    name: "Berlin Cathedral Choir",
    image: "/placeholder.svg?height=400&width=400&text=Berlin+Cathedral+Choir",
    category: "choir",
    country: "Germany",
    bio: "Historic choir with a tradition dating back centuries, known for their performances of sacred music.",
    website: "https://example.com/berlin-choir",
    featured: false,
  },
  {
    id: 5,
    name: "Alexander Petrov",
    image: "/placeholder.svg?height=400&width=400&text=Alexander+Petrov",
    category: "violin",
    country: "Russia",
    bio: "Virtuoso violinist who has performed with major orchestras around the world.",
    website: "https://example.com/alexander-petrov",
    featured: true,
  },
  {
    id: 6,
    name: "Sophia Chen",
    image: "/placeholder.svg?height=400&width=400&text=Sophia+Chen",
    category: "cello",
    country: "China",
    bio: "Celebrated cellist known for her emotional depth and technical precision.",
    website: "https://example.com/sophia-chen",
    featured: false,
  },
  {
    id: 7,
    name: "Jazz Collective Berlin",
    image: "/placeholder.svg?height=400&width=400&text=Jazz+Collective",
    category: "jazz",
    country: "Germany",
    bio: "Innovative jazz ensemble blending traditional jazz with contemporary influences.",
    website: "https://example.com/jazz-collective",
    featured: false,
  },
  {
    id: 8,
    name: "European Youth Orchestra",
    image: "/placeholder.svg?height=400&width=400&text=European+Youth+Orchestra",
    category: "orchestra",
    country: "European Union",
    bio: "Bringing together the most talented young musicians from across Europe.",
    website: "https://example.com/european-youth",
    featured: false,
  },
  {
    id: 9,
    name: "Quartet Moderne",
    image: "/placeholder.svg?height=400&width=400&text=Quartet+Moderne",
    category: "chamber",
    country: "France",
    bio: "Contemporary string quartet pushing the boundaries of chamber music.",
    website: "https://example.com/quartet-moderne",
    featured: false,
  },
  {
    id: 10,
    name: "David Müller",
    image: "/placeholder.svg?height=400&width=400&text=David+Müller",
    category: "conductor",
    country: "Germany",
    bio: "Renowned conductor who has led major orchestras throughout Europe and North America.",
    website: "https://example.com/david-muller",
    featured: true,
  },
  {
    id: 11,
    name: "Nordic Voices",
    image: "/placeholder.svg?height=400&width=400&text=Nordic+Voices",
    category: "choir",
    country: "Norway",
    bio: "A cappella ensemble known for their innovative approach to vocal music.",
    website: "https://example.com/nordic-voices",
    featured: false,
  },
  {
    id: 12,
    name: "Elena Kowalski",
    image: "/placeholder.svg?height=400&width=400&text=Elena+Kowalski",
    category: "piano",
    country: "Poland",
    bio: "Rising star in the piano world, known for her interpretations of Chopin and contemporary Polish composers.",
    website: "https://example.com/elena-kowalski",
    featured: false,
  },
]

export default function ArtistsPage() {
  const featuredArtists = artists.filter((artist) => artist.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Festival Artists</h1>
          <p className="text-xl max-w-3xl">
            Meet the talented musicians and performers who will bring their artistry to Musikfest Wannsee 2025.
          </p>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Featured Artists</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{artist.name}</CardTitle>
                  <CardDescription className="text-lg flex items-center gap-2">
                    <Badge variant="outline" className="text-base capitalize">
                      {artist.category}
                    </Badge>
                    <span>{artist.country}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{artist.bio}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={artist.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Globe className="h-5 w-5" />
                    <span>Visit Website</span>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Artists */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">All Performers</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8">
              <TabsTrigger value="all" className="text-lg">
                All
              </TabsTrigger>
              <TabsTrigger value="orchestra" className="text-lg">
                Orchestra
              </TabsTrigger>
              <TabsTrigger value="chamber" className="text-lg">
                Chamber
              </TabsTrigger>
              <TabsTrigger value="piano" className="text-lg">
                Piano
              </TabsTrigger>
              <TabsTrigger value="choir" className="text-lg">
                Choir
              </TabsTrigger>
              <TabsTrigger value="jazz" className="text-lg">
                Jazz
              </TabsTrigger>
              <TabsTrigger value="conductor" className="text-lg">
                Conductor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </TabsContent>

            {["orchestra", "chamber", "piano", "choir", "jazz", "conductor"].map((category) => (
              <TabsContent key={category} value={category} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artists
                  .filter((artist) => artist.category === category)
                  .map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

function ArtistCard({ artist }: { artist: (typeof artists)[0] }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
        </div>
        <div className="flex-1 p-6">
          <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-sm capitalize">
              {artist.category}
            </Badge>
            <span className="text-sm text-gray-600">{artist.country}</span>
          </div>
          <p className="text-sm line-clamp-3 mb-3">{artist.bio}</p>
          <a
            href={artist.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <Globe className="h-4 w-4" />
            <span>Website</span>
          </a>
        </div>
      </div>
    </Card>
  )
}
