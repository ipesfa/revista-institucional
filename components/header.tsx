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
    <header className="sticky top-0 z-50 w-full bg-blue-800">
      {/* Upper section with logos and navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Center: FA Revista logo */}
          <div className="w-full flex justify-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-48">
                <Image src="/falogo.png" alt="Logo FA Revista" fill className="object-contain" />
              </div>
            </Link>
          </div> 

          {/* Right: Navigation menu (desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/actual" 
              className="text-sm font-medium text-white hover:text-blue-200 transition-colors tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
            >
              Actual
            </Link>
            {/*
            <Link 
              href="/archivos" 
              className="text-sm font-medium text-white hover:text-blue-200 transition-colors tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
            >
              Archivos
            </Link>
            */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-1 px-2 text-sm font-medium text-white hover:text-blue-200 transition-colors tracking-wide bg-transparent hover:bg-transparent border-none outline-none focus:outline-none focus-visible:outline-none shadow-none ring-0 focus:ring-0 data-[state=open]:outline-none data-[state=open]:ring-0 data-[state=open]:shadow-none"
                >
                  <span>Acerca de</span>
                  <ChevronDown className="h-4 w-4 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-blue-800 border-blue-900 outline-none ring-0 shadow-none border-none focus:outline-none focus-visible:outline-none data-[state=open]:outline-none data-[state=open]:ring-0 data-[state=open]:shadow-none">
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Sobre la revista</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=equipo-editorial" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Equipo editorial</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=politicas-de-secciones" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Políticas de secciones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=directrices-para-autores" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Directrices para autores</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/acerca-de?tab=contacto" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Contacto</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/acerca-de?tab=directrices-para-autores"
              className="text-sm font-medium text-white hover:text-blue-200 transition-colors tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
            >
              Directrices
            </Link>
            <Link
              href="/convocatoria"
              className="text-sm font-medium text-white hover:text-blue-200 transition-colors tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
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
      {/* Removed as per instructions */}
    </header>
  )
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 text-white">
          <Menu className="h-5 w-5 text-white" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px] bg-blue-800 border-blue-900">
        <DropdownMenuItem asChild>
          <Link href="/actual" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Actual</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          {/* <Link href="/archivos" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Archivos</Link> */}
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Sobre la revista</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=equipo-editorial" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Equipo editorial</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=politicas-de-secciones" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Políticas de secciones</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=directrices-para-autores" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Directrices para autores</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=contacto" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Contacto</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/acerca-de?tab=directrices-para-autores" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Directrices</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/convocatoria" className="text-sm font-medium tracking-wide text-white hover:text-blue-200">Convocatoria</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
