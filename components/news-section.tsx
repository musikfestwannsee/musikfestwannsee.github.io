import Image from "next/image"
import { CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function NewsSection() {
  // Sample news data
  const newsItems = [
    {
      title: "Renowned Pianist Clara Schmidt Joins Festival Lineup",
      date: "May 2, 2025",
      excerpt:
        "We are thrilled to announce that internationally acclaimed pianist Clara Schmidt will be performing Beethoven's complete piano sonatas across three special evening concerts.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "New Venue Added: Garden Pavilion",
      date: "April 15, 2025",
      excerpt:
        "Due to popular demand, we've added a charming new venue to our festival. The Garden Pavilion will host intimate afternoon performances.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Early Bird Tickets Now Available",
      date: "April 1, 2025",
      excerpt:
        "Secure your place at Musikfest Wannsee 2025 with our limited early bird tickets, offering a 15% discount on all festival passes.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Latest News</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay updated with the latest announcements about Musikfest Wannsee
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader className="pt-6">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
                <CardTitle className="text-xl text-slate-800 dark:text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-teal-600 dark:text-teal-400 hover:text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 p-0"
                >
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">View All News</Button>
        </div>
      </div>
    </section>
  )
}
