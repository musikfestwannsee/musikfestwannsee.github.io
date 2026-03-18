"use client"

import { useState, useEffect, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const archiveData = [
  {
    year: 2025,
    theme: "Panta rhei – alles fließt",
    description: "Unter dem Motto 'Panta rhei - alles fließt' lud das Musikfest Wannsee 2025\n" +
        "            dazu ein, die Kraft des Wandels und der Bewegung in Musik und Natur zu erleben –\n" +
        "            passend zum Herbstanfang, wenn sich die Natur spürbar verändert.\n" +
        "            Heraklit schrieb: 'Wir steigen in denselben Fluss und doch nicht in denselben,\n" +
        "            wir sind es und wir sind es nicht.\'n" +
        "            Wannsee, eingebettet zwischen weitläufigen Seen, sanften Ufern und den\n" +
        "            Strömungen der Havel, spiegelt diese Erkenntnis als ein Ort des Wandels und der\n" +
        "            Bewegung in besonderer Weise wider. Gerade in dieser Jahreszeit, wenn der Herbst\n" +
        "            Einzug hält, ist der Wandel der Natur besonders deutlich spürbar. Das\n" +
        "            Festivalprogramm griff verschiedene Aspekte von Wasser, Wellen, Fluss und\n" +
        "            Wandel sowohl musikalisch als auch inhaltlich auf und machte so hör- und fühlbar, wie\n" +
        "            Musik und Natur miteinander in Bewegung sind. In Wannsee treffen Natur und Kultur\n" +
        "            auf einzigartige Weise zusammen und schaffen eine Atmosphäre, die unsere\n" +
        "            Konzerte besonders macht.",
    images: [
      { src: "/archive/2025/01/Eroeffnungskonzert1_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 1" },
      { src: "/archive/2025/01/Eroeffnungskonzert2_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 2" },
      { src: "/archive/2025/01/Eroeffnungskonzert3_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 3" },
      { src: "/archive/2025/01/Eroeffnungskonzert4_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 4" },
      { src: "/archive/2025/01/Eroeffnungskonzert5_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 5" },
      { src: "/archive/2025/01/Eroeffnungskonzert6_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 6" },
      { src: "/archive/2025/01/Eroeffnungskonzert7_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 7" },
      { src: "/archive/2025/01/Eroeffnungskonzert8_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 8" },
      { src: "/archive/2025/01/Eroeffnungskonzert9_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 9" },
      { src: "/archive/2025/01/Eroeffnungskonzert10_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 10" },
      { src: "/archive/2025/01/Eroeffnungskonzert11_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 11" },
      { src: "/archive/2025/01/Eroeffnungskonzert12_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 12" },
      { src: "/archive/2025/01/Eroeffnungskonzert13_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 13" },
      { src: "/archive/2025/01/Eroeffnungskonzert15_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 15" },
      { src: "/archive/2025/01/Eroeffnungskonzert16_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 16" },
      { src: "/archive/2025/01/Eroeffnungskonzert17_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 17" },
      { src: "/archive/2025/01/Eroeffnungskonzert18_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 18" },
      { src: "/archive/2025/01/Eroeffnungskonzert19_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 19" },
      { src: "/archive/2025/01/Eroeffnungskonzert20_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 20" },
      { src: "/archive/2025/01/Eroeffnungskonzert21_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 21" },
      { src: "/archive/2025/01/Eroeffnungskonzert22_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 22" },
      { src: "/archive/2025/01/Eroeffnungskonzert23_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 23" },
      { src: "/archive/2025/01/Eroeffnungskonzert24_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 24" },
      { src: "/archive/2025/01/Eroeffnungskonzert25_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 25" },
      { src: "/archive/2025/01/Eroeffnungskonzert26_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 26" },
      { src: "/archive/2025/01/Eroeffnungskonzert27_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 27" },
      { src: "/archive/2025/01/Eroeffnungskonzert28_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 28" },
      { src: "/archive/2025/01/Eroeffnungskonzert29_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 29" },
      { src: "/archive/2025/01/Eroeffnungskonzert30_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 30" },
      { src: "/archive/2025/01/Eroeffnungskonzert31_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 31" },
      { src: "/archive/2025/01/Eroeffnungskonzert32_web.jpg", alt: "Eröffnungskonzert 2025 - Foto 32" },
      { src: "/archive/2025/02/Jeux_d_eau1_web.jpg", alt: "Jeux d'eau 2025 - Foto 1" },
      { src: "/archive/2025/02/Jeux_d_eau2_web.jpg", alt: "Jeux d'eau 2025 - Foto 2" },
      { src: "/archive/2025/02/Jeux_d_eau3_web.jpg", alt: "Jeux d'eau 2025 - Foto 3" },
      { src: "/archive/2025/02/Jeux_d_eau4_web.jpg", alt: "Jeux d'eau 2025 - Foto 4" },
      { src: "/archive/2025/02/Jeux_d_eau5_web.jpg", alt: "Jeux d'eau 2025 - Foto 5" },
      { src: "/archive/2025/02/Jeux_d_eau6_web.jpg", alt: "Jeux d'eau 2025 - Foto 6" },
      { src: "/archive/2025/02/Jeux_d_eau7_web.jpg", alt: "Jeux d'eau 2025 - Foto 7" },
      { src: "/archive/2025/02/Jeux_d_eau8_web.jpg", alt: "Jeux d'eau 2025 - Foto 8" },
      { src: "/archive/2025/02/Jeux_d_eau9_web.jpg", alt: "Jeux d'eau 2025 - Foto 9" },
      { src: "/archive/2025/02/Jeux_d_eau10_web.jpg", alt: "Jeux d'eau 2025 - Foto 10" },
      { src: "/archive/2025/02/Jeux_d_eau11_web.jpg", alt: "Jeux d'eau 2025 - Foto 11" },
      { src: "/archive/2025/02/Jeux_d_eau12_web.jpg", alt: "Jeux d'eau 2025 - Foto 12" },
      { src: "/archive/2025/03/Sturm_und_Stille1_web.jpg", alt: "Sturm und Stille 2025 - Foto 1" },
      { src: "/archive/2025/03/Sturm_und_Stille2_web.jpg", alt: "Sturm und Stille 2025 - Foto 2" },
      { src: "/archive/2025/03/Sturm_und_Stille3_web.jpg", alt: "Sturm und Stille 2025 - Foto 3" },
      { src: "/archive/2025/03/Sturm_und_Stille4_web.jpg", alt: "Sturm und Stille 2025 - Foto 4" },
      { src: "/archive/2025/03/Sturm_und_Stille5_web.jpg", alt: "Sturm und Stille 2025 - Foto 5" },
      { src: "/archive/2025/03/Sturm_und_Stille6_web.jpg", alt: "Sturm und Stille 2025 - Foto 6" },
      { src: "/archive/2025/03/Sturm_und_Stille7_web.jpg", alt: "Sturm und Stille 2025 - Foto 7" },
      { src: "/archive/2025/03/Sturm_und_Stille8_web.jpg", alt: "Sturm und Stille 2025 - Foto 8" },
      { src: "/archive/2025/03/Sturm_und_Stille9_web.jpg", alt: "Sturm und Stille 2025 - Foto 9" },
      { src: "/archive/2025/03/Sturm_und_Stille10_web.jpg", alt: "Sturm und Stille 2025 - Foto 10" },
      { src: "/archive/2025/03/Sturm_und_Stille11_web.jpg", alt: "Sturm und Stille 2025 - Foto 11" },
      { src: "/archive/2025/03/Sturm_und_Stille12_web.jpg", alt: "Sturm und Stille 2025 - Foto 12" },
      { src: "/archive/2025/03/Sturm_und_Stille13_web.jpg", alt: "Sturm und Stille 2025 - Foto 13" },
      { src: "/archive/2025/03/Sturm_und_Stille14_web.jpg", alt: "Sturm und Stille 2025 - Foto 14" },
      { src: "/archive/2025/03/Sturm_und_Stille15_web.jpg", alt: "Sturm und Stille 2025 - Foto 15" },
      { src: "/archive/2025/03/Sturm_und_Stille16_web.jpg", alt: "Sturm und Stille 2025 - Foto 16" },
      { src: "/archive/2025/03/Sturm_und_Stille17_web.jpg", alt: "Sturm und Stille 2025 - Foto 17" },
      { src: "/archive/2025/03/Sturm_und_Stille18_web.jpg", alt: "Sturm und Stille 2025 - Foto 18" },
      { src: "/archive/2025/03/Sturm_und_Stille19_web.jpg", alt: "Sturm und Stille 2025 - Foto 19" },
      { src: "/archive/2025/03/Sturm_und_Stille20_web.jpg", alt: "Sturm und Stille 2025 - Foto 20" },
      { src: "/archive/2025/03/Sturm_und_Stille21_web.jpg", alt: "Sturm und Stille 2025 - Foto 21" },
      { src: "/archive/2025/03/Sturm_und_Stille22_web.jpg", alt: "Sturm und Stille 2025 - Foto 22" },
      { src: "/archive/2025/03/Sturm_und_Stille23_web.jpg", alt: "Sturm und Stille 2025 - Foto 23" },
      { src: "/archive/2025/04/Kantatengottesdienst1_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 1" },
      { src: "/archive/2025/04/Kantatengottesdienst2_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 2" },
      { src: "/archive/2025/04/Kantatengottesdienst3_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 3" },
      { src: "/archive/2025/04/Kantatengottesdienst4_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 4" },
      { src: "/archive/2025/04/Kantatengottesdienst5_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 5" },
      { src: "/archive/2025/04/Kantatengottesdienst6_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 6" },
      { src: "/archive/2025/04/Kantatengottesdienst7_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 7" },
      { src: "/archive/2025/04/Kantatengottesdienst8_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 8" },
      { src: "/archive/2025/04/Kantatengottesdienst9_web.jpg", alt: "Kantatengottesdienst 2025 - Foto 9" }
    ]
  },
  {
    year: 2024,
    theme: "Apropos Arkadien...",
    description: "2024 fand das Festival unter dem Motto Apropos Arkadien... statt.\n" +
        "\n" +
        "Arkadien, als mythologische Idylle, als das Land unserer Sehnsucht, in dem Menschen und Tiere im Einklang mit der Natur leben, hat Künstler seit jeher fasziniert. " +
        "Zu Beginn des 19. Jahrhunderts ließen die Preußischen Könige Friedrich Wilhelm III. und Friedrich Wilhelm IV. die Landschaft zwischen Potsdam und Berlin, " +
        "die von der Havel, den anliegenden Seen und Wäldern geprägt ist, in eine weitläufige Park- und Kulturlandschaft umgestalten, die bis heute als 'Preußisches Arkadien' bekannt ist.\n" +
        "\n" +
        "Arkadien als persönlicher Sehnsuchtsort hat auch für uns heutzutage nicht an Aktualität verloren. Wo könnten wir dem besser nachspüren als in Wannsee, " +
        "mitten im Herzen des preußischen Arkadiens?",
    images: [
    ]
  }
]

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, yearIndex: number, imageIndex: number} | null>(null)

  // Get all images in a flat array for navigation
  const allImages = archiveData.flatMap((yearData, yearIndex) =>
    yearData.images.map((image, imageIndex) => ({...image, yearIndex, imageIndex}))
  )

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const currentIndex = allImages.findIndex(img =>
      img.yearIndex === selectedImage.yearIndex && img.imageIndex === selectedImage.imageIndex
    )

    if (currentIndex === -1) return

    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1
    }

    setSelectedImage(allImages[newIndex])
  }, [selectedImage, allImages])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return

      switch (e.key) {
        case 'Escape':
          setSelectedImage(null)
          break
        case 'ArrowLeft':
          navigateImage('prev')
          break
        case 'ArrowRight':
          navigateImage('next')
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, navigateImage])

  return (
    <main className="relative">
      <Navigation />
      <div className="min-h-screen water-bg">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display text-slate-800 dark:text-slate-200 mb-8 text-center">
              Archiv
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center mb-16 max-w-4xl mx-auto">
              Hier finden Sie vergangene Programme und Erinnerungen an die schönsten Momente
              des Musikfest Wannsee aus den vergangenen Jahren.
            </p>

            <div className="space-y-20">
              {archiveData.map((yearData, index) => (
                <div key={yearData.year} className="relative">
                  <div className="text-center mb-12">
                    <h2 className="text-xl md:text-3xl font-display text-slate-800 dark:text-slate-200 mb-8">
                      {yearData.year}: {yearData.theme}
                    </h2>
                  </div>

                  <div className="text-center mb-12">
                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-4xl mx-auto">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {yearData.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                      {yearData.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="aspect-square relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
                          onClick={() => setSelectedImage({...image, yearIndex: index, imageIndex})}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {index < archiveData.length - 1 && (
                    <div className="mt-20 flex justify-center">
                      <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Full-screen image overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[70] bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors flex items-center justify-center"
            style={{ width: '56px', height: '56px' }}
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[70] bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors flex items-center justify-center"
            style={{ width: '56px', height: '56px' }}
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[70] bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors flex items-center justify-center"
            style={{ width: '56px', height: '56px' }}
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={0}
              height={0}
              sizes="95vw"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  )
}