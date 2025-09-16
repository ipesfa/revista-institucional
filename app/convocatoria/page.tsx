import Image from "next/image"
import Link from "next/link"
import { Download, Calendar, FileText, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConvocatoriaPage() {
  // Datos de la convocatoria actual
  const convocatoria = {
    titulo: "Convocatoria Abierta",
    subtitulo: "Dossier  N° 1 / Año 1",
    descripcion:
      "La revista académica FA invita a investigadores, docentes y especialistas a enviar sus contribuciones para el próximo número. Buscamos artículos originales e inéditos que aborden temas relevantes en el ámbito de la educación y la cultura, con especial énfasis en innovaciones pedagógicas, transformaciones educativas y análisis culturales contemporáneos.",
    tematica: "Innovación educativa y transformaciones culturales en la era digital",
    fechaLimite: "20 de octubre de 2025",
    fechaPublicacion: "Enero 2026",
    fechasImportantes: [
      {
        fecha: "20 de octubre de 2025",
        evento: "Fecha límite para envío de artículos",
      },
      {
        fecha: "Noviembre 2025",
        evento: "Publicación del número",
      },
    ],
    requisitosBasicos: [
      "Artículos originales e inéditos, no sometidos simultáneamente a evaluación en otras revistas.",
      "Extensión entre 6.000 y 8.000 palabras, incluyendo referencias bibliográficas.",
      "Resumen en español e inglés (máximo 250 palabras) y 5-7 palabras clave.",
      "Formato según las normas editoriales de la revista (sistema APA 7ª edición).",
      "Archivos en formato .docx utilizando la plantilla proporcionada.",
    ],
    areasInteres: [
      "Innovaciones pedagógicas y metodológicas",
      "Tecnologías educativas emergentes",
      "Políticas educativas y su impacto",
      "Educación inclusiva y diversidad",
      "Transformaciones culturales en contextos educativos",
      "Formación docente y desarrollo profesional",
      "Evaluación educativa y calidad",
    ],
    documentos: [
      {
        nombre: "Normas para autores",
        descripcion: "Guía completa con los requisitos y formato para la presentación de artículos",
        url: "/documentos/normas-autores.pdf",
      },
      {
        nombre: "Plantilla de artículo",
        descripcion: "Documento con el formato requerido para la presentación de artículos",
        url: "/documentos/plantilla-articulo.docx",
      },
      {
        nombre: "Declaración de originalidad",
        descripcion: "Documento que debe ser firmado por todos los autores",
        url: "/documentos/declaracion-originalidad.pdf",
      },
    ],
    faq: [
      {
        pregunta: "¿Cuántos autores pueden participar en un artículo?",
        respuesta:
          "No hay un límite estricto de autores por artículo, pero se recomienda no exceder los 4 autores. Todos los autores deben haber contribuido sustancialmente al trabajo.",
      },
      {
        pregunta: "¿Es posible enviar un artículo en otro idioma?",
        respuesta:
          "La revista acepta artículos en español, portugués e inglés. En todos los casos, se debe incluir un resumen en español e inglés.",
      },
      {
        pregunta: "¿Cuál es el proceso de evaluación?",
        respuesta:
          "Todos los artículos son sometidos a un proceso de evaluación por pares de doble ciego. Cada artículo es revisado por al menos dos evaluadores externos especialistas en la temática.",
      },
      {
        pregunta: "¿Hay algún costo por publicar?",
        respuesta:
          "No, la revista Koulana no cobra tasas por procesamiento o publicación de artículos. La publicación es completamente gratuita para los autores.",
      },
      {
        pregunta: "¿Puedo enviar un artículo que ya ha sido presentado en un congreso?",
        respuesta:
          "Sí, siempre que el artículo no haya sido publicado en actas o proceedings con ISBN/ISSN. En este caso, debe mencionarse esta circunstancia en una nota al pie en la primera página.",
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {convocatoria.titulo}
            </h1>
            <p className="mt-2 text-xl text-gray-600">{convocatoria.subtitulo}</p>
          </div>
          <Badge variant="outline" className="mt-4 md:mt-0 bg-blue-50 text-blue-800 px-3 py-1 text-sm font-medium">
            <Clock className="mr-1 h-4 w-4" />
            Fecha límite: {convocatoria.fechaLimite}
          </Badge>
        </div>
        <Separator className="my-6" />
      </div>

      {/* Main Content */}
      <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
        {/* Left Column - Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Introduction Section */}
          <section>
            <div className="prose max-w-none">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                FA Revista, es una publicación digital de acceso abierto de periodicidad semestral del Instituto Provincial de Enseñanza Superior de la Provincia de Tierra del Fuego de Argentina, dedicada a la publicación de ensayos reflexivos sobre la práctica educativa y de investigación originales e inéditos en español. Fa Revista propone problematizar la relación entre educación y cultura en la práctica docente de nivel superior desde una perspectiva que articula múltiples disciplinas como las Humanidades y Ciencias Sociales, las Artes, las Ciencias Biológicas y las Exactas, con un estilo editorial que promueve una lectura dinámica de trabajos rigurosos.
              </p>
              <div className="flex justify-center my-6">
                <Image
                  src="/headerfant.png"
                  alt="Jornadas Académico Culturales"
                  width={700}
                  height={210}
                  className="object-contain rounded shadow"
                  priority
                />
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4 text-justify">
                Se pretenden publicaciones que propongan un espacio de reflexión interdisciplinaria, cuyo objetivo principal sea explorar cómo esta categoría estética y experiencial desafía nuestras percepciones de la realidad, define los límites de lo posible e interpela nuestras construcciones sociales de conocimiento. En esencia, se trata de observar como aquello que escapa a lo ordinario nos obliga a repensar lo que damos por sentado.
              </p>
              <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Se podrán aportar manuscritos originales en alguna de las siguientes secciones:</h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Prácticas y experiencias educativas</li>
                  <li>Artículos científicos</li>
                  <li>Ensayos académicos</li>
                  <li>Reseñas Bibliográficas</li>
                  <li>Entrevistas</li>
                  <li>Dilemas y coyunturas</li>
                </ul>
              </div>
              <div className="mt-6">
                <span className="inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded font-medium text-base">Fecha límite de entrega: 20 de octubre de 2025</span>
              </div>
            </div>
          </section>

          {/* Areas of Interest */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Áreas de interés</h2>
            <div className="flex flex-wrap gap-2">
              {convocatoria.areasInteres.map((area, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50 text-gray-800">
                  {area}
                </Badge>
              ))}
            </div>
          </section>

          {/* Submission Process */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Proceso de envío</h2>
            <Tabs defaultValue="instrucciones" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="instrucciones">Instrucciones</TabsTrigger>
                <TabsTrigger value="evaluacion">Proceso de evaluación</TabsTrigger>
              </TabsList>
              <TabsContent value="instrucciones" className="p-4 border rounded-md mt-2">
                <div className="flex justify-center">
                  <Button className="bg-blue-800 hover:bg-blue-700">
                    <a href="https://forms.gle/w4r3ysMwzbv85ryd6" target="_blank" rel="noopener noreferrer">Formulario de envío</a>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="evaluacion" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <p className="text-gray-700 text-justify">
                    La revisión de los artículos académicos por pares según el principio doble ciego (el evaluador no conoce a lxs autorxs y lxs autorxs no conocen a sus evaluadorxs), garantiza un abordaje imparcial del trabajo enviado a la publicación. Hoy en día, dada la complejización y jerarquización del sistema académico y científico nacional e internacional, las publicaciones que no son evaluadas prácticamente carecen de validez académica en términos de evaluación de antecedentes y gran parte de quienes se dedican al trabajo académico tienden a publicar trabajos en revistas que garanticen una evaluación segura y rigurosa, que no es lo mismo que excluyente.
                  </p>
                  <p className="text-gray-700 text-justify">
                    Para que un artículo sea evaluado, se tienden a considerar los siguientes puntos:
                  </p>
                  <ol className="space-y-2 list-decimal pl-5 text-gray-700">
                    <li>La originalidad del trabajo de investigación o manuscrito;</li>
                    <li>Relevancia para el conocimiento sobre el tema y clara presentación del problema que se pretende abordar;</li>
                    <li>Marco de referencia: respaldo teórico adecuado. Determinación clara del objetivo del trabajo y de la(s) hipótesis. Referencias bibliográficas actualizadas y adecuadas al ámbito de investigación;</li>
                    <li>Metodología: uso apropiado y buena descripción de materiales y métodos;</li>
                    <li>Resultados: elaboración de conclusiones –parciales o no– que den cuenta del análisis realizado.</li>
                    <li>Aspectos formales: corrección en el lenguaje, citación y referencias según normalización de la revista.</li>
                  </ol>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas ayuda?</h2>
            <p className="text-gray-700 mb-4">
              Si tiene alguna duda o consulta sobre la convocatoria, no dude en ponerse en contacto con nosotros:
            </p>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-800 mr-2" />
              <a href="mailto:farevista@ipesfa-ushuaia.edu.ar" className="text-blue-800 hover:underline">
                farevista@ipesfa-ushuaia.edu.ar
              </a>
            </div>
            <div className="mt-4">
              <Link href="/acerca-de?tab=contacto">
                <Button variant="outline" className="text-blue-800 border-blue-800">
                  Ir a la página de contacto
                </Button>
              </Link>
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Important Dates Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-800" />
                Fechas importantes
              </h3>
              <div className="space-y-4">
                {convocatoria.fechasImportantes.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-2 w-2 mt-2 rounded-full bg-blue-800"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.fecha}</p>
                      <p className="text-sm text-gray-600">{item.evento}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Download Documents */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-800" />
                Documentos
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4 last:border-0 last:pb-0">
                  <h4 className="font-medium text-gray-900">Normas APA</h4>
                  <p className="text-sm text-gray-600 mb-2">Guía para la presentación y formato de trabajos según normas APA.</p>
                  <a href="https://drive.google.com/file/d/1vZgIT5QYhIHgSfP5RHbW_4ftIZKpYkJX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Issue Preview */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dossier N° 1</h3>
              <div className="flex flex-col items-center">
                <div className="relative w-[150px] h-[225px] md:w-[180px] md:h-[270px] overflow-hidden rounded-lg shadow-md mb-4">
                  <Image
                    src="/portada01.png"
                    alt="Dossier N° 1 de FA Revista"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-gray-700 mb-4">
                  Publicación de ensayos reflexivos sobre la práctica educativa y de investigación originales e inéditos en español.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800">Importante</h3>
                <div className="mt-2 text-sm text-amber-700">
                  <p>
                    Solo se considerarán los artículos que cumplan con todos los requisitos y sean enviados antes de la
                    fecha límite. No se aceptarán envíos incompletos o fuera de plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-blue-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">¿Listo para enviar su artículo?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Contribuya al conocimiento académico compartiendo sus investigaciones y reflexiones en el campo de la
          educación y la cultura.
        </p>
        <a href="https://forms.gle/w4r3ysMwzbv85ryd6" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
            Enviar artículo ahora
          </Button>
        </a>
      </div>
    </div>
  )
}
