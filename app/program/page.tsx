import { Calendar, Clock, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WaterParallaxBackground } from "@/components/parallax-background"

// Sample program data
const programData = {
  day1: [
    {
      id: 1,
      title: "Opening Ceremony",
      time: "19:00 - 21:00",
      location: "Main Stage",
      description: "The official opening of Musikfest Wannsee with performances by the Berlin Philharmonic Orchestra.",
      category: "Classical",
    },
    {
      id: 2,
      title: "Welcome Reception",
      time: "21:30 - 23:00",
      location: "Lakeside Pavilion",
      description: "Join us for drinks and light refreshments as we celebrate the start of the festival.",
      category: "Social",
    },
  ],
  day2: [
    {
      id: 3,
      title: "Chamber Music Morning",
      time: "10:00 - 12:00",
      location: "Historic Villa",
      description: "An intimate chamber music performance featuring works by Mozart and Beethoven.",
      category: "Classical",
    },
    {
      id: 4,
      title: "Contemporary Compositions",
      time: "14:00 - 16:00",
      location: "Modern Hall",
      description: "Exploring new works by emerging composers from around Europe.",
      category: "Contemporary",
    },
    {
      id: 5,
      title: "Evening Concert",
      time: "19:00 - 21:00",
      location: "Main Stage",
      description: "A celebration of Romantic era compositions performed by the Vienna String Quartet.",
      category: "Classical",
    },
  ],
  day3: [
    {
      id: 6,
      title: "Baroque Breakfast",
      time: "09:30 - 11:30",
      location: "Garden Terrace",
      description: "Start your day with Bach, Handel, and Vivaldi while enjoying a delicious breakfast.",
      category: "Classical",
    },
    {
      id: 7,
      title: "Jazz by the Lake",
      time: "15:00 - 17:00",
      location: "Lakeside Stage",
      description: "Contemporary jazz performances with the beautiful Wannsee as backdrop.",
      category: "Jazz",
    },
    {
      id: 8,
      title: "Opera Highlights",
      time: "19:30 - 22:00",
      location: "Main Stage",
      description: "A selection of famous arias and overtures performed by international opera stars.",
      category: "Opera",
    },
  ],
  day4: [
    {
      id: 9,
      title: "Children's Concert",
      time: "11:00 - 12:30",
      location: "Community Hall",
      description: "An interactive musical experience designed for young audiences.",
      category: "Family",
    },
    {
      id: 10,
      title: "Masterclass",
      time: "14:00 - 16:00",
      location: "Academy Building",
      description: "Observe as renowned musicians work with talented students.",
      category: "Educational",
    },
    {
      id: 11,
      title: "Piano Recital",
      time: "19:00 - 21:00",
      location: "Historic Villa",
      description: "An evening of piano masterpieces performed by award-winning pianist Maria Schmidt.",
      category: "Classical",
    },
  ],
  day5: [
    {
      id: 12,
      title: "Folk Traditions",
      time: "12:00 - 14:00",
      location: "Garden Stage",
      description: "Celebrating folk music traditions from Germany and beyond.",
      category: "Folk",
    },
    {
      id: 13,
      title: "String Orchestra",
      time: "16:00 - 18:00",
      location: "Main Stage",
      description: "The Berlin Chamber Orchestra performs works by Tchaikovsky and Dvořák.",
      category: "Classical",
    },
    {
      id: 14,
      title: "Contemporary Dance & Music",
      time: "20:00 - 22:00",
      location: "Modern Hall",
      description: "A collaborative performance combining modern dance and experimental music.",
      category: "Contemporary",
    },
  ],
  day6: [
    {
      id: 15,
      title: "Choral Concert",
      time: "11:00 - 13:00",
      location: "Historic Church",
      description: "Sacred music performed by the Berlin Cathedral Choir.",
      category: "Choral",
    },
    {
      id: 16,
      title: "Closing Symphony",
      time: "18:00 - 20:00",
      location: "Main Stage",
      description: "The grand finale of Musikfest Wannsee featuring Beethoven's 9th Symphony.",
      category: "Classical",
    },
    {
      id: 17,
      title: "Farewell Party",
      time: "21:00 - 23:30",
      location: "Lakeside Pavilion",
      description: "Join artists and festival-goers for a final celebration with music, food, and drinks.",
      category: "Social",
    },
  ],
}

export default function ProgramPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Festival Program</h1>
          <p className="text-xl max-w-3xl">
            Explore our diverse program of concerts, performances, and events taking place during Musikfest Wannsee
            2025.
          </p>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="section-title">Schedule</h2>
            <p className="text-xl">June 15-20, 2025 | Various locations around Wannsee</p>
          </div>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="day1" className="text-lg">
                Day 1
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-lg">
                Day 2
              </TabsTrigger>
              <TabsTrigger value="day3" className="text-lg">
                Day 3
              </TabsTrigger>
              <TabsTrigger value="day4" className="text-lg">
                Day 4
              </TabsTrigger>
              <TabsTrigger value="day5" className="text-lg">
                Day 5
              </TabsTrigger>
              <TabsTrigger value="day6" className="text-lg">
                Day 6
              </TabsTrigger>
            </TabsList>

            {Object.entries(programData).map(([day, events], index) => (
              <TabsContent key={day} value={day} className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Day {index + 1}: June {15 + index}, 2025
                  </h3>
                  <p className="text-lg text-gray-600">
                    {index === 0 ? "Opening Day" : index === 5 ? "Closing Day" : `Festival Day ${index + 1}`}
                  </p>
                </div>

                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-primary-50 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">{event.title}</CardTitle>
                          <CardDescription className="text-lg mt-1">
                            <Badge variant="outline" className="mr-2 text-base">
                              {event.category}
                            </Badge>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-lg mb-6">{event.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-lg">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span className="text-lg">{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Download the Complete Program</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the full festival program as a PDF to plan your Musikfest Wannsee experience.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary-600 transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Download Program (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
