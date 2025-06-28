"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Program", href: "/program" },
  { name: "Artists", href: "/artists" },
  { name: "Locations", href: "/locations" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Tickets", href: "/tickets" },
  { name: "Team", href: "/team" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md dark:bg-slate-900/95" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Music className={cn("h-8 w-8", scrolled ? "text-primary" : "text-white")} />
            <span className={cn("text-2xl font-accent tracking-wide", scrolled ? "text-primary" : "text-white")}>
              MUSIKFEST WANNSEE
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              scrolled ? "text-primary" : "text-white",
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-base uppercase font-accent transition-colors elegant-underline",
                pathname === item.href
                  ? scrolled
                    ? "text-primary"
                    : "text-white"
                  : scrolled
                    ? "text-slate-700 hover:text-primary"
                    : "text-white/80 hover:text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            className={cn(
              "uppercase font-accent",
              scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white hover:bg-white/90 text-primary",
            )}
          >
            <Link href="/tickets">Buy Tickets</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Music className="h-8 w-8 text-primary" />
              <span className="text-2xl font-accent tracking-wide text-primary">MUSIKFEST WANNSEE</span>
            </Link>
            <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-4 text-base uppercase font-accent hover:bg-gray-50",
                      pathname === item.href ? "text-primary" : "text-slate-700",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white uppercase font-accent">
                  <Link href="/tickets" onClick={() => setMobileMenuOpen(false)}>
                    Buy Tickets
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
