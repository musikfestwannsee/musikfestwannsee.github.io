import { Navigation } from "@/components/navigation"
import { Impressum } from "@/components/impressum"
import { Footer } from "@/components/footer"

export default function ImpressumPage() {
  return (
    <main className="relative">
      <Navigation />
      <div className="min-h-screen water-bg">
        <div className="pt-24">
          <Impressum />
        </div>
      </div>
      <Footer />
    </main>
  )
}