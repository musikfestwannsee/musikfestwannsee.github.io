import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ChevronRight, Search } from "lucide-react"
import { WaterParallaxBackground } from "@/components/parallax-background"

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "Announcing the 2025 Musikfest Wannsee Program",
    excerpt:
      "We are thrilled to announce the full program for the 2025 Musikfest Wannsee, featuring over 30 concerts and performances by world-renowned artists.",
    date: "May 1, 2025",
    image: "/placeholder.svg?height=600&width=800&text=2025+Program",
    category: "Announcements",
    featured: true,
  },
  {
    id: 2,
    title: "Berlin Philharmonic to Open Musikfest Wannsee 2025",
    excerpt:
      "The world-renowned Berlin Philharmonic Orchestra will perform at the opening ceremony of Musikfest Wannsee 2025, marking the beginning of six days of musical excellence.",
    date: "April 15, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Berlin+Philharmonic",
    category: "Artists",
    featured: true,
  },
  {
    id: 3,
    title: "New Venue Added: Historic Church to Host Choral Concert",
    excerpt:
      "We are pleased to announce the addition of the historic St. Peter und Paul Church to our list of venues. The church will host a special choral concert featuring sacred music.",
    date: "April 10, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Historic+Church",
    category: "Venues",
    featured: true,
  },
  {
    id: 4,
    title: "Early Bird Tickets Now Available",
    excerpt:
      "Secure your place at Musikfest Wannsee 2025 with our early bird ticket offer. Save up to 20% on festival passes until May 15.",
    date: "April 1, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Early+Bird+Tickets",
    category: "Tickets",
    featured: false,
  },
  {
    id: 5,
    title: "Volunteer Registration Opens for Musikfest Wannsee 2025",
    excerpt:
      "Be part of the festival team! We are now accepting volunteer applications for various roles during the festival.",
    date: "March 20, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Volunteer",
    category: "Community",
    featured: false,
  },
  {
    id: 6,
    title: "Acclaimed Pianist Maria Schmidt to Perform Chopin's Complete Nocturnes",
    excerpt:
      "Award-winning pianist Maria Schmidt will present a special recital featuring all of Chopin's Nocturnes over two evenings at the Historic Villa.",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Maria+Schmidt",
    category: "Artists",
    featured: false,
  },
  {
    id: 7,
    title: "New Partnership with Berlin Music Schools Announced",
    excerpt:
      "Musikfest Wannsee is proud to announce a new educational partnership with Berlin's music schools, providing opportunities for young musicians to participate in the festival.",
    date: "March 10, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Music+Schools",
    category: "Education",
    featured: false,
  },
  {
    id: 8,
    title: "Lakeside Jazz Series to Feature International Artists",
    excerpt:
      "Our popular Jazz by the Lake series returns with an exciting lineup of international jazz artists performing against the backdrop of beautiful Wannsee.",
    date: "March 5, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Jazz+Series",
    category: "Program",
    featured: false,
  },
  {
    id: 9,
    title: "Musikfest Wannsee Receives Cultural Excellence Award",
    excerpt:
      "We are honored to announce that Musikfest Wannsee has been recognized with the Berlin Cultural Excellence Award for its contribution to the city's cultural landscape.",
    date: "February 28, 2025",
    image: "/placeholder.svg?height=600&width=800&text=Award",
    category: "Awards",
    featured: false,
  },
]

export default function NewsPage() {
  const featuredNews = newsArticles.filter((article) => article.featured)
  const regularNews = newsArticles.filter((article) => !article.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Festival News</h1>
          <p className="text-xl max-w-3xl">
            Stay updated with the latest announcements, artist spotlights, and behind-the-scenes stories from Musikfest
            Wannsee.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Featured News</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
                  >
                    Read More <ChevronRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input type="search" placeholder="Search news..." className="pl-10 text-lg h-12" />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Button variant="outline" className="whitespace-nowrap">
                All Categories
              </Button>
              <Button variant="outline" className="whitespace-nowrap">
                Announcements
              </Button>
              <Button variant="outline" className="whitespace-nowrap">
                Artists
              </Button>
              <Button variant="outline" className="whitespace-nowrap">
                Program
              </Button>
              <Button variant="outline" className="whitespace-nowrap">
                Venues
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader className="pt-4 pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                    <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-base line-clamp-2">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
                  >
                    Read More <ChevronRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="text-lg">
              Load More News
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-primary-700 text-white relative overflow-hidden">
        <WaterParallaxBackground intensity={0.05} />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates about Musikfest Wannsee directly to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 text-lg"
            />
            <Button className="bg-white text-primary hover:bg-white/90 h-12 text-lg">Subscribe</Button>
          </div>
          <p className="mt-4 text-sm text-white/70">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  )
}
