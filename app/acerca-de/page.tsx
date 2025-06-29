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
      name: "Emiliano Sánchez Narvarte",
      role: "Dirección general",
      image: "/sanchez.png",
      bio: "Doctor en Comunicación (UNLP) y Maestrando en Historia del Arte Argentino y Latinoamericano (UNSAM). Docente e investigador del Instituto Provincial de Enseñanza Superior \"Florentino Ameghino\" y de la Universidad Nacional de Tierra del Fuego. Coordinó y compiló el libro de Néstor García Canclini Innovaciones artísticas y rebeliones sociales (EDULP, Argentina, 2023), del cual escribió el estudio introductorio. Entre otros libros, publicó Antonio Pasquali, un itinerario intelectual transnacional (UCAB, Caracas, 2022) e Intelectuales y políticas de comunicación en América Latina (UNLP, Argentina, 2020). Realizó estancias de investigación en Venezuela, Bolivia, Brasil y México.",
    },
    {
      name: "Julián Ghisio",
      role: "Dirección general",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Profesor de Historia (UNLPam). Docente e investigador en el Instituto Provincial de Enseñanza Superior \"Florentino Ameghino\" y en la Universidad Nacional de Tierra del Fuego. Participó en proyectos de investigación sobre la enseñanza de la historia y la conciencia histórica y política en jóvenes. Publicó trabajos sobre la historia de Cuba en la enseñanza de las ciencias sociales y sobre experiencias de Educación Sexual Integral en escuelas secundarias. En el ámbito de la extensión universitaria, integró proyectos vinculados a la divulgación científica y a la construcción de la memoria histórica a través del cine. Actualmente se desempeña como docente en los niveles medio y superior, con un enfoque centrado en la formación docente y la didáctica de las ciencias sociales.",
    },
    {
      name: "Mariano Malizia",
      role: "Organización del dossier",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Profesor en Ciencias Antropológicas (UBA) y Maestrando en Ciencias Sociales con orientación en Sociología (UNQ). Docente e investigador de la Universidad Nacional de Tierra del Fuego. Investiga en el área Construcción Sociocultural del Territorio, en temas vinculados a juventudes y procesos migratorios, y en procesos de espacialización y construcción de memoria. Miembro de la Cátedra Libre de Pueblos Originarios de la UNTDF. Docente del Instituto Provincial de Enseñanza Superior \"Florentino Ameghino\". Posee publicaciones en la temática de sus estudios de posgrado sobre migración y permanencia en Ushuaia, y sobre escritura en el nivel superior.",
    },
    {
      name: "Luciana Helena Larrondo",
      role: "Prácticas y experiencias educativas",
      image: "/Larrondo.png",
      bio: "Licenciada en Educación Secundaria (UNTREF), Profesora Universitaria en Historia (UADER) y Maestranda en Docencia en el campo de la Formación en Practicas Profesionales (UNR). Docente investigadora en la Universidad Nacional de Tierra del Fuego (UNTDF); Investigadora en el área de la Historia Reciente en la Provincia de Tierra del Fuego. Docente e investigadora del Instituto Provincial de Enseñanza Superior \"Florentino Ameghino\" (IPESFA); en el campo de las Prácticas docentes Profesionales.",
    },
    {
      name: "Miguel Fanchovich",
      role: "Reseñas",
      image: "/fanchovich.png",
      bio: "Profesor de Lengua, Literatura y Latín (ISFDyT N° 122 \"Pte. Arturo Illia\"). Docente del IPES \"Florentino Ameghino\", a cargo de las cátedras de Gramática, Semiótica, Análisis del Discurso, Literatura Dramática, entre otras. Escribió las obras de teatro Fuera de juego (2009), estrenada en el teatro IFT (CABA); y Dos (2011), Teatro La Tertulia (CABA), la Tabla Rasca Teatro. Publicó ensayos en  Desafíos en las Escuelas III, \"escuelas all-inclusive, ¿todo incluido?\" Proyecto Alojar, Ediciones Grama (2018), en la edición N° 15 de  la revista digital de literatura Visor (2019) y en la revista digital mensual La Banquina  (2021/ 22). Publicó los libros Versiones, Editora Cultural Tierra del Fuego (2014) y  Los trabajos de Hansen, Editora Cultural Tierra del Fuego (2021).",
    },
    {
      name: "Mario Hernández",
      role: "Dilemas y coyunturas",
      image: "/hernandez.png",
      bio: "Profesor en Historia, graduado de la Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB) en 2001. Se ha desempeñado como docente en el nivel secundario  y en cargos de coordinación del Área de Ciencias Sociales en colegios de la ciudad de Ushuaia. A cargo de diversos espacios curriculares en el IPES \"Florentino Ameghino\" desde 2012 (Historia Social Argentina y Latinoamericana, Historia y Política Educacional, Sociología de la Educación, CIencias Sociales, Ciencias Sociales y su Enseñanza) en cinco de los nueve profesorados de la Institución, forma parte también, del plantel docente de la Certificación Docente para Profesionales (Posgrado ofrecido por el IPESFA desde 2012) Su novela \"Usurpas,insospechados migrantes\" fue la segunda obra que publicó la Editora Cultural Tierra del Fuego en 2010. En 2019, atravesando la intervención política del IPESFA, publicó \"La Educación Robada\", un ensayo analizando la coyuntura.",
    },
    {
      name: "Luciano Lautaro Loupias",
      role: "Artículos científicos",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Licenciado en Antropología (FFyH- UNC) y doctorando en Arqueología (FacSo- UNCPBA). Se ha desempeñado como docente en el nivel secundario y superior, actualmente en el Profesorado de Historia del IPES \"Florentino Ameghino\" y como arqueólogo en el Museo del Fin del Mundo. Los intereses de investigación están relacionados a los modos de vida de comunidades originarias de Tierra del Fuego y en el marco del doctorado, a la distribución de isótopos estables en poblaciones humanas de Argentina con fines forenses.",
    },
    {
      name: "Noelia Soledad Lobo",
      role: "Ensayos académicos",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Profesora Universitaria en Filosofía (UNGS), doctoranda en el Doctorado Interinstitucional en Ciencias Económicas (UNLPam-UNCOMA-UNRN-UNPSJB-UNPA-UNTDF). Se ha desempeñado como docente en el nivel medio y superior. Por muchos años ha trabajado en temas que relacionan la filosofía intercultural y la filosofía de la liberación latinoamericana con trabajos de campo con pueblos originarios. Además, en los últimos años comenzó a trabajar temas vinculados a la epistemología de la economía y su enseñanza. Actualmente trabaja como docente-investigadora en el IPES \"Florentino Ameghino\" y en la UNTDF.",
    },
    {
      name: "Laura Buedo",
      role: "Prácticas y experiencias educativas",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Licenciada en Ciencias de la Educación (UNQ) y Especialista en Gestión Educativa. Es profesora titular en el Instituto \"Florentino Ameghino\" y capacitadora en programas de formación continua. Desarrolla investigaciones sobre inclusión, currículum y enfoques pedagógicos alternativos. Coautora del libro Prácticas docentes en territorios extremos (Ediciones Sur, 2023).",
    },
    {
      name: "Shion-en Cenatiempo",
      role: "Recepción y distribución interna",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Docente en formación de Historia en el IPES de la ciudad de Ushuaia, Tierra del Fuego. Actualmente se desempeña como profesora en instituciones de educación media. Sus prácticas educativas y de investigación se orientan a elaborar formas de contribuir a mejorar la práctica docente, al crecimiento y desarrollo de los trayectos formativos. Los interrogantes académicos que trabaja se sitúan en los cruces entre lo educativo y lo social, con el objetivo de fomentar actitudes críticas sobre la práctica docente y sobre la teoría de la educación.",
    },
    {
      name: "Paola Noelia Vega",
      role: "Ensayos académicos",
      image: "/vega.png",
      bio: "Profesora en Psicología (IFD \"Domingo F. Sarmiento\") Licenciada en Gestión Educativa (UNTDF). Maestranda en Educación (UNLP). Se ha desempeñado en el Sistema Educativo Fueguino en Gabinete de Psicopedagogía y Asistencia al Escolar (Nivel Inicial, primario y modalidades) y en el Nivel Secundario y Superior (Formación Docente-IPES FA). Actualmente se desarrolla como Docente Investigadora del Instituto de la Educación y el Conocimiento (UNTDF) en las carreras: Licenciatura en Gestión Educativa y Licenciatura en Educación Primaria. Investiga en el campo de las ciencias sociales en general y de las ciencias de la educación en particular. Mis áreas de interés se vinculan con las trayectorias estudiantiles, los vínculos entre estudiantes y profesores en el ámbito de la educación superior junto con la problemática de las políticas de retención estudiantil y la formación docente y su complejidad.",
    },
    {
      name: "Vanina Carla Perazzo",
      role: "Dilemas y coyunturas",
      image: "/perazzo.png",
      bio: "Profesora de Historia (I.P.E.S. F.A.). Diploma Superior en Intervenciones Pedagógicas en Contextos de Encierro (UNSAM). Especialización de Nivel Superior en Educación en Contextos de Encierro (I.P.E.S. F.A.). Docente de nivel secundario, docente en la Modalidad de Educación Permanente de Jóvenes y Adultos, y en la Modalidad de Educación en Contextos de Privación de la Libertad. Referente Provincial de la Modalidad de Educación en Contextos de Privación de la Libertad en dos oportunidades. Cursante de la diplomatura superior en gestión educativa (FLACSO) y de la licenciatura en educación (UNQ). Actualmente se desempeña como coordinadora de ciclo en el C.E.N.S. 302 (Modalidad de Educación Permanente de Jóvenes y Adultos), y como docente en el Instituto Provincial de Educación Superior I.P.E.S. F.A.",
    },
    {
      name: "Leonardo Nausan",
      role: "Diseño y programación",
      image: "/nausan.png",
      bio: "Profesor de Biología (IPESFA, Ushuaia). Maestrando en Procesos Educativos Mediados por Tecnología (UNC) y cursante de la Tecnicatura en Desarrollo Full-Stack e Mobile (PUCRS). Coordinador de Proyectos Educativos y responsable de los entornos multimediales en el IPESFA. Docente y capacitador en Tecnología Educativa en los niveles primario y secundario. Desarrollador Full-Stack e investigador sobre la integración de Web3 e IA generativa en entornos de aprendizaje híbridos. Diseña propuestas didácticas en salud y ciencias naturales orientadas a hábitos saludables y alfabetización científica.",
    },
  ]

  // Datos de las secciones temáticas
  const thematicSections = [
    {
      title: "Dirección general",
      description: "Seguimiento y acompañamiento integral del conjunto de las acciones referentes a la organización de la revista",
      types: ["Coordinadores: Emiliano Sánchez Narvarte y Julián Ghisio"],
    },
    {
      title: "Organización del dossier",
      description: "Establecer diálogos entre las propuestas recibidas por los distintos profesorados en relación con el perfil general de la revista. Colaborar, guiar y establecer un nexo entre el equipo de la revista y las propuestas de dossier",
      types: ["Coordinador: Mariano Malizia"],
    },
    {
      title: "Artículos científicos",
      description: "Trabajos vinculados a investigaciones en curso o ya finalizadas pero inéditas, a partir de estudios de caso, trabajo de campo, estrategias teóricas y metodológicas definidas, análisis y conclusiones. (Evaluados por el sistema de dobles ciegos.)",
      types: ["Coordinadores: Julián Ghisio y Luciano Loupias"],
    },
    {
      title: "Ensayos académicos",
      description: "Un ensayo académico procura abordar un tema de manera más amplia que un artículo científica, en la que quien lo presenta, elabora su propio punto de vista, aportando una visión novedosa y original –en tensión y discusión con otros puntos de vista- por lo que se pretende que se trate de un trabajo propositivo. A través del ensayo, quien lo produce podría elaborar un aspecto específico de su campo de conocimiento o formular una reflexión crítica sobre la realidad. (Evaluados por el sistema de dobles ciego).",
      types: ["Coordinadoras: Paola Vega y Noelia Lobo"],
    },
    {
      title: "Prácticas y experiencias educativas",
      description: "Busca ser una sección analítica y reflexiva de la práctica del equipo docente del IPES FA como también puede convertirse en un espacio en el cual lxs estudiantes de los distintos profesorados presenten avances de sus reflexiones en torno a la práctica docente que llevan a cabo. Puede ser de utilidad para el inicio en el ejercicio de la práctica académica de lxs estudiantes como también un espacio para difundir los análisis de sus propias experiencias.",
      types: ["Coordinadoras: Luciana Larrondo y Laura Buedo"],
    },
    {
      title: "Dilemas y coyunturas",
      description: "Promover el debate y el pensamiento crítico en torno a distintos problemas sociales. Específicamente, busca recibir trabajos de interpretación y de intervención en las polémicas vinculadas a la relación entre Estado, cultura, partidos y políticas educativas. Estos dilemas pueden estar localizados a escala local, como también a escala provincial y nacional.",
      types: ["Coordinadores: Mario Hernández y Vanina Carla Perazzo"],
    },
    {
      title: "Reseñas",
      description: "Esta sección procura publicar reseñas originales e inéditas de libros publicados en los últimos dos o tres años. Puede ser un espacio no sólo de presentación descriptiva del contenido de una obra sino una instancia para docentes como estudiantes de escribir reseñas que incorporen un análisis crítico de la obra.",
      types: ["Coordinador: Miguel Fanchovich"],
    },
    {
      title: "Entrevistas",
      description: "Esta sección reúne entrevistas o semblanzas originales e inéditas de autorxs, teóricxs y/o referentes de las culturas destacadxs.",
      types: ["Decisión colectiva"],
    },
    {
      title: "Maquetación y revisión editorial",
      description: "Coordinación de la maquetación y revisión editorial de todos los contenidos de la revista.",
      types: ["Coordinación: Emiliano Sánchez Narvarte"],
    },
    {
      title: "Recepción y distribución interna",
      description: "Gestión de la recepción y distribución interna de los envíos a la revista.",
      types: ["Coordinación: Shion Cenatiempo"],
    },
    {
      title: "Diseño y programación",
      description: "Desarrollo y mantenimiento del diseño y la programación de la revista.",
      types: ["Coordinación: Leonardo Nausan"],
    },
  ]

  // Datos de las directrices para autores
  const authorGuidelines = [
    {
      title: "Dossier temático",
      content:
        "La revista recibe propuestas para dossier temático, que estructurarán cada número de la publicación. Las propuestas serán evaluadas por el Comité Editorial para su aceptación. Se priorizarán aquellas propuestas que tengan un alcance multiescalar sobre temas vinculados a los nudos problemáticos entre la educación y la cultura territorios. Para las presentaciones, se debe presentar una propuesta fundamentada del tópico (entre 500 palabras y 750), los nombres de las personas a cargo de la coordinación y una mininibio que sintetice su trayectoria curricular (hasta 10 líneas). Estas propuestas se remitirán al correo electrónico de la publicación, dirigida a Mariano Malizia, responsable de la organización del dossier.",
    },
    {
      title: "Prácticas y experiencias educativas",
      content:
        "Son trabajos originales e inéditos que procuran recuperar de manera crítica y reflexiva las situaciones y experiencias que resultan de la práctica docente. Tendrán una extensión de entre 10 y 15 páginas (incluidas referencias, notas, tablas y figuras). Estas colaboraciones son evaluadas por el Comité Editorial. Estas propuestas se remitirán al correo electrónico de la publicación, dirigida a Luciana Larrondo, Paola Vega y Laura Boedo, responsables de la sección.",
    },
    {
      title: "Artículos científicos",
      content:
        "Tendrán una extensión de entre 12 y 20 páginas (incluidas referencias, notas, tablas y figuras). Estas colaboraciones son evaluadas por pares en sistema de doble ciego. Estas propuestas se remitirán al correo electrónico de la publicación, dirigida a Julian Ghisio y Luciano Loupia, responsables de la sección.",
    },
    {
      title: "Ensayos académicos",
      content:
        "Tendrán una extensión de entre 10 y 20 páginas (incluidas referencias, notas, tablas y figuras). Estas colaboraciones son evaluadas por pares en sistema de doble ciego. Estas propuestas se remitirán al correo electrónico de la publicación, dirigida a Noelia Lobo y Shion-en Cenatiempo, responsables de la sección.",
    },
    {
      title: "Dilemas y coyunturas",
      content:
        "Tendrán una extensión máxima entre 8 y 15 páginas (incluidas referencias, notas, tablas y figuras). Estas colaboraciones son evaluadas por el Comité Editorial. Estas propuestas se remitirán al correo electrónico de la publicación, dirigida a Mario Hernández, responsable de la sección.",
    },
    {
      title: "Reseñas bibliográficas",
      content:
        "Tendrán una extensión de entre 4 y 7 páginas. Estas colaboraciones son evaluadas por el Consejo Editorial. Estas propuestas se remitirán al correo electrónico de la publicación, dirigida a Miguel Fanchovich, responsable de la sección.",
    },
    {
      title: "Entrevistas",
      content:
        "Tendrán una extensión de entre 6 y 11 páginas. Estas colaboraciones son evaluadas por el Consejo Editorial. Estas propuestas se remitirán al correo electrónico de la publicación indicando la sección donde pretende ser publicada.",
    },
    {
      title: "Consideraciones generales",
      content:
        "En todos los casos, el Consejo Editorial de FA revista decide si los trabajos recibidos son acordes con el campo temático de la revista, el estilo editorial de la publicación y en qué volumen se publican.",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Acerca de</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Conoce más sobre la revista académica FA, nuestro equipo editorial, políticas y directrices para autores.
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
                    <p className="text-gray-700 text-justify">
                      FA revista, es una publicación digital de acceso abierto, arbitrada del Instituto Provincial de Formación Docente Florentino Ameghino. Publica ensayos reflexivos sobre la práctica educativa, artículos académicos y de investigación originales e inéditos en español. Se ocupa de problematizar la relación entre educación y cultura en la práctica docente de nivel superior desde una perspectiva que articula múltiples disciplinas como las Humanidades y las Ciencias Sociales, las Artes y las Ciencias Biológicas y Exactas, con un estilo editorial que promueve una lectura dinámica de trabajos rigurosos.
                    </p>
                    <p className="text-gray-700 text-justify">
                      FA revista es una publicación dirigida a docentes e instituciones interesadas en los estudios en cultura y educación y disciplinas afines.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">Acerca de la organización de la revista y la periodicidad de la publicación</h3>
                    <p className="text-gray-700 text-justify">
                      La modalidad de publicación de FA revista es semestral. Se editan dos números por año que se publican en diciembre y en junio.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Publicación de acceso libre y sin costo</h3>
                      <div className="space-y-3">
                        <p className="text-gray-700 text-justify">
                          FA revista es una publicación de acceso libre. La revista no tiene ningún costo para las personas que decidan publicar en ella. Para acceder a los materiales publicados o para publicar no tiene ningún costo.
                        </p>
                        <p className="text-gray-700 text-justify">
                          Si el material enviado a la revista es aceptado por el Consejo Editorial y aprobado en proceso de arbitraje, sus autores se comprometen a cumplir con las pautas editoriales de la versión final del texto.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                      <Image
                        src="/portada1.png"
                        alt="Portada de la revista Koulana"
                        fill
                        className="object-contain"
                        priority
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
                          <span className="font-medium">Institución editora:</span> Instituto Provincial de Educación
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
                <p className="text-gray-700 text-justify">
                  Nuestro equipo editorial está compuesto por académicos e investigadores con amplia trayectoria en el
                  campo de la educación y la cultura, comprometidos con la calidad y el rigor científico.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {editorialTeam.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6"
                    >
                      <div className="space-y-3">
                        <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">{member.name}</h3>
                        <p className="text-sm font-medium text-blue-800">{member.role}</p>
                        <p className="text-sm text-gray-600 text-justify leading-relaxed">{member.bio}</p>
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
                <p className="text-gray-700 text-justify">
                  La FA revista organiza su contenido en secciones temáticas que reflejan las principales áreas de
                  interés en el campo de la educación y la cultura. Cada sección cuenta con criterios específicos para
                  la evaluación y selección de trabajos.
                </p>

                <div className="space-y-8 mt-6">
                  {thematicSections.map((section, index) => (
                    <div key={index} className="bg-white border rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-700 mb-4 text-justify">{section.description}</p>
                      <h4 className="text-base font-medium text-gray-900 mb-2">Tipos de trabajos aceptados:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {section.types.map((type, idx) => (
                          <li key={idx} className="text-justify">{type}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Proceso de evaluación</h3>
                  <p className="text-gray-700 mb-4 text-justify">
                    La revisión de los artículos académicos por pares según el principio doble ciego (el evaluador no conoce a lxs autorxs y lxs autorxs no conocen a sus evaluadorxs), garantiza un abordaje imparcial del trabajo enviado a la publicación. Hoy en día, dada la complejización y jerarquización del sistema académico y científico nacional e internacional, las publicaciones que no son evaluadas prácticamente carecen de validez académica en términos de evaluación de antecedentes y gran parte de quienes se dedican al trabajo académico tienden a publicar trabajos en revistas que garanticen una evaluación segura y rigurosa, que no es lo mismo que excluyente.
                  </p>
                  <p className="text-gray-700 mb-4 text-justify">
                    Para que un artículo sea evaluado, se tienden a considerar los siguientes puntos:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>La originalidad del trabajo de investigación o manuscrito;</li>
                    <li>Relevancia para el conocimiento sobre el tema y clara presentación del problema que se pretende abordar;</li>
                    <li>Marco de referencia: respaldo teórico adecuado. Determinación clara del objetivo del trabajo y de la(s) hipótesis. Referencias bibliográficas actualizadas y adecuadas al ámbito de investigación;</li>
                    <li>Metodología: uso apropiado y buena descripción de materiales y métodos;</li>
                    <li>Resultados: elaboración de conclusiones –parciales o no- que den cuenta del análisis realizado.</li>
                    <li>Aspectos formales: corrección en el lenguaje, citación y referencias según normalización de la revista.</li>
                  </ol>
                </div>
              </div>
            </TabsContent>

            {/* Directrices para autores */}
            <TabsContent value="directrices-para-autores" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Directrices para autores</h2>
                <p className="text-gray-700 text-justify">
                  A continuación se presentan las normas y directrices que deben seguir los autores interesados en
                  publicar en la FA revista. El cumplimiento de estas normas es indispensable para iniciar el
                  proceso de evaluación.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  {authorGuidelines.map((guideline, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-900">
                        {guideline.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-justify">{guideline.content}</AccordionContent>
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
                <p className="text-gray-700 text-justify">
                  Para cualquier consulta relacionada con FA revista, no dude en ponerse en contacto con nuestro
                  equipo editorial a través de los siguientes medios:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-800 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Correo electrónico</h3>
                          <p className="text-gray-700">farevista@ipesfa-ushuaia.edu.ar</p>
                          <p className="text-sm text-gray-500 mt-1">Tiempo de respuesta: 2-3 días hábiles</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-800 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Dirección</h3>
                          <p className="text-gray-700">
                            Instituto de Educación Superior (IPES FA)
                            <br />
                            Deloqui 237, Ushuaia TDF
                            <br />
                            Código Postal 9410
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Consultas específicas</h3>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Correo electrónico:</span> farevista@ipesfa-ushuaia.edu.ar
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
