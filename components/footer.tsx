import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Musikfest Wannsee</h3>
            <p className="text-slate-300 mb-4">
              A celebration of classical music in the beautiful setting of Berlin's Wannsee lake.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-teal-400 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-teal-400 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-teal-400 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-teal-400 transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#program" className="text-slate-300 hover:text-white transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="#artists" className="text-slate-300 hover:text-white transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="#locations" className="text-slate-300 hover:text-white transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <Link href="#tickets" className="text-slate-300 hover:text-white transition-colors">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  About the Festival
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-slate-300 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Newsletter</h3>
            <p className="text-slate-300 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-md text-white font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Musikfest Wannsee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
