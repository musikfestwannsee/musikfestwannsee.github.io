import { Button } from "@/components/ui/button"

export function LocationsSection() {
  return (
    <section id="locations" className="py-24 bg-beige-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title centered handwritten-first-letter">Locations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the beautiful venues around Wannsee where our concerts will take place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-display mb-4 handwritten-first-letter">Main Stage at Liebermann Villa</h3>
            <p className="mb-6">
              The historic Liebermann Villa provides an elegant setting for our main concerts, with its beautiful
              architecture and gardens overlooking the Wannsee.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Seating capacity: 300</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Steinway D concert grand piano</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Accessible facilities</span>
              </li>
            </ul>
            <Button variant="outline">View Details</Button>
          </div>
          <div className="aspect-[4/3] bg-muted rounded-sm overflow-hidden elegant-border"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {otherLocations.map((location, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square bg-muted rounded-sm overflow-hidden mb-6 elegant-border"></div>
              <h3 className="text-xl font-display mb-2 handwritten-first-letter">{location.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
              <Button variant="link">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const otherLocations = [
  {
    name: "Lakeside Pavilion",
    description: "An intimate open-air venue perfect for chamber music, offering stunning views across the water.",
  },
  {
    name: "Wannsee Terrace",
    description: "A charming outdoor space for afternoon recitals, surrounded by lush gardens and lake vistas.",
  },
  {
    name: "House of the Wannsee Conference",
    description: "A historically significant venue with excellent acoustics for smaller ensemble performances.",
  },
]
