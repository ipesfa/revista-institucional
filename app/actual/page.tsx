import Image from "next/image"
import Link from "next/link"
import { Download, ArrowRight, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ActualPage() {
  // Datos de ejemplo para el número actual
  const currentIssue = {
    title: "Número Actual",
    date: "Julio 2025",
    volume: "Volumen 7, Número 1",
    introduction:
      "Este número de Koulana explora las transformaciones educativas post-pandemia y los nuevos paradigmas en la enseñanza superior. Incluye investigaciones sobre metodologías híbridas, el impacto de la inteligencia artificial en la educación, y estudios culturales sobre la adaptación de instituciones educativas a los desafíos contemporáneos.",
    pdfUrl: "/downloads/koulana-vol7-num1.pdf",
    coverImage: "/placeholder.svg?height=600&width=400",
    articles: [
      {
        id: 1,
        title: "Metodologías híbridas en la educación superior: un análisis comparativo",
        authors: "María González, Juan Pérez",
        abstract:
          "Este estudio analiza la implementación de metodologías híbridas en diferentes contextos universitarios, evaluando su efectividad y proponiendo un marco de referencia para su aplicación.",
        category: "Educación",
        readTime: "15 min",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        title: "Inteligencia artificial como herramienta pedagógica: oportunidades y desafíos",
        authors: "Carlos Rodríguez, Ana Martínez",
        abstract:
          "La investigación explora el uso de sistemas de inteligencia artificial en entornos educativos, identificando beneficios potenciales y consideraciones éticas para su implementación.",
        category: "Tecnología Educativa",
        readTime: "20 min",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "Transformaciones culturales en instituciones educativas tradicionales",
        authors: "Luis Sánchez, Elena Torres",
        abstract:
          "Este artículo examina cómo las instituciones educativas con larga trayectoria están adaptando sus estructuras organizacionales y prácticas culturales frente a los cambios sociales contemporáneos.",
        category: "Cultura",
        readTime: "18 min",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 4,
        title: "Evaluación de competencias en entornos virtuales: nuevos indicadores",
        authors: "Patricia López, Roberto Fernández",
        abstract:
          "La investigación propone un conjunto de indicadores para evaluar el desarrollo de competencias en estudiantes que participan principalmente en entornos de aprendizaje virtual.",
        category: "Evaluación",
        readTime: "12 min",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 5,
        title: "El rol de las humanidades en la formación profesional contemporánea",
        authors: "Gabriela Méndez",
        abstract:
          "Este ensayo reflexiona sobre la importancia de mantener y fortalecer la enseñanza de las humanidades en programas profesionales orientados a la tecnología y los negocios.",
        category: "Humanidades",
        readTime: "25 min",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 6,
        title: "Políticas educativas post-pandemia: un estudio comparativo regional",
        authors: "Javier Morales, Diana Castro, Miguel Ángel Ruiz",
        abstract:
          "La investigación analiza y compara las políticas educativas implementadas en diferentes países de la región tras la pandemia, evaluando su efectividad y sostenibilidad.",
        category: "Políticas Educativas",
        readTime: "30 min",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-800">{currentIssue.volume}</p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {currentIssue.title}
            </h1>
            <p className="mt-2 text-xl text-gray-600">{currentIssue.date}</p>
          </div>
          <Button className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-800 hover:bg-blue-700" size="lg">
            <Download className="h-4 w-4" />
            Descargar PDF completo
          </Button>
        </div>
        <Separator className="my-6" />
      </div>

      {/* Introduction Section */}
      <div className="grid gap-8 md:grid-cols-3 lg:gap-12 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Presentación</h2>
          <p className="text-gray-700 leading-relaxed">{currentIssue.introduction}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100">
              Educación
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100">
              Tecnología
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100">
              Cultura
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100">
              Investigación
            </Badge>
          </div>
        </div>
        <div className="relative h-[400px] md:h-auto overflow-hidden rounded-lg shadow-md">
          <Image
            src={currentIssue.coverImage || "/placeholder.svg"}
            alt={`Portada ${currentIssue.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Articles Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Artículos destacados</h2>
          <div className="h-1 w-20 bg-blue-800 hidden md:block"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentIssue.articles.map((article) => (
            <Card key={article.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={article.imageUrl || "/placeholder.svg"}
                  alt={`Imagen para ${article.title}`}
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50 text-blue-800">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <BookOpen className="mr-1 h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold mt-2 line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="text-sm font-medium">Por {article.authors}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-sm text-gray-600 line-clamp-3">{article.abstract}</p>
              </CardContent>
              <CardFooter className="pt-2 flex justify-between">
                <Link
                  href={`/articulo/${article.id}`}
                  className="text-sm font-medium text-blue-800 hover:underline flex items-center"
                >
                  Leer artículo
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <FileText className="h-4 w-4" />
                  <span className="sr-only">Descargar artículo</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">¿Prefieres leer offline?</h3>
            <p className="text-gray-600 mt-1">
              Descarga el número completo en formato PDF para leerlo cuando y donde quieras.
            </p>
          </div>
          <Button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700" size="lg">
            <Download className="h-4 w-4" />
            Descargar PDF completo
          </Button>
        </div>
      </div>

      {/* Previous Issues Link */}
      <div className="mt-12 text-center">
        <Link href="/archivos" className="text-blue-800 hover:underline flex items-center justify-center gap-1">
          Ver números anteriores
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
