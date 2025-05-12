import Image from "next/image"
import Link from "next/link"
import { Download, Eye, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function ArchivosPage() {
  // Datos de ejemplo para los números anteriores
  const archivedIssues = [
    {
      id: 6,
      title: "Transformaciones educativas post-pandemia",
      volume: "Volumen 6, Número 2",
      date: "Enero 2025",
      description:
        "Este número explora las transformaciones en los sistemas educativos tras la pandemia, analizando nuevas metodologías, herramientas tecnológicas y desafíos institucionales.",
      coverImage: "/placeholder.svg?height=300&width=200",
      tags: ["Educación", "Tecnología", "Pandemia"],
      articleCount: 8,
    },
    {
      id: 5,
      title: "Cultura y sociedad en la era digital",
      volume: "Volumen 6, Número 1",
      date: "Julio 2024",
      description:
        "Análisis de las transformaciones culturales y sociales impulsadas por la digitalización, con énfasis en las instituciones educativas y su adaptación a nuevos paradigmas.",
      coverImage: "/placeholder.svg?height=300&width=200",
      tags: ["Cultura", "Sociedad", "Digital"],
      articleCount: 7,
    },
    {
      id: 4,
      title: "Innovación pedagógica y nuevos horizontes",
      volume: "Volumen 5, Número 2",
      date: "Enero 2024",
      description:
        "Investigaciones sobre prácticas pedagógicas innovadoras y su impacto en el aprendizaje, incluyendo estudios de caso y propuestas metodológicas.",
      coverImage: "/placeholder.svg?height=300&width=200",
      tags: ["Pedagogía", "Innovación", "Metodología"],
      articleCount: 9,
    },
    {
      id: 3,
      title: "Educación inclusiva: desafíos y oportunidades",
      volume: "Volumen 5, Número 1",
      date: "Julio 2023",
      description:
        "Este número aborda la educación inclusiva desde múltiples perspectivas, analizando políticas públicas, prácticas institucionales y experiencias innovadoras.",
      coverImage: "/placeholder.svg?height=300&width=200",
      tags: ["Inclusión", "Políticas", "Diversidad"],
      articleCount: 6,
    },
    {
      id: 2,
      title: "Tecnologías emergentes en educación",
      volume: "Volumen 4, Número 2",
      date: "Enero 2023",
      description:
        "Análisis del impacto de tecnologías emergentes como inteligencia artificial, realidad virtual y aprendizaje adaptativo en contextos educativos formales e informales.",
      coverImage: "/placeholder.svg?height=300&width=200",
      tags: ["Tecnología", "IA", "Realidad Virtual"],
      articleCount: 8,
    },
    {
      id: 1,
      title: "Fundamentos teóricos de la educación contemporánea",
      volume: "Volumen 4, Número 1",
      date: "Julio 2022",
      description:
        "Revisión crítica de las bases teóricas que sustentan los modelos educativos actuales, con aportes desde la filosofía, psicología y sociología de la educación.",
      coverImage: "/placeholder.svg?height=300&width=200",
      tags: ["Teoría", "Filosofía", "Fundamentos"],
      articleCount: 7,
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Archivos</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Explora los números anteriores de la revista académica FA. Cada edición ofrece investigaciones, análisis
          y reflexiones sobre temas relevantes en educación y cultura.
        </p>
        <Separator className="my-6" />
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Buscar en archivos..."
            className="w-full bg-white pl-8 rounded-md border-gray-300"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-sm text-gray-500">Ordenar por:</span>
          <select className="text-sm border rounded-md px-2 py-1 bg-white">
            <option value="newest">Más recientes</option>
            <option value="oldest">Más antiguos</option>
            <option value="az">A-Z</option>
          </select>
        </div>
      </div>

      {/* Archives List */}
      <div className="space-y-8">
        {archivedIssues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 relative h-[200px] md:h-full">
                <Image
                  src={issue.coverImage || "/placeholder.svg"}
                  alt={`Portada ${issue.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:col-span-3 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-800">
                      {issue.volume}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {issue.date}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{issue.articleCount} artículos</div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h2>

                <p className="text-gray-600 mb-4 flex-grow">{issue.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {issue.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/archivos/${issue.id}`}>
                    <Button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700">
                      <Eye className="h-4 w-4" />
                      Ver número
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Descargar PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-1">
          <Button variant="outline" size="icon" disabled className="h-8 w-8">
            <span className="sr-only">Página anterior</span>
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
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 bg-blue-50 text-blue-800">
            1
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            3
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <span className="sr-only">Página siguiente</span>
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
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </nav>
      </div>
    </div>
  )
}
