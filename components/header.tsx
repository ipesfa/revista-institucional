"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Upper section with logos and navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left: Institutional logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-4">
                <Image src="/logo-ipesfa.png" alt="Logo IPES FA" fill className="object-contain" />
              </div>
              <span className="font-sans text-3xl md:text-4xl font-semibold text-blue-800">FA Revista </span>
            </Link>
          </div>

          {/* Right: Navigation menu (desktop) */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/actual" className="text-sm font-medium text-gray-700 hover:text-blue-800 transition-colors">
              Actual
            </Link>
            <Link href="/archivos" className="text-sm font-medium text-gray-700 hover:text-blue-800 transition-colors">
              Archivos
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-2">
                  <span className="text-sm font-medium text-gray-700">Acerca de</span>
                  <ChevronDown className="h-4 w-4 text-gray-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de">Sobre la revista</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=equipo-editorial">Equipo editorial</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=politicas-de-secciones">Políticas de secciones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=directrices-para-autores">Directrices para autores</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=contacto">Contacto</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/convocatoria"
              className="text-sm font-medium text-gray-700 hover:text-blue-800 transition-colors"
            >
              Convocatoria
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Blue strip with title and journal cover - only shows on homepage */}
      {isHomePage && (
        <div
          className={`bg-blue-800 transition-all duration-300 ease-in-out relative ${
            scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100 py-3"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Journal Cover Image - perfectly centered in the blue strip */}
              <div className="flex items-center justify-center h-[160px] flex-shrink-0">
                <div className="relative w-[100px] h-[140px]">
                  <Image
                    src="/portada-koulana.png"
                    alt="Portada de la revista Koulana"
                    width={100}
                    height={140}
                    className="object-contain shadow-md"
                  />
                </div>
              </div>

              {/* Journal Title */}
              <div className="flex-grow">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-sans font-normal text-white leading-tight">
                  Revista Académica del IPES FA
                </h1>

                {/* Submit Article Link - Desktop */}
                <div className="hidden md:block mt-2">
                  <Link href="/convocatoria" className="inline-flex items-center text-sm text-white hover:underline">
                    Enviar artículo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Submit Article Link - Mobile */}
              <div className="md:hidden w-full">
                <Link href="/convocatoria" className="inline-flex items-center text-sm text-white hover:underline">
                  Enviar artículo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem asChild>
          <Link href="/actual">Actual</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/archivos">Archivos</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de">Sobre la revista</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=equipo-editorial">Equipo editorial</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=politicas-de-secciones">Políticas de secciones</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=directrices-para-autores">Directrices para autores</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=contacto">Contacto</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/convocatoria">Convocatoria</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
