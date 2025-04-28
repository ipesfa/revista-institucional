"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, ExternalLink, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AcercaDePage() {
  const [activeTab, setActiveTab] = useState("sobre-la-revista")

  // Datos del equipo editorial
  const editorialTeam = [
    {
      name: "Dra. María González",
      role: "Directora",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Doctora en Ciencias de la Educación con especialización en políticas educativas. Ha publicado numerosos artículos sobre transformaciones en sistemas educativos latinoamericanos.",
    },
    {
      name: "Dr. Juan Pérez",
      role: "Editor en Jefe",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Doctor en Filosofía y Letras. Especialista en teoría educativa y epistemología. Autor de varios libros sobre fundamentos filosóficos de la educación contemporánea.",
    },
    {
      name: "Dra. Ana Martínez",
      role: "Editora Asociada - Sección Educación",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Doctora en Pedagogía. Investigadora en metodologías innovadoras y tecnología educativa. Ha coordinado proyectos internacionales sobre transformación digital en educación.",
    },
    {
      name: "Dr. Carlos Rodríguez",
      role: "Editor Asociado - Sección Cultura",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Doctor en Estudios Culturales. Especialista en análisis de fenómenos culturales contemporáneos y su impacto en instituciones educativas.",
    },
    {
      name: "Mg. Luis Sánchez",
      role: "Coordinador Editorial",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Magíster en Edición y Gestión Editorial. Responsable de los procesos editoriales y de la calidad de las publicaciones.",
    },
    {
      name: "Lic. Elena Torres",
      role: "Asistente Editorial",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Licenciada en Comunicación. Gestiona el proceso de revisión por pares y la comunicación con autores y evaluadores.",
    },
  ]

  // Datos de las secciones temáticas
  const thematicSections = [
    {
      title: "Educación y Pedagogía",
      description:
        "Artículos sobre teorías educativas, metodologías de enseñanza-aprendizaje, evaluación educativa, formación docente y gestión institucional.",
      types: ["Artículos de investigación", "Ensayos teóricos", "Estudios de caso", "Experiencias innovadoras"],
    },
    {
      title: "Cultura y Sociedad",
      description:
        "Trabajos que abordan la relación entre fenómenos culturales, transformaciones sociales y procesos educativos, incluyendo análisis de políticas culturales y su impacto en la educación.",
      types: ["Artículos de investigación", "Ensayos críticos", "Análisis de políticas", "Estudios comparativos"],
    },
    {
      title: "Tecnología Educativa",
      description:
        "Investigaciones sobre implementación, uso y evaluación de tecnologías en contextos educativos, incluyendo estudios sobre plataformas digitales, recursos educativos abiertos y metodologías mediadas por tecnología.",
      types: [
        "Artículos de investigación",
        "Informes técnicos",
        "Estudios de implementación",
        "Análisis de tendencias",
      ],
    },
    {
      title: "Políticas Educativas",
      description:
        "Análisis de políticas públicas en educación, reformas educativas, legislación, financiamiento y gobernanza de sistemas educativos a nivel local, nacional e internacional.",
      types: ["Artículos de investigación", "Análisis de políticas", "Estudios comparativos", "Documentos de posición"],
    },
  ]

  // Datos de las directrices para autores
  const authorGuidelines = [
    {
      title: "Tipos de contribuciones",
      content:
        "Koulana acepta artículos de investigación originales (6000-8000 palabras), ensayos teóricos (4000-6000 palabras), reseñas de libros (1500-2000 palabras) y entrevistas (3000-4000 palabras). Todos los trabajos deben ser inéditos y no estar sometidos simultáneamente a evaluación en otras revistas.",
    },
    {
      title: "Formato de presentación",
      content:
        "Los manuscritos deben enviarse en formato Word (.docx), con márgenes de 2,5 cm, interlineado 1,5, fuente Times New Roman 12 pt. Las páginas deben estar numeradas consecutivamente. El título debe ser conciso y descriptivo (máximo 15 palabras). Se debe incluir un resumen (250 palabras) y 5-7 palabras clave en español e inglés.",
    },
    {
      title: "Sistema de citación",
      content:
        "La revista utiliza el sistema APA (7ª edición) para citas y referencias bibliográficas. Las citas textuales de menos de 40 palabras deben incorporarse en el texto entre comillas. Las citas de más de 40 palabras deben presentarse en párrafo aparte, con sangría de 1,25 cm, sin comillas y con interlineado sencillo.",
    },
    {
      title: "Tablas y figuras",
      content:
        "Las tablas y figuras deben estar numeradas consecutivamente y tener un título descriptivo. Deben ser enviadas en archivos separados en formato editable (.xlsx para tablas, .jpg o .png para figuras con resolución mínima de 300 dpi). En el texto debe indicarse claramente su ubicación.",
    },
    {
      title: "Proceso de evaluación",
      content:
        "Todos los artículos son sometidos a un proceso de evaluación por pares de doble ciego. Los criterios de evaluación incluyen: originalidad y relevancia del tema, rigor metodológico, claridad expositiva, actualidad de la bibliografía y adecuación a las normas de la revista.",
    },
    {
      title: "Envío de manuscritos",
      content:
        "Los manuscritos deben enviarse a través del formulario disponible en la sección 'Convocatoria' de nuestra página web. El autor debe garantizar que cuenta con los derechos necesarios sobre todo el material incluido en su trabajo.",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Acerca de</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Conoce más sobre la revista académica Koulana, nuestro equipo editorial, políticas y directrices para autores.
        </p>
        <Separator className="my-6" />
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="sobre-la-revista" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <TabsList className="flex flex-col h-auto bg-transparent space-y-1 w-full">
              <TabsTrigger
                value="sobre-la-revista"
                className="justify-start text-left px-4 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-800"
              >
                Sobre la revista
              </TabsTrigger>
              <TabsTrigger
                value="equipo-editorial"
                className="justify-start text-left px-4 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-800"
              >
                Equipo editorial
              </TabsTrigger>
              <TabsTrigger
                value="politicas-de-secciones"
                className="justify-start text-left px-4 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-800"
              >
                Políticas de secciones
              </TabsTrigger>
              <TabsTrigger
                value="directrices-para-autores"
                className="justify-start text-left px-4 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-800"
              >
                Directrices para autores
              </TabsTrigger>
              <TabsTrigger
                value="contacto"
                className="justify-start text-left px-4 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-800"
              >
                Contacto
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="md:w-3/4">
            {/* Sobre la revista */}
            <TabsContent value="sobre-la-revista" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Sobre la revista</h2>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Koulana</span> es una revista académica semestral publicada por el
                      Instituto de Profesores de Educación Superior (IPES FA), dedicada a la difusión de investigaciones
                      originales y reflexiones críticas en el ámbito de la educación y la cultura.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Fundada en 2020, la revista surge como un espacio para el diálogo interdisciplinario y la
                      construcción colectiva de conocimiento, con especial énfasis en las transformaciones educativas
                      contemporáneas y su relación con los procesos culturales y sociales.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Nuestra misión es contribuir al desarrollo del pensamiento crítico y la innovación en el campo
                      educativo, promoviendo la difusión de investigaciones rigurosas y propuestas transformadoras que
                      respondan a los desafíos actuales de la educación en sus diversos contextos y niveles.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">Objetivos</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        Difundir investigaciones originales y de calidad en el ámbito de la educación y la cultura.
                      </li>
                      <li>
                        Promover el diálogo interdisciplinario entre educadores, investigadores y gestores educativos.
                      </li>
                      <li>Contribuir a la reflexión crítica sobre prácticas educativas y políticas públicas.</li>
                      <li>Visibilizar experiencias innovadoras y transformadoras en contextos educativos diversos.</li>
                      <li>
                        Fortalecer la comunidad académica a través del intercambio de conocimientos y perspectivas.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div className="relative h-[300px] overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=600&width=400"
                        alt="Revista Koulana"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Información general</h3>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Periodicidad:</span> Semestral (enero y julio)
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">ISSN:</span> 2023-XXXX (versión impresa)
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">ISSN:</span> 2023-YYYY (versión digital)
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Institución editora:</span> Instituto de Profesores de Educación
                          Superior (IPES FA)
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Indexada en:</span> Latindex, DOAJ, Redalyc
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Equipo editorial */}
            <TabsContent value="equipo-editorial" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Equipo editorial</h2>
                <p className="text-gray-700">
                  Nuestro equipo editorial está compuesto por académicos e investigadores con amplia trayectoria en el
                  campo de la educación y la cultura, comprometidos con la calidad y el rigor científico.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {editorialTeam.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-square w-full overflow-hidden bg-gray-100">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">{member.name}</h3>
                        <p className="text-sm font-medium text-blue-800 mb-2">{member.role}</p>
                        <p className="text-sm text-gray-600">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Comité Científico Internacional</h3>
                  <p className="text-gray-700 mb-4">
                    Además de nuestro equipo editorial, contamos con un Comité Científico Internacional compuesto por
                    destacados académicos de diversas instituciones que contribuyen a garantizar la calidad y relevancia
                    de nuestras publicaciones.
                  </p>
                  <Link href="/comite-cientifico" className="text-blue-800 hover:underline flex items-center">
                    Ver integrantes del Comité Científico
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Políticas de secciones */}
            <TabsContent value="politicas-de-secciones" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Políticas de secciones</h2>
                <p className="text-gray-700">
                  La revista Koulana organiza su contenido en secciones temáticas que reflejan las principales áreas de
                  interés en el campo de la educación y la cultura. Cada sección cuenta con criterios específicos para
                  la evaluación y selección de trabajos.
                </p>

                <div className="space-y-8 mt-6">
                  {thematicSections.map((section, index) => (
                    <div key={index} className="bg-white border rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-700 mb-4">{section.description}</p>
                      <h4 className="text-base font-medium text-gray-900 mb-2">Tipos de trabajos aceptados:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {section.types.map((type, idx) => (
                          <li key={idx}>{type}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Proceso de evaluación</h3>
                  <p className="text-gray-700 mb-2">
                    Todos los trabajos recibidos son sometidos a un proceso de evaluación que consta de las siguientes
                    etapas:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>
                      Evaluación preliminar por el Comité Editorial para verificar la adecuación a la temática y normas
                      de la revista.
                    </li>
                    <li>
                      Evaluación por pares mediante sistema de doble ciego (dos evaluadores externos especialistas en la
                      temática).
                    </li>
                    <li>Decisión editorial basada en los informes de los evaluadores.</li>
                    <li>Comunicación a los autores y proceso de revisión (si corresponde).</li>
                    <li>Edición y publicación del trabajo aceptado.</li>
                  </ol>
                </div>
              </div>
            </TabsContent>

            {/* Directrices para autores */}
            <TabsContent value="directrices-para-autores" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Directrices para autores</h2>
                <p className="text-gray-700">
                  A continuación se presentan las normas y directrices que deben seguir los autores interesados en
                  publicar en la revista Koulana. El cumplimiento de estas normas es indispensable para iniciar el
                  proceso de evaluación.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  {authorGuidelines.map((guideline, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-900">
                        {guideline.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">{guideline.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentos de referencia</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <ExternalLink className="h-4 w-4 text-blue-800 mr-2" />
                      <Link href="/documentos/plantilla-articulo.docx" className="text-blue-800 hover:underline">
                        Plantilla para artículos
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <ExternalLink className="h-4 w-4 text-blue-800 mr-2" />
                      <Link href="/documentos/guia-autores.pdf" className="text-blue-800 hover:underline">
                        Guía completa para autores
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <ExternalLink className="h-4 w-4 text-blue-800 mr-2" />
                      <Link href="/documentos/politica-etica.pdf" className="text-blue-800 hover:underline">
                        Política ética y de buenas prácticas
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="bg-blue-800 hover:bg-blue-700">
                    <Link href="/convocatoria">Enviar un artículo</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Contacto */}
            <TabsContent value="contacto" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Contacto</h2>
                <p className="text-gray-700">
                  Para cualquier consulta relacionada con la revista Koulana, no dude en ponerse en contacto con nuestro
                  equipo editorial a través de los siguientes medios:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-800 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Correo electrónico</h3>
                          <p className="text-gray-700">revista.koulana@ipes.edu</p>
                          <p className="text-sm text-gray-500 mt-1">Tiempo de respuesta: 2-3 días hábiles</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-blue-800 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Teléfono</h3>
                          <p className="text-gray-700">+598 2345 6789</p>
                          <p className="text-sm text-gray-500 mt-1">Lunes a viernes de 9:00 a 17:00 horas</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-800 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Dirección</h3>
                          <p className="text-gray-700">
                            Instituto de Profesores de Educación Superior (IPES FA)
                            <br />
                            Av. Principal 1234, Ciudad
                            <br />
                            Código Postal 12345
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Consultas específicas</h3>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Envío de artículos:</span> articulos.koulana@ipes.edu
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Suscripciones:</span> suscripciones.koulana@ipes.edu
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Dirección editorial:</span> direccion.koulana@ipes.edu
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Formulario de contacto</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Nombre
                          </label>
                          <Input id="name" placeholder="Su nombre" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Correo electrónico
                          </label>
                          <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Asunto
                        </label>
                        <Input id="subject" placeholder="Asunto de su mensaje" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Mensaje
                        </label>
                        <Textarea id="message" placeholder="Escriba su mensaje aquí" rows={5} />
                      </div>
                      <Button className="w-full bg-blue-800 hover:bg-blue-700">Enviar mensaje</Button>
                    </form>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
