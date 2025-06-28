import type React from "react"
import type { Metadata } from "next"
import { Marcellus, Montserrat_Alternates, WindSong } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Marcellus({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
})

const cormorantGaramond = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const cinzel = Marcellus({
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
  description: "Experience the harmony of classical music by the beautiful waters of Wannsee",
    generator: 'v0.dev'
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
