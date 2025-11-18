"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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

export default function ActualPage() {
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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-blue-800">Contenido Actual</h1>
            <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Volumen 2
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            Artículos y publicaciones de FA revista organizados por secciones
          </p>
        </div>

        {/* Imagen de la revista */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-72 md:w-64 md:h-96">
            <Image
              src="/portadav2.png"
              alt="Portada de FA revista - Volumen 2"
              fill
              className="object-contain drop-shadow-[0_6px_12px_rgba(30,64,175,0.25)]"
              priority
            />
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-300 pb-2">
                {section.name}
              </h2>
              
              {/* Artículos principales de la sección */}
              {section.articles.length > 0 && (
                <div className="space-y-4">
                  {section.articles.map((article) => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2 text-gray-900 leading-relaxed">
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
                            className="bg-blue-800 hover:bg-blue-900 text-white ml-4 flex-shrink-0"
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
                <div className="space-y-6 ml-4">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-700 border-b border-blue-200 pb-1">
                        {subsection.name}
                      </h3>
                      <div className="space-y-4">
                        {subsection.articles.map((article) => (
                          <Card key={article.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-2 text-gray-900 leading-relaxed">
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
                                  className="bg-blue-800 hover:bg-blue-900 text-white ml-4 flex-shrink-0"
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

        <div className="mt-12 text-center">
          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <p className="text-gray-600">
                Todos los artículos están disponibles para descarga en formato PDF.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
