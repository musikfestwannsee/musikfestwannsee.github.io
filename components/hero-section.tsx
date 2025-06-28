import { Button } from "@/components/ui/button"
import { WaterParallaxBackground } from "@/components/parallax-background"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Lake background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wannsee2-3I1Ck1Qy1XO6hRoP0H5N0lIhjLjeAB.png"
          alt="Wannsee Lake with sailboat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <WaterParallaxBackground />

      <div className="container mx-auto px-6 z-20 text-center">
        <div className="max-w-4xl mx-auto music-notes">
          <h1 className="text-white font-display mb-8 leading-tight handwritten-first-letter">Musikfest Wannsee</h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-serif">
            Experience the harmony of classical music by the beautiful waters of Wannsee
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="text-lg bg-white hover:bg-white/90 text-primary uppercase tracking-wide font-accent"
            >
              Buy Tickets
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-transparent text-white border-white hover:bg-white/10 uppercase tracking-wide font-accent"
            >
              View Program
            </Button>
          </div>
          <div className="mt-16 inline-block">
            <div className="border-l border-primary-400 pl-6 text-left">
              <p className="text-white text-xl font-medium">August 15-22, 2025</p>
              <p className="text-white/70">Wannsee, Berlin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
