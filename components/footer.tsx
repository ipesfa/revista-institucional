import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-white py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6">
        {/* Left: Description */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-gray-500 max-w-md">
            Revista Académica del IPES FA. Publicación semestral de temas de educación y cultura.
          </p>
        </div>

        {/* Center: Logo */}
        <div className="flex items-center justify-center">
          <div className="relative h-16 w-16">
            <Image src="/logo-ipesfa.png" alt="Logo IPES FA" fill className="object-contain" />
          </div>
        </div>

        {/* Right: Navigation and Copyright */}
        <div className="flex-1 flex flex-col items-center gap-4 md:items-end">
          <nav className="flex gap-6">
            <Link href="/acerca-de" className="text-sm text-gray-500 hover:text-blue-800 transition-colors">
              Sobre la revista
            </Link>
            <Link href="/acerca-de?tab=contacto" className="text-sm text-gray-500 hover:text-blue-800 transition-colors">
              Contacto
            </Link>
            <Link href="/convocatoria" className="text-sm text-gray-500 hover:text-blue-800 transition-colors">
              Convocatoria
            </Link>
          </nav>
          <p className="text-center text-xs text-gray-400 md:text-right">
            © {new Date().getFullYear()} Revista FA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
