import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  // Sample team data
  const teamMembers = [
    {
      name: "Dr. Elisa Wagner",
      role: "Artistic Director",
      bio: "Renowned musicologist and former conductor with over 25 years of experience in festival organization.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Thomas Becker",
      role: "Executive Director",
      bio: "Arts administrator with extensive experience in managing cultural events throughout Germany.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sophia Müller",
      role: "Program Coordinator",
      bio: "Classical pianist and music educator responsible for curating the festival's diverse program.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Martin Schmidt",
      role: "Technical Director",
      bio: "Sound engineer specializing in classical music with expertise in outdoor acoustics.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Hannah Klein",
      role: "Marketing Director",
      bio: "Communications specialist with a passion for making classical music accessible to wider audiences.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Klaus Weber",
      role: "Venue Manager",
      bio: "Logistics expert ensuring seamless operations across all festival venues.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            The dedicated professionals who bring Musikfest Wannsee to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6 bg-white dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{member.name}</h3>
                <p className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-3">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
