import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProgramSection } from "@/components/program-section"
import { ArtistsSection } from "@/components/artists-section"
import { LocationsSection } from "@/components/locations-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { TicketsSection } from "@/components/tickets-section"
import { TeamSection } from "@/components/team-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ProgramSection />
      <ArtistsSection />
      <LocationsSection />
      <SponsorsSection />
      <TicketsSection />
      <TeamSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
