import type React from "react"
import type { Metadata } from "next"
import { Marcellus, Marcellus_SC, WindSong } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Marcellus({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
})

const cormorantGaramond = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
})

const cinzel = Marcellus({
  subsets: ["latin"],
  variable: "--font-text",
  weight: "400",
})

const marcellus = Marcellus_SC({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "400",
})

const whisper = WindSong({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwriting",
})

export const metadata: Metadata = {
  title: "Musikfest Wannsee",
  description: "Das Musikfestival für Lied, Kammer- und Vokalmusik am Wannsee",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${cinzel.variable} ${whisper.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
