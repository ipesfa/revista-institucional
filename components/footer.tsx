import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-white py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-800">Koulana</span>
          </Link>
          <p className="text-center text-sm text-gray-500 md:text-left">
            Revista Académica del IPES FA. Publicación semestral de temas de educación y cultura.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <nav className="flex gap-4">
            <Link href="/acerca-de" className="text-sm text-gray-500 hover:text-blue-800">
              Sobre la revista
            </Link>
            <Link href="/acerca-de?tab=contacto" className="text-sm text-gray-500 hover:text-blue-800">
              Contacto
            </Link>
          </nav>
          <p className="text-center text-xs text-gray-400 md:text-right">
            © {new Date().getFullYear()} Koulana. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
