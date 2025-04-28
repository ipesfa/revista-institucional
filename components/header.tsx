"use client"

import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">Koulana</span>
            <span className="ml-2 hidden text-sm text-gray-600 sm:inline-block">Revista Académica del IPES FA</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <MobileMenu />

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/actual" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-800">
            Actual
          </Link>
          <Link href="/archivos" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-800">
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
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-800"
          >
            Convocatoria
          </Link>
        </nav>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <div className="md:hidden">
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
    </div>
  )
}
