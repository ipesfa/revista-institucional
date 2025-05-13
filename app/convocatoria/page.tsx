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
    subtitulo: "Volumen 8, Número 1 - Enero 2026",
    descripcion:
      "La revista académica FA invita a investigadores, docentes y especialistas a enviar sus contribuciones para el próximo número. Buscamos artículos originales e inéditos que aborden temas relevantes en el ámbito de la educación y la cultura, con especial énfasis en innovaciones pedagógicas, transformaciones educativas y análisis culturales contemporáneos.",
    tematica: "Innovación educativa y transformaciones culturales en la era digital",
    fechaLimite: "30 de septiembre de 2025",
    fechaPublicacion: "Enero 2026",
    fechasImportantes: [
      {
        fecha: "1 de junio de 2025",
        evento: "Apertura de la convocatoria",
      },
      {
        fecha: "30 de septiembre de 2025",
        evento: "Fecha límite para envío de artículos",
      },
      {
        fecha: "1 al 31 de octubre de 2025",
        evento: "Proceso de evaluación por pares",
      },
      {
        fecha: "15 de noviembre de 2025",
        evento: "Notificación de resultados a autores",
      },
      {
        fecha: "15 de diciembre de 2025",
        evento: "Fecha límite para envío de versiones finales",
      },
      {
        fecha: "Enero 2026",
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
              <p className="text-lg text-gray-700 leading-relaxed">{convocatoria.descripcion}</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Temática del número:</h3>
                <p className="text-gray-700">{convocatoria.tematica}</p>
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

          {/* Basic Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisitos básicos</h2>
            <ul className="space-y-2">
              {convocatoria.requisitosBasicos.map((requisito, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-800 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requisito}</span>
                </li>
              ))}
            </ul>
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
                <div className="space-y-4">
                  <p className="text-gray-700">Para enviar su artículo, siga estos pasos:</p>
                  <ol className="space-y-3 list-decimal pl-5">
                    <li className="text-gray-700">
                      Descargue y lea atentamente las normas para autores y la plantilla de artículo.
                    </li>
                    <li className="text-gray-700">
                      Prepare su manuscrito siguiendo estrictamente las normas y utilizando la plantilla proporcionada.
                    </li>
                    <li className="text-gray-700">Complete y firme la declaración de originalidad.</li>
                    <li className="text-gray-700">
                      Envíe todos los documentos (manuscrito y declaración firmada) a través del formulario de envío o
                      al correo electrónico: <span className="font-medium">articulos.koulana@ipes.edu</span>
                    </li>
                    <li className="text-gray-700">Recibirá un acuse de recibo en un plazo máximo de 3 días hábiles.</li>
                  </ol>
                  <div className="flex justify-center mt-6">
                    <Button className="bg-blue-800 hover:bg-blue-700">Formulario de envío</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="evaluacion" className="p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Todos los artículos recibidos son sometidos a un riguroso proceso de evaluación:
                  </p>
                  <ol className="space-y-3 list-decimal pl-5">
                    <li className="text-gray-700">
                      <span className="font-medium">Evaluación preliminar:</span> El Comité Editorial verifica que el
                      artículo cumpla con las normas de la revista y sea pertinente para la temática.
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Evaluación por pares:</span> Los artículos que superan la evaluación
                      preliminar son sometidos a un proceso de evaluación por pares de doble ciego (dos evaluadores
                      externos especialistas en la temática).
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Decisión editorial:</span> Con base en los informes de los
                      evaluadores, el Comité Editorial toma una de las siguientes decisiones: aceptación sin cambios,
                      aceptación con cambios menores, aceptación con cambios mayores o rechazo.
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Comunicación a los autores:</span> Los autores reciben la decisión
                      editorial junto con los comentarios de los evaluadores.
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Versión final:</span> Los autores de artículos aceptados con cambios
                      deben enviar la versión revisada en el plazo establecido.
                    </li>
                  </ol>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {convocatoria.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900">{item.pregunta}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{item.respuesta}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas ayuda?</h2>
            <p className="text-gray-700 mb-4">
              Si tiene alguna duda o consulta sobre la convocatoria, no dude en ponerse en contacto con nosotros:
            </p>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-800 mr-2" />
              <a href="mailto:articulos.koulana@ipes.edu" className="text-blue-800 hover:underline">
                articulosrevistafa@ipesfa-ushuaia.edu.ar
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
                {convocatoria.documentos.map((doc, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-gray-900">{doc.nombre}</h4>
                    <p className="text-sm text-gray-600 mb-2">{doc.descripcion}</p>
                    <Link href={doc.url}>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Issue Preview */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Último número</h3>
              <div className="flex flex-col items-center">
                <div className="relative h-[200px] w-[150px] overflow-hidden rounded-lg shadow-md mb-4">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Último número de Koulana"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-gray-700 mb-4">
                  Consulte nuestro último número para conocer el estilo y enfoque de la revista.
                </p>
                <Link href="/actual">
                  <Button variant="outline" className="w-full">
                    Ver último número
                  </Button>
                </Link>
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
        <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
          Enviar artículo ahora
        </Button>
      </div>
    </div>
  )
}
