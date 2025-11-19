"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Article {
  id: string
  title: string
  authors: string[]
  section: string
  pdfUrl?: string
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
        authors: [],
        section: "Dossier - Lo Fantástico. Vacilación del sentido común"
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
        section: "Prácticas y experiencias educativas"
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
        section: "Ensayos académicos"
      },
      {
        id: "ensayos-2",
        title: "Mafalda vs. las sagas de fantasía: 16 notas sobre la organización de la producción literaria del continente americano y un gol de Maradona",
        authors: ["Alfredo Lèal"],
        section: "Ensayos académicos"
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
        section: "Literaturas Breves"
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
            section: "Artículos libres - Prácticas y experiencias educativas"
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
            section: "Artículos libres - Artículos científicos"
          },
          {
            id: "libres-cientificos-2",
            title: "Fuentes para enseñar geografía local en Ushuaia: perspectivas docentes en la escuela secundaria",
            authors: ["Natalia Cañete", "Daniel Paoloni", "Silvia Torre", "Mariana Damiani"],
            section: "Artículos libres - Artículos científicos"
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
            section: "Artículos libres - Ensayos académicos"
          },
          {
            id: "libres-ensayos-2",
            title: "La etnostalgia o la revisión de las notas guardadas en un cajón",
            authors: ["Mariano López Rasch"],
            section: "Artículos libres - Ensayos académicos"
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
        section: "Dilemas y coyunturas"
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
        section: "Entrevistas"
      }
    ]
  }
]

export default function Home() {
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
      </section>

      <main>
        {/* Volumen Actual Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Imagen de la revista - Elemento principal */}
              <div className="relative flex justify-center items-center mb-24 py-14 md:py-18 lg:py-20">
                {/* Elementos decorativos laterales */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 lg:w-64 h-full opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent blur-3xl"></div>
                  <div className="absolute left-0 top-1/4 w-24 h-24 rounded-full bg-blue-200 opacity-10 blur-2xl"></div>
                  <div className="absolute left-8 bottom-1/4 w-16 h-16 rounded-full bg-blue-200 opacity-15 blur-xl"></div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-48 lg:w-64 h-full opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-200 to-transparent blur-3xl"></div>
                  <div className="absolute right-0 top-1/3 w-20 h-20 rounded-full bg-blue-200 opacity-10 blur-2xl"></div>
                  <div className="absolute right-8 bottom-1/3 w-14 h-14 rounded-full bg-blue-200 opacity-15 blur-xl"></div>
                </div>
                
                <div className="relative w-64 h-[480px] md:w-[360px] md:h-[600px] lg:w-[420px] lg:h-[680px] z-10">
                  {/* Fondo decorativo con gradiente */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl opacity-60 blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-2xl"></div>
                  
                  {/* Contenedor principal de la imagen */}
                  <div className="relative w-full h-full z-10 transform hover:scale-[1.02] transition-transform duration-500 rounded-2xl overflow-hidden">
                    <Image
                      src="/portadav2.png"
                      alt="Portada de FA revista - Volumen 2: Lo Fantástico. Vacilación del sentido común"
                      fill
                      className="object-contain"
                      style={{ 
                        filter: 'drop-shadow(0 20px 50px rgba(191, 219, 254, 0.6))',
                        borderRadius: '1rem'
                      }}
                      priority
                    />
                  </div>
                  
                  {/* Badge Volumen 2 */}
                  <div className="absolute -top-5 -right-5 z-20">
                    <span 
                      className="text-white px-6 py-3 rounded-full text-base font-bold shadow-2xl"
                      style={{ 
                        backgroundColor: '#69c7bb',
                        boxShadow: '0 10px 25px rgba(105, 199, 187, 0.5), 0 0 20px rgba(105, 199, 187, 0.3)',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      Volumen 2
                    </span>
                  </div>
                </div>
              </div>

              {/* Secciones del Volumen */}
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
                                  {article.authors.length > 0 && (
                                    <div className="text-sm text-gray-600 mb-2">
                                      <span className="font-medium">Autores:</span> {article.authors.join(', ')}
                                    </div>
                                  )}
                                  <div className="text-sm text-gray-500">
                                    <span className="font-medium">Sección:</span> {article.section}
                                  </div>
                                </div>
                                <Button
                                  onClick={() => article.pdfUrl ? handleDownload(article.pdfUrl, article.title) : console.log('PDF no disponible aún para:', article.title)}
                                  className="bg-blue-800 hover:bg-blue-900 text-white flex-shrink-0 w-full md:w-auto"
                                  disabled={!article.pdfUrl}
                                >
                                  Descargar PDF
                                </Button>
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
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-700 border-b border-blue-200 pb-2">
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
                                        <div className="text-sm text-gray-600 mb-2">
                                          <span className="font-medium">Autores:</span> {article.authors.join(', ')}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          <span className="font-medium">Sección:</span> {article.section}
                                        </div>
                                      </div>
                                      <Button
                                        onClick={() => article.pdfUrl ? handleDownload(article.pdfUrl, article.title) : console.log('PDF no disponible aún para:', article.title)}
                                        className="bg-blue-800 hover:bg-blue-900 text-white flex-shrink-0 w-full md:w-auto"
                                        disabled={!article.pdfUrl}
                                      >
                                        Descargar PDF
                                      </Button>
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
    </div>
  )
}
