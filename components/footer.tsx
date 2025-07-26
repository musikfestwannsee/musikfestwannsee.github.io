import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Kontakt</h3>
            <p className="text-slate-300 mb-4">
              Schreiben Sie uns eine Email: <br/>
              <b>musikfest.wannsee@gmail.de</b>
            </p>
            <p className="text-slate-300 mb-4">
              Und besuchen Sie uns auf Social Media
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/people/Musikfest-Wannsee/61558670768402/" className="text-white hover:text-teal-400 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="http://www.instagram.com/musikfestwannsee" className="text-white hover:text-teal-400 transition-colors">
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
            <a href="impressum" className="text-slate-300 hover:text-white transition-colors">
              <h3 className="text-xl font-bold mb-4 text-teal-400">Impressum</h3>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Downloads</h3>
              <p>
                <a 
                  href="Flyer_Musikfest_Wannsee_2025.pdf"
                  download="Flyer_Musikfest_Wannsee_2025.pdf"
                  className="text-slate-300 hover:text-white transition-colors">
                  Flyer 2025
                </a>
              </p>
              <p>
                <a 
                  href="Flyer_Musikfest_Wannsee_2024.pdf"
                  download="Flyer_Musikfest_Wannsee_2024.pdf"
                  className="text-slate-300 hover:text-white transition-colors">
                  Flyer 2024
                </a>
              </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Musikfest Wannsee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
