"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Article {
  id: string
  title: string
  authors: string[]
  section: string
  pdfUrl: string
}

interface Section {
  name: string
  articles: Article[]
}

const sections: Section[] = [
  {
    name: "Presentación",
    articles: [
      {
        id: "presentacion-1",
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
        id: "practicas-1",
        title: "Las narrativas de experiencias pedagógicas: un modo de construir huellas en la formación docente poniendo en diálogo la práctica y la subjetividad",
        authors: ["María Valeria Busaniche"],
        section: "Prácticas y experiencias educativas",
        pdfUrl: "/PDF/V1/articulo_individual_busaniche_nuevo.pdf"
      },
    ]
  },
  {
    name: "Ensayos académicos",
    articles: [
      {
        id: "ensayos-1",
        title: "Revolución y Negocios. El germen de las élites terratenientes y su papel en la etapa revolucionaria",
        authors: ["Mario Hernández"],
        section: "Ensayos académicos",
        pdfUrl: "/PDF/V1/articulo_individual_mario_hernandez_nuevo.pdf"
      },
      {
        id: "ensayos-2",
        title: "Experiencias de militancia política en la transición a la democracia en Tierra del Fuego",
        authors: ["Gabriela Fernández", "Luciana Larrondo"],
        section: "Ensayos académicos",
        pdfUrl: "/PDF/V1/articulo_individual_fernandez_larrondo_nuevo.pdf"
      },
      {
        id: "ensayos-3",
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
        id: "dilemas-1",
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
        id: "literatura-1",
        title: "El porqué de la lluvia y otras heridas",
        authors: ["Paula Marrafini"],
        section: "Literaturas breves",
        pdfUrl: "/PDF/V1/articulo_individual_marrafini_literatura_nuevo.pdf"
      },
      {
        id: "literatura-2",
        title: "Reina sin pueblo",
        authors: ["Mario Hernández"],
        section: "Literaturas breves",
        pdfUrl: "/PDF/V1/articulo_individual_hernandez_literatura_nuevo.pdf"
      }
    ]
  }
]

export default function ActualPage() {
  const handleDownload = (pdfUrl: string, title: string) => {
    console.log('Descargando:', title)
    // Simular descarga - en producción esto descargaría el archivo real
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
              Volumen 1
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Prácticas educativas y resistencia cultural ante la ofensiva liberal-conservadora
          </h2>
          <p className="text-gray-600 text-lg">
            Artículos y publicaciones de FA revista organizados por secciones
          </p>
        </div>

        {/* Imagen de la revista */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-56 md:w-48 md:h-64">
            <Image
              src="/portadaact.png"
              alt="Portada de FA revista - Volumen 1"
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
