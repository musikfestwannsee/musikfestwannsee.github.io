"use client"

import { useState, useEffect, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { archiveImages2025 } from "@/data/archiveImages"

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
    images: archiveImages2025
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
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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