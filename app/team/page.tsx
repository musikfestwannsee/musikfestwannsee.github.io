import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { WaterParallaxBackground } from "@/components/parallax-background"

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Elisa Wagner",
    role: "Festival Director",
    image: "/placeholder.svg?height=400&width=400&text=Elisa+Wagner",
    bio: "Dr. Wagner has been the Festival Director since 2018. With a background in music management and a doctorate in musicology, she brings a wealth of experience and vision to Musikfest Wannsee.",
    email: "elisa.wagner@musikfest-wannsee.de",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 2,
    name: "Thomas Müller",
    role: "Artistic Director",
    image: "/placeholder.svg?height=400&width=400&text=Thomas+Müller",
    bio: "As Artistic Director, Thomas curates the festival's diverse program. A former conductor with the Berlin Philharmonic, he has an exceptional ear for talent and a passion for musical innovation.",
    email: "thomas.muller@musikfest-wannsee.de",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 3,
    name: "Sophie Becker",
    role: "Operations Manager",
    image: "/placeholder.svg?height=400&width=400&text=Sophie+Becker",
    bio: "Sophie ensures the smooth running of all festival operations. With a background in event management, she coordinates venues, logistics, and staff to create a seamless experience for artists and attendees.",
    email: "sophie.becker@musikfest-wannsee.de",
    social: {
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: 4,
    name: "Michael Schmidt",
    role: "Marketing Director",
    image: "/placeholder.svg?height=400&width=400&text=Michael+Schmidt",
    bio: "Michael leads our marketing and communications efforts. With over 15 years of experience in cultural marketing, he ensures that Musikfest Wannsee reaches and engages with music lovers across Berlin and beyond.",
    email: "michael.schmidt@musikfest-wannsee.de",
    social: {
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id: 5,
    name: "Anna Hoffmann",
    role: "Development Director",
    image: "/placeholder.svg?height=400&width=400&text=Anna+Hoffmann",
    bio: "Anna manages relationships with our sponsors and donors. Her background in fundraising for cultural institutions helps secure the financial support that makes Musikfest Wannsee possible.",
    email: "anna.hoffmann@musikfest-wannsee.de",
    social: {
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: 6,
    name: "David Klein",
    role: "Technical Director",
    image: "/placeholder.svg?height=400&width=400&text=David+Klein",
    bio: "David oversees all technical aspects of the festival. With expertise in sound engineering and stage management, he ensures optimal acoustic experiences across all our venues.",
    email: "david.klein@musikfest-wannsee.de",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 7,
    name: "Laura Fischer",
    role: "Education Coordinator",
    image: "/placeholder.svg?height=400&width=400&text=Laura+Fischer",
    bio: "Laura develops our educational programs and community outreach initiatives. A former music teacher, she is passionate about making classical music accessible to audiences of all ages.",
    email: "laura.fischer@musikfest-wannsee.de",
    social: {
      instagram: "https://instagram.com/",
    },
  },
  {
    id: 8,
    name: "Martin Weber",
    role: "Volunteer Coordinator",
    image: "/placeholder.svg?height=400&width=400&text=Martin+Weber",
    bio: "Martin recruits and manages our dedicated team of volunteers. His organizational skills and friendly demeanor make him the perfect liaison for the many community members who contribute to the festival's success.",
    email: "martin.weber@musikfest-wannsee.de",
    social: {
      twitter: "https://twitter.com/",
    },
  },
]

// Board members
const boardMembers = [
  {
    id: 1,
    name: "Prof. Dr. Johanna Schulz",
    role: "Board Chair",
    image: "/placeholder.svg?height=400&width=400&text=Johanna+Schulz",
    bio: "Professor of Music at Berlin University and a renowned musicologist specializing in German classical traditions.",
  },
  {
    id: 2,
    name: "Heinrich Braun",
    role: "Treasurer",
    image: "/placeholder.svg?height=400&width=400&text=Heinrich+Braun",
    bio: "Former CFO of a major German cultural foundation with extensive experience in arts funding.",
  },
  {
    id: 3,
    name: "Dr. Maria Krause",
    role: "Secretary",
    image: "/placeholder.svg?height=400&width=400&text=Maria+Krause",
    bio: "Cultural policy advisor with a background in public administration and arts management.",
  },
  {
    id: 4,
    name: "Robert Zimmermann",
    role: "Board Member",
    image: "/placeholder.svg?height=400&width=400&text=Robert+Zimmermann",
    bio: "Conductor emeritus of the Berlin Symphony Orchestra and advocate for music education.",
  },
]

export default function TeamPage() {
  // Group team members into rows of 3 for leadership team
  const leadershipTeam = teamMembers.slice(0, 3)
  const extendedTeam = teamMembers.slice(3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 text-white">
        <WaterParallaxBackground />
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl">
            Meet the dedicated professionals who work year-round to bring Musikfest Wannsee to life.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </a>
                  <div className="flex gap-2">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Festival Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedTeam.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex justify-between items-center">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </a>
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary"
                          >
                            <Instagram className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-4 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Board of Directors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-16 px-4 bg-primary-700 text-white relative overflow-hidden">
        <WaterParallaxBackground intensity={0.05} />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Musikfest Wannsee relies on the dedication and enthusiasm of our volunteers. If you're passionate about
            music and want to be part of this exciting festival, we'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Volunteer Opportunities
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-lg font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
