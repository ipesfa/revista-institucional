"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Article {
  id: string
  title: string
  authors: string[]
  section: string
  pdfUrl?: string
  dossierEditor?: string
}

interface Section {
  name: string
  articles: Article[]
  subsections?: Section[]
}

const sections: Section[] = [
  {
    name: "Dossier - Lo Fantástico. Vacilación del sentido común",
    articles: [
      {
        id: "dossier-1",
        title: "Presentación",
        authors: ["Miguel Fanchovich", "Mario Hernández"],
        section: "Dossier - Lo Fantástico. Vacilación del sentido común",
        pdfUrl: "/PDF/V2/articulo_individual_fanchovich_hernandez.pdf",
        dossierEditor: "Mariano Malizia"
      }
    ]
  },
  {
    name: "Prácticas y experiencias educativas",
    articles: [
      {
        id: "practicas-1",
        title: "Avatares: la matemática como aventura fantástica. Experiencia interdisciplinaria en la formación docente",
        authors: ["Soledad Cruz", "Vanesa De Las Vegas"],
        section: "Prácticas y experiencias educativas",
        pdfUrl: "/PDF/V2/articulo_individual_dela_cruz_delas_vegas.pdf"
      }
    ]
  },
  {
    name: "Ensayos académicos",
    articles: [
      {
        id: "ensayos-1",
        title: 'De la sociedad del conocimiento a la inteligencia artificial: ¿el fin de la "historia interminable" y el triunfo de "los ladrones del tiempo"?',
        authors: ["Ricardo Forster"],
        section: "Ensayos académicos",
        pdfUrl: "/PDF/V2/articulo_individual_forster.pdf"
      },
      {
        id: "ensayos-2",
        title: "Mafalda vs. las sagas de fantasía: 16 notas sobre la organización de la producción literaria del continente americano y un gol de Maradona",
        authors: ["Alfredo Lèal"],
        section: "Ensayos académicos",
        pdfUrl: "/PDF/V2/articulo_individual_alfredo_leal.pdf"
      }
    ]
  },
  {
    name: "Literaturas Breves",
    articles: [
      {
        id: "literatura-1",
        title: "El camino de regreso",
        authors: ["Mario Hernández"],
        section: "Literaturas Breves",
        pdfUrl: "/PDF/V2/articulo_individual_mario_hernandez.pdf"
      }
    ]
  },
  {
    name: "Artículos libres",
    articles: [],
    subsections: [
      {
        name: "Prácticas y experiencias educativas",
        articles: [
          {
            id: "libres-practicas-1",
            title: "La enseñanza de la historia argentina como desafío. Estudio de caso enfocado en la experiencia del Profesorado para la Educación Primaria del I.P.E.S. Florentino Ameghino de la ciudad de Ushuaia",
            authors: ["Shion-en Cenatiempo"],
            section: "Artículos libres - Prácticas y experiencias educativas",
            pdfUrl: "/PDF/V2/articulo_individual_cenatiempo.pdf"
          }
        ]
      },
      {
        name: "Artículos científicos",
        articles: [
          {
            id: "libres-cientificos-1",
            title: "Experiencias estudiantiles en contextos de crisis. El caso de la intervención ministerial en un instituto de formación docente de Ushuaia",
            authors: ["Paola N. Vega"],
            section: "Artículos libres - Artículos científicos",
            pdfUrl: "/PDF/V2/articulo_individual_paola_vega.pdf"
          },
          {
            id: "libres-cientificos-2",
            title: "Fuentes para enseñar geografía local en Ushuaia: perspectivas docentes en la escuela secundaria",
            authors: ["Natalia Cañete", "Daniel Paoloni", "Silvia Torre", "Mariana Damiani"],
            section: "Artículos libres - Artículos científicos",
            pdfUrl: "/PDF/V2/articulo_individual_canete_et_al.pdf"
          }
        ]
      },
      {
        name: "Ensayos académicos",
        articles: [
          {
            id: "libres-ensayos-1",
            title: "La Cultura Sorda argentina en clave Pachakutik: de la colonización pedagógica a la praxis de la Ley 27.710",
            authors: ["Lucila Otero Aráoz"],
            section: "Artículos libres - Ensayos académicos",
            pdfUrl: "/PDF/V2/articulo_individual_lucila_otero_araoz.pdf"
          },
          {
            id: "libres-ensayos-2",
            title: "La etnostalgia o la revisión de las notas guardadas en un cajón",
            authors: ["Mariano López Rasch"],
            section: "Artículos libres - Ensayos académicos",
            pdfUrl: "/PDF/V2/articulo_individual_lopez_rasch.pdf"
          }
        ]
      }
    ]
  },
  {
    name: "Dilemas y coyunturas",
    articles: [
      {
        id: "dilemas-1",
        title: "Dina Picotti, por siempre! Un legado de pensamiento y humanidad",
        authors: ["Sergio Barrionuevo", "Sebastián Castiñeira", "Noelia Lobo"],
        section: "Dilemas y coyunturas",
        pdfUrl: "/PDF/V2/articulo_individual_barrionuevo_castineira_lobo.pdf"
      }
    ]
  },
  {
    name: "Entrevistas",
    articles: [
      {
        id: "entrevistas-1",
        title: 'Ricardo Forster: "El final de un libro exquisito es, a la vez, felicidad y vacío"',
        authors: ["Erica Garrido", "Emiliano Sánchez Narvarte"],
        section: "Entrevistas",
        pdfUrl: "/PDF/V2/articulo_individual_entrevista_forster.pdf"
      }
    ]
  }
]

export default function Home() {
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string } | null>(null)

  const handleDownload = (pdfUrl: string, title: string) => {
    if (!pdfUrl) {
      console.log('PDF no disponible aún para:', title)
      return
    }
    console.log('Descargando:', title)
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = (pdfUrl: string, title: string) => {
    if (!pdfUrl) {
      console.log('PDF no disponible aún para:', title)
      return
    }
    setPreviewPdf({ url: pdfUrl, title })
  }

  return (
    <div className="flex flex-col">
      {/* Journal Title and Submit Article Link - static on main page */}
      <section className="bg-blue-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Journal Cover Image - perfectly centered in the blue strip */}
            <div className="flex items-center justify-center h-[160px] flex-shrink-0">
              <div className="relative w-[100px] h-[140px]">
                <Image
                  src="/tapa_ISSN.png"
                  alt="Portada de la revista Koulana"
                  width={100}
                  height={140}
                  className="object-contain shadow-md"
                />
              </div>
            </div>
            {/* Journal Title */}
            <div className="flex-grow">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal text-white leading-tight">
                FA revista
              </h1>
              <p className="text-sm md:text-base text-white/90 mt-1">
                Revista académica del IPES Florentino Ameghino
              </p>
              <p className="text-xs md:text-sm text-white/80 mt-1">
                ISSN 3072-8835
              </p>
            </div>
            {/* Submit Article Link - Desktop */}
            <div className="hidden md:flex items-end flex-shrink-0 pb-6">
              <Link href="/convocatoria" className="inline-flex items-center text-base font-medium text-white hover:underline">
                Enviar artículo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1.5 h-4.5 w-4.5"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
            {/* Submit Article Link - Mobile */}
            <div className="md:hidden w-full">
              <Link href="/convocatoria" className="inline-flex items-center text-base font-medium text-white hover:underline">
                Enviar artículo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1.5 h-4.5 w-4.5"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Sección de la Tapa - Fondo Celeste */}
        <section className="bg-blue-50 pt-4 md:pt-6 pb-4 md:pb-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Contenedor con texto e imagen */}
              <div className="relative flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-12 py-2 md:py-4 lg:py-6">
                {/* Imagen de la revista - Elemento principal */}
                <div className="relative flex-shrink-0">
                  <div className="relative inline-block z-10 group">
                  {/* Recuadro sombra detrás de la imagen - desaparece en hover */}
                  <div className="hidden md:block absolute inset-0 z-0 -translate-x-[22px] translate-y-[10px] bg-blue-800 transition-opacity duration-500 group-hover:opacity-0"></div>
                  
                  {/* Imagen */}
                  <div 
                    className="relative z-10 transition-all duration-500 md:group-hover:translate-y-0 md:group-hover:filter-none"
                    style={{
                      filter: 'drop-shadow(0 12px 32px rgba(30, 64, 175, 0.25)) drop-shadow(0 4px 12px rgba(30, 64, 175, 0.15))',
                      transform: 'translateY(6px)'
                    }}
                  >
                    <Image
                      src="/portadav2.png"
                      alt="Portada de FA revista - Volumen 2: Lo Fantástico. Vacilación del sentido común"
                      width={180}
                      height={340}
                      className="w-[180px] h-[340px] md:w-[260px] md:h-[440px] lg:w-[320px] lg:h-[540px] transform md:group-hover:scale-[1.02] transition-transform duration-500 object-contain"
                      style={{ 
                        display: 'block',
                        backgroundColor: 'transparent'
                      }}
                      priority
                    />
                  </div>
                </div>
                </div>

                {/* Texto centrado */}
                <div className="flex-1 md:max-w-md text-center ml-12 md:ml-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                    Número Actual
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700">
                    Noviembre de 2025  |  Año 1  |  Vol. 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enlace para ver índice completo */}
        <div className="bg-blue-50 py-2 md:py-3">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-end pr-16 md:pr-20 lg:pr-24">
              <button
                onClick={() => {
                  const articulosSection = document.getElementById('articulos-seccion')
                  if (articulosSection) {
                    articulosSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-blue-800 hover:text-blue-900 font-medium text-lg transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                Ver el índice completo <span className="text-2xl">∨</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secciones del Volumen - Fondo Blanco */}
        <section id="articulos-seccion" className="bg-white pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-10">
                {sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 border-b-2 border-blue-300 pb-3">
                      {section.name}
                    </h2>
                    
                    {/* Artículos principales de la sección */}
                    {section.articles.length > 0 && (
                      <div className="space-y-4">
                        {section.articles.map((article) => (
                          <Card key={article.id} className="hover:shadow-lg transition-shadow border-blue-100">
                            <CardHeader>
                              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div className="flex-1">
                                  <CardTitle className="text-lg md:text-xl mb-3 text-gray-900 leading-relaxed">
                                    {article.title}
                                  </CardTitle>
                                  {article.dossierEditor && (
                                    <div className="text-sm text-gray-600 mb-2">
                                      <span className="font-medium">Editor del Dossier:</span> {article.dossierEditor}
                                    </div>
                                  )}
                                  {article.authors.length > 0 && (
                                    <div className="text-sm text-gray-600 mb-2">
                                      <span className="font-medium">Autores:</span> {article.authors.join(', ')}
                                    </div>
                                  )}
                                  <div className="text-sm text-gray-500">
                                    <span className="font-medium">Sección:</span> {article.section}
                                  </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0 w-full md:w-auto">
                                  <Button
                                    onClick={() => article.pdfUrl ? handlePreview(article.pdfUrl, article.title) : console.log('PDF no disponible aún para:', article.title)}
                                    variant="outline"
                                    className="border-blue-800 text-blue-800 hover:bg-blue-50 flex-shrink-0 w-full sm:w-auto"
                                    disabled={!article.pdfUrl}
                                  >
                                    Vista preliminar
                                  </Button>
                                  <Button
                                    onClick={() => article.pdfUrl ? handleDownload(article.pdfUrl, article.title) : console.log('PDF no disponible aún para:', article.title)}
                                    className="bg-blue-800 hover:bg-blue-900 text-white flex-shrink-0 w-full sm:w-auto"
                                    disabled={!article.pdfUrl}
                                  >
                                    Descargar PDF
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    )}

                    {/* Subsecciones (para Artículos libres) */}
                    {section.subsections && section.subsections.length > 0 && (
                      <div className="space-y-6 ml-2 md:ml-4">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-800 border-b border-blue-300 pb-2">
                              {subsection.name}
                            </h3>
                            <div className="space-y-4">
                              {subsection.articles.map((article) => (
                                <Card key={article.id} className="hover:shadow-lg transition-shadow border-blue-100">
                                  <CardHeader>
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                      <div className="flex-1">
                                        <CardTitle className="text-lg md:text-xl mb-3 text-gray-900 leading-relaxed">
                                          {article.title}
                                        </CardTitle>
                                        {article.dossierEditor && (
                                          <div className="text-sm text-gray-600 mb-2">
                                            <span className="font-medium">Editor del Dossier:</span> {article.dossierEditor}
                                          </div>
                                        )}
                                        <div className="text-sm text-gray-600 mb-2">
                                          <span className="font-medium">Autores:</span> {article.authors.join(', ')}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          <span className="font-medium">Sección:</span> {article.section}
                                        </div>
                                      </div>
                                      <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0 w-full md:w-auto">
                                        <Button
                                          onClick={() => article.pdfUrl ? handlePreview(article.pdfUrl, article.title) : console.log('PDF no disponible aún para:', article.title)}
                                          variant="outline"
                                          className="border-blue-800 text-blue-800 hover:bg-blue-50 flex-shrink-0 w-full sm:w-auto"
                                          disabled={!article.pdfUrl}
                                        >
                                          Vista preliminar
                                        </Button>
                                        <Button
                                          onClick={() => article.pdfUrl ? handleDownload(article.pdfUrl, article.title) : console.log('PDF no disponible aún para:', article.title)}
                                          className="bg-blue-800 hover:bg-blue-900 text-white flex-shrink-0 w-full sm:w-auto"
                                          disabled={!article.pdfUrl}
                                        >
                                          Descargar PDF
                                        </Button>
                                      </div>
                                    </div>
                                  </CardHeader>
                                </Card>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Diseño editorial */}
              <div className="mt-2">
                <Card className="hover:shadow-lg transition-shadow border-blue-100">
                  <CardHeader>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Diseño editorial, maquetación y dirección visual:</span> Leonardo Nausan S.
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Footer informativo */}
              <div className="mt-12 text-center">
                <Card className="bg-gray-50 border-blue-200">
                  <CardContent className="pt-6">
                    <p className="text-gray-600">
                      Todos los artículos están disponibles para descarga en formato PDF.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 py-10 md:py-14">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-semibold text-blue-900">¿Listo para enviar su artículo?</h2>
              <p className="max-w-xl text-blue-900/80 text-base">Contribuya al conocimiento académico compartiendo sus investigaciones y reflexiones<br />en el campo de la educación y la cultura.</p>
              <div className="flex justify-center pt-2">
                <Link
                  href="https://forms.gle/w4r3ysMwzbv85ryd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-blue-800 border border-blue-800 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-800"
                >
                  Enviar artículo ahora
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* PDF Preview Dialog */}
      <Dialog open={!!previewPdf} onOpenChange={(open) => !open && setPreviewPdf(null)}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0 flex flex-col">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle className="text-lg font-semibold">{previewPdf?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 px-6 pb-6 overflow-hidden min-h-0">
            {previewPdf && (
              <iframe
                src={`${previewPdf.url}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border border-gray-200 rounded-lg shadow-sm"
                title={previewPdf.title}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
