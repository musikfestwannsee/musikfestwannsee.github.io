import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="hidden md:block h-full w-full">
        <Image
          src="HeroSection_desktop.png"
          alt="Musikfest Wannsee Logo und Motto vor einem Bild des Wannsees mit Segelbooten"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Mobile */}
      <div className="block md:hidden h-full w-full">
        <Image
          src="HeroSection_mobile.png"
          alt="Musikfest Wannsee Logo und Motto vor einem Bild des Wannsees mit Segelbooten"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}