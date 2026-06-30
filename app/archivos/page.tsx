"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Article {
  id: string
  title: string
  authors: string[]
  section: string
  pdfUrl: string
  dossierEditor?: string
}

interface Section {
  name: string
  articles: Article[]
}

interface Volume {
  title: string
  subtitle: string
  image: string
  sections: Section[]
}

const volumen2: Volume = {
  title: "Lo Fantástico. Vacilación del sentido común",
  subtitle: "Volumen 2",
  image: "/portadav2.png",
  sections: [
    {
      name: "Dossier - Lo Fantástico. Vacilación del sentido común",
      articles: [
        {
          id: "v2-dossier-1",
          title: "Presentación",
          authors: ["Miguel Fanchovich", "Mario Hernández"],
          section: "Dossier",
          pdfUrl: "/PDF/V2/articulo_individual_fanchovich_hernandez.pdf",
          dossierEditor: "Mariano Malizia"
        }
      ]
    },
    {
      name: "Prácticas y experiencias educativas",
      articles: [
        {
          id: "v2-practicas-1",
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
          id: "v2-ensayos-1",
          title: 'De la sociedad del conocimiento a la inteligencia artificial: ¿el fin de la "historia interminable" y el triunfo de "los ladrones del tiempo"?',
          authors: ["Ricardo Forster"],
          section: "Ensayos académicos",
          pdfUrl: "/PDF/V2/articulo_individual_forster.pdf"
        },
        {
          id: "v2-ensayos-2",
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
          id: "v2-literatura-1",
          title: "El camino de regreso",
          authors: ["Mario Hernández"],
          section: "Literaturas Breves",
          pdfUrl: "/PDF/V2/articulo_individual_mario_hernandez.pdf"
        }
      ]
    },
    {
      name: "Artículos libres - Prácticas y experiencias educativas",
      articles: [
        {
          id: "v2-libres-practicas-1",
          title: "La enseñanza de la historia argentina como desafío. Estudio de caso enfocado en la experiencia del Profesorado para la Educación Primaria del I.P.E.S. Florentino Ameghino de la ciudad de Ushuaia",
          authors: ["Shion-en Cenatiempo"],
          section: "Artículos libres - Prácticas y experiencias educativas",
          pdfUrl: "/PDF/V2/articulo_individual_cenatiempo.pdf"
        }
      ]
    },
    {
      name: "Artículos libres - Artículos científicos",
      articles: [
        {
          id: "v2-libres-cientificos-1",
          title: "Experiencias estudiantiles en contextos de crisis. El caso de la intervención ministerial en un instituto de formación docente de Ushuaia",
          authors: ["Paola N. Vega"],
          section: "Artículos libres - Artículos científicos",
          pdfUrl: "/PDF/V2/articulo_individual_paola_vega.pdf"
        },
        {
          id: "v2-libres-cientificos-2",
          title: "Fuentes para enseñar geografía local en Ushuaia: perspectivas docentes en la escuela secundaria",
          authors: ["Natalia Cañete", "Daniel Paoloni", "Silvia Torre", "Mariana Damiani"],
          section: "Artículos libres - Artículos científicos",
          pdfUrl: "/PDF/V2/articulo_individual_canete_et_al.pdf"
        }
      ]
    },
    {
      name: "Artículos libres - Ensayos académicos",
      articles: [
        {
          id: "v2-libres-ensayos-1",
          title: "La Cultura Sorda argentina en clave Pachakutik: de la colonización pedagógica a la praxis de la Ley 27.710",
          authors: ["Lucila Otero Aráoz"],
          section: "Artículos libres - Ensayos académicos",
          pdfUrl: "/PDF/V2/articulo_individual_lucila_otero_araoz.pdf"
        },
        {
          id: "v2-libres-ensayos-2",
          title: "La etnostalgia o la revisión de las notas guardadas en un cajón",
          authors: ["Mariano López Rasch"],
          section: "Artículos libres - Ensayos académicos",
          pdfUrl: "/PDF/V2/articulo_individual_lopez_rasch.pdf"
        }
      ]
    },
    {
      name: "Dilemas y coyunturas",
      articles: [
        {
          id: "v2-dilemas-1",
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
          id: "v2-entrevistas-1",
          title: 'Ricardo Forster: "El final de un libro exquisito es, a la vez, felicidad y vacío"',
          authors: ["Erica Garrido", "Emiliano Sánchez Narvarte"],
          section: "Entrevistas",
          pdfUrl: "/PDF/V2/articulo_individual_entrevista_forster.pdf"
        }
      ]
    }
  ]
}

const volumen1: Volume = {
  title: "Prácticas educativas y resistencia cultural ante la ofensiva liberal-conservadora",
  subtitle: "Volumen 1",
  image: "/tapa_ISSN.png",
  sections: [
    {
      name: "Presentación",
      articles: [
        {
          id: "v1-presentacion-1",
          title: "Armemos una revista",
          authors: ["Emiliano Sánchez Narvarte"],
          section: "Presentación",
          pdfUrl: "/PDF/V1/articulo_individual_sanchez_narvarte_nuevo.pdf"
        }
      ]
    },
    {
      name: "Prácticas y experiencias educativas",
      articles: [
        {
          id: "v1-practicas-1",
          title: "Las narrativas de experiencias pedagógicas: un modo de construir huellas en la formación docente poniendo en diálogo la práctica y la subjetividad",
          authors: ["María Valeria Busaniche"],
          section: "Prácticas y experiencias educativas",
          pdfUrl: "/PDF/V1/articulo_individual_busaniche_nuevo.pdf"
        }
      ]
    },
    {
      name: "Ensayos académicos",
      articles: [
        {
          id: "v1-ensayos-1",
          title: "Revolución y Negocios. El germen de las élites terratenientes y su papel en la etapa revolucionaria",
          authors: ["Mario Hernández"],
          section: "Ensayos académicos",
          pdfUrl: "/PDF/V1/articulo_individual_mario_hernandez_nuevo.pdf"
        },
        {
          id: "v1-ensayos-2",
          title: "Experiencias de militancia política en la transición a la democracia en Tierra del Fuego",
          authors: ["Gabriela Fernández", "Luciana Larrondo"],
          section: "Ensayos académicos",
          pdfUrl: "/PDF/V1/articulo_individual_fernandez_larrondo_nuevo.pdf"
        },
        {
          id: "v1-ensayos-3",
          title: "La Moneda Popper: Una experiencia de acuñación y circulación de moneda en Tierra del Fuego a fines del siglo XIX",
          authors: ["Mariano Malizia"],
          section: "Ensayos académicos",
          pdfUrl: "/PDF/V1/articulo_individual_malizia_nuevo.pdf"
        }
      ]
    },
    {
      name: "Dilemas y coyunturas",
      articles: [
        {
          id: "v1-dilemas-1",
          title: "No es sólo ciencia lo que nos pasa con la transmisión del CONICET",
          authors: ["Rocío Arozarena"],
          section: "Dilemas y coyunturas",
          pdfUrl: "/PDF/V1/articulo_individual_arozarena_nuevo.pdf"
        }
      ]
    },
    {
      name: "Literaturas breves",
      articles: [
        {
          id: "v1-literatura-1",
          title: "El porqué de la lluvia y otras heridas",
          authors: ["Paula Marrafini"],
          section: "Literaturas breves",
          pdfUrl: "/PDF/V1/articulo_individual_marrafini_literatura_nuevo.pdf"
        },
        {
          id: "v1-literatura-2",
          title: "Reina sin pueblo",
          authors: ["Mario Hernández"],
          section: "Literaturas breves",
          pdfUrl: "/PDF/V1/articulo_individual_hernandez_literatura_nuevo.pdf"
        }
      ]
    }
  ]
}

const volumes = [volumen2, volumen1]

export default function ArchivosPage() {
  const handleDownload = (pdfUrl: string, title: string) => {
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
          <h1 className="text-4xl font-bold text-blue-800 mb-6">Archivos</h1>
          <p className="text-gray-600 text-lg mb-8">
            Acceso a las publicaciones anteriores de la revista FA, organizadas por volumen.
          </p>
        </div>

        {volumes.map((volume, volumeIndex) => (
          <div key={volumeIndex} className="mb-16">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <h2 className="text-xl md:text-2xl font-bold text-blue-800 break-words">{volume.title}</h2>
                <span className="bg-blue-800 text-white px-4 py-2 rounded-full text-base font-semibold inline-block">
                  {volume.subtitle}
                </span>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-56 md:w-48 md:h-64">
                <Image
                  src={volume.image}
                  alt={`Portada de FA revista - ${volume.subtitle}`}
                  fill
                  className="object-contain drop-shadow-[0_6px_12px_rgba(30,64,175,0.25)]"
                />
              </div>
            </div>

            <div className="space-y-8">
              {volume.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-300 pb-2">
                    {section.name}
                  </h3>
                  <div className="space-y-4">
                    {section.articles.map((article) => (
                      <Card key={article.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2 text-gray-900 leading-relaxed">
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
                            <Button
                              onClick={() => handleDownload(article.pdfUrl, article.title)}
                              className="bg-blue-800 hover:bg-blue-900 text-white ml-4 flex-shrink-0"
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

            {volumeIndex < volumes.length - 1 && (
              <hr className="mt-16 border-blue-200" />
            )}
          </div>
        ))}

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
