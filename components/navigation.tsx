"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Programm", href: "#program" },
    { name: "Künstler:innen", href: "#artists" },
    { name: "Veranstaltungsorte", href: "#locations" },
    { name: "Sponsoren", href: "#sponsors" },
    { name: "Tickets", href: "#tickets" },
    { name: "Team", href: "#team" },
    { name: "Kontakt", href: "#footer" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-beige-50/90 backdrop-blur-md shadow-sm dark:bg-slate-900/90" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white dark:text-teal-400">
            Musikfest Wannsee
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto px-4 py-4 bg-white dark:bg-slate-900 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-slate-700 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#tickets"
              className="text-xl font-medium text-slate-700 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400 py-2"
              onClick={() => setIsOpen(false)}
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">Tickets</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
