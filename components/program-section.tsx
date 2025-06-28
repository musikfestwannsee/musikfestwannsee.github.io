import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProgramSection() {
  return (
    <section id="program" className="py-24 bg-beige-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title centered handwritten-first-letter">Program</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated program of classical masterpieces performed by world-class musicians
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert, index) => (
            <Card key={index} className="card-elegant overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[3/2] bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium">{concert.date}</p>
                      <h3 className="text-xl font-display mt-1 handwritten-first-letter">{concert.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">{concert.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{concert.time}</p>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-elegant">View Full Program</Button>
        </div>
      </div>
    </section>
  )
}

const concerts = [
  {
    title: "Opening Night: Mozart & Beethoven",
    date: "August 15, 2025",
    time: "7:30 PM",
    description:
      "Join us for an unforgettable evening featuring Mozart's Piano Concerto No. 23 and Beethoven's Symphony No. 7.",
  },
  {
    title: "Chamber Music: Schubert & Brahms",
    date: "August 17, 2025",
    time: "3:00 PM",
    description:
      "Experience the intimate beauty of Schubert's 'Trout' Quintet and Brahms' Clarinet Quintet in B minor.",
  },
  {
    title: "Vocal Recital: Lieder by the Lake",
    date: "August 19, 2025",
    time: "6:00 PM",
    description:
      "A sunset recital featuring German Lieder by Schubert, Schumann, and Wolf in the picturesque lakeside pavilion.",
  },
]
