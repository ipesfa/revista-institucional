"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    // Función para actualizar la pestaña activa
    const updateActiveTab = () => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search)
        const tab = urlParams.get("tab")
        if (tab) {
          setActiveTab(tab)
        } else {
          setActiveTab("sobre-la-revista")
        }
      }
    }

    // Actualizar al montar el componente
    updateActiveTab()

    // Escuchar cambios en la navegación
    const handlePopState = () => {
      updateActiveTab()
    }

    // Escuchar cambios en la URL (para navegación programática)
    const handleUrlChange = () => {
      updateActiveTab()
    }

    window.addEventListener('popstate', handlePopState)
    
    // Usar un observer para detectar cambios en la URL
    let currentUrl = window.location.href
    const checkUrlChange = () => {
      if (window.location.href !== currentUrl) {
        currentUrl = window.location.href
        handleUrlChange()
      }
    }

    const urlCheckInterval = setInterval(checkUrlChange, 100)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      clearInterval(urlCheckInterval)
    }
  }, [])

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
    {
      name: "Silvana Paula Quiroga",
      role: "Traducciones",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Traductora Literaria y Técnica Científica en inglés (ISLV) y Profesora en inglés (INFoD). Es docente e investigadora del Instituto Provincial de Enseñanza Superior \"Florentino Ameghino\". Actualmente, trabaja en su tesis que investiga la pérdida de interés en el aprendizaje de la lengua inglesa en el paso del nivel primario al secundario para la Licenciatura en la Enseñanza del inglés como Lengua Extranjera (UNIPE). Además, está diplomada en Gestión de Instituciones Educativas (UNIPE) y en Educación Domiciliaria y Hospitalaria (INFoD). Coordina las acciones de la Modalidad de Educación Domiciliaria y Hospitalaria para el Ministerio de Educación de Tierra del Fuego, A. e I. A. S.",
    },
  ]

  // Datos de las secciones temáticas
  const thematicSections = [
    {
      title: "PRÁCTICAS Y EXPERIENCIAS EDUCATIVAS",
      description: (
        <div>
          <p className="mb-4 text-justify">
            Hablar de práctica educativa docente, remite a desarrollar una actividad dinámica y reflexiva, donde los sucesos que acontecen en la interrelación entre estudiantes y docentes, incluyen la mediación didáctica ocurrida antes, durante y después de la práctica en el aula. Planear, interactuar y reflexionar son momentos de un tiempo mayor, en el que se inscribe la gestión de la enseñanza como una práctica situada en contextos que la definen como tal. Conocer para planificar; articular para interactuar; revisar para reflexionar, son instancias que ofrecen campo fértil donde las miradas personales se cruzan con las teorías, las expectativas, los logros, pero también los fracasos. Analizar sobre las prácticas educativas en general permite, al tomar distancia de lo cotidiano, transformarla y, en dicho proceso, transformarnos. Hacer de la práctica un objeto de estudio y de producción de conocimiento es un desafío necesario y enriquecedor.
          </p>
          <p className="mb-4 text-justify">
            Al describir los relatos sobre experiencias educativas, Liliana Ochoa sostiene que los "buenos relatos son claros, entretenidos, fáciles de leer, memorables y no demasiado extenso"1. Consideramos importante incentivar en docentes y estudiantes el registro (escrito, audiovisual, fotográfico) desde el momento de inicio de la planificación del proyecto pedagógico, su desarrollo y en las instancias finales. Ese registro puede derivar en un escrito final de la experiencia. Se sugiere recrear contextos de aula y enriquecerlos con entrevistas a los participantes. Dichas experiencias proporcionan un recurso crítico, teórico y conceptual. Lo importante es transmitir lo que sucedió y el valor pedagógico de la experiencia. Tanto la planificación del proyecto, las actividades, los recursos utilizados y las producciones de los alumnos pueden ser insumos para publicar. Las experiencias a publicar serán decididas por el Comité Editorial de FA Revista, por lo que no estarán sujetas a evaluaciones por jurados, pero sí de recomendaciones del citado Comité.
          </p>
          <p className="mb-2 text-justify">
            En el relato de la experiencia educativa a publicar, deberá mencionarse claramente:
          </p>
          <ol className="list-decimal list-inside mb-4 space-y-1 text-justify">
            <li className="text-justify">Los objetivos y las acciones de la experiencia.</li>
            <li className="text-justify">Los aspectos positivos y las dificultades con las que se encontraron.</li>
            <li className="text-justify">Las características de la institución en la que se llevó a cabo.</li>
            <li className="text-justify">Los cambios en el aula (actitudinales, pedagógicos, materiales, simbólicos, etc.) o en la escuela (normativas, curricular, relacional, etc.) que produjo la experiencia.</li>
            <li className="text-justify">Anécdotas (de los relatores, de los observados, de los directivos, etc.).</li>
            <li className="text-justify">Una conclusión final con una necesaria reflexión sobre la práctica.</li>
          </ol>
          <div className="text-xs text-gray-500 mt-6 border-t pt-2">
            <sup>1</sup> Ochoa, L. (2003). Módulo 2: La documentación narrativa de experiencias escolares. En Manual de capacitación sobre registro y sistematización de experiencias pedagógicas, Ministerio de Educación, Ciencia y Tecnología.
          </div>
        </div>
      ),
      types: [],
    },
    {
      title: "ARTÍCULOS CIENTÍFICOS",
      description: (
        <div>
          <p className="text-justify mb-4">
            Se recibirán trabajos vinculados a investigaciones científicas (como anteproyectos de investigación, investigaciones en su fase final o en curso) en temas referidos a los siguientes campos: Historia, Geografía, Enseñanza del Inglés, Educación Primaria, Educación Inicial, Biología, Matemáticas, Lengua & Literatura, Educación Especial, educación en general etc. La estructura del artículo científico enviado debe responder a lo establecido por el Comité Editorial de FA Revista. Los artículos científicos serán evaluados por el sistema doble/ciego y debe contener como mínimo los siguientes acápites propuestos por la misma:
          </p>
          <ol className="list-decimal list-inside text-justify mb-4 space-y-2">
            <li>
              <span className="font-bold">Título y subtítulo:</span> Debe ser claro y corto y de poseer un subtítulo, éste debe tener entre 15 y 20 palabras.
            </li>
            <li>
              <span className="font-bold">Nombre de o los autores:</span> Pueden ser acompañados del nombre de la Institución que representan y/o trabajan. La posibilidad de agregar un correo electrónico (personal o de la Institución) es opcional.
            </li>
            <li>
              <span className="font-bold">Resumen:</span> El mismo deberá tener una extensión entre 200 y 300 palabras; tendrá una breve descripción de cada parte del artículo (tema, objetivo, perspectiva teórica, metodología y/o conceptos importantes y resultados significativos o conclusiones relevantes); Abstract: el mismo resumen escrito en inglés.
            </li>
            <li>
              <span className="font-bold">Palabras clave:</span> Son un grupo de palabras fundamentales dentro del texto que permiten una fácil identificación de los conceptos abordados en el artículo. Usualmente pueden utilizarse 4 r términos claves.
            </li>
          </ol>
          <p className="text-justify">
            El artículo en sí mismo deberá responder a la siguiente estructura: Una <span className="font-bold">introducción</span> que contemple el propósito del mismo, los antecedentes, al menos una perspectiva teórica y una justificación. Un <span className="font-bold">desarrollo</span> dónde se estipule metodología, definiciones fundamentales y resultados (si los hubiere). Finalizará con un apartado con sus <span className="font-bold">conclusiones</span> y/o aproximaciones y por último la bibliografía que sustente el trabajo.
          </p>
        </div>
      ),
      types: [],
    },
    {
      title: "ENSAYOS ACADÉMICOS",
      description: (
        <div>
          <p className="text-justify mb-4">
            Por su tradición histórica e importancia en el devenir del mundo intelectual, el ensayo es imprescindible en el mundo académico. Se busca interpelar a la inventiva de sus productores (estudiantes, docentes, investigadores, etc.) y elaborar reflexiones críticas a partir de experiencias o investigaciones personales. Un ensayo implica la exploración sobre un tema determinado, donde el/la autor/a comprueba, explica, polemiza y expone su pensamiento y/u opinión con algún tipo de fundamento. En ocasiones propone una hipótesis, que explica, fundamenta, compara y discute frente a argumentos contrarios a lo que él propone (Argudín y Luna, 2005). Los ensayos académicos presentados serán evaluados por el sistema doble/ciego y deben ser realizados teniendo en cuenta las recomendaciones propuestas por el Comité Editorial de <span className="italic font-semibold">FA Revista</span>:
          </p>
          <p className="font-semibold italic text-justify mb-2">Recomendaciones a tener en cuenta para elaborar un ensayo académico:</p>
          <div className="space-y-3">
            <div>
              <span className="font-bold">Impacto de la problemática en el estado actual del campo de conocimiento:</span> <span className="text-justify">El tema que se aborde en el ensayo debe responder a una cuestión actual, o que sea de interés para sectores vinculados a la Historia, la Geografía, la enseñanza del inglés, la Educación Primaria, la Educación Inicial, la Biología, la Matemáticas, la Lengua & Literatura, la Educación Especial. En general temas asociados al universo de la educación en cualquiera de sus campos.</span>
            </div>
            <div>
              <span className="font-bold">Objetivo:</span> <span className="text-justify">El ensayo no busca ahondar en todas las posibilidades de un tema, sino que se concentra en algún apartado, una dimensión, un problema determinado. Al tener, a diferencia de un artículo académico, una carga subjetiva y personal del/la autor/a permite cierta libertad creativa al presentar la opinión. Pero se sugiere contar con un mínimo marco interpretativo que fundamente las posiciones teóricas, incluso si se utiliza el parafraseo en la redacción. Al final del trabajo se presentará la bibliografía de referencia.</span>
            </div>
            <div>
              <span className="font-bold">Carácter dialógico:</span> <span className="text-justify">Para lograr una comunicación efectiva, se debe intentar que el lector se mantenga interesado a lo largo de todo el trabajo, por lo cual se propone que a la estructura mínima del mismo (presentación, desarrollo, conclusiones) se organicen mediante apartados o subtítulos inviten a la reflexión y la indagación que abran nuevos caminos interpretativos, preguntas o formulaciones.</span>
            </div>
          </div>
        </div>
      ),
      types: [],
    },
    {
      title: "RESEÑAS BIBLIOGRÁFICAS",
      description: (
        <div>
          <p className="text-justify mb-4">
            La reseña bibliográfica es un breve estudio crítico que da cuenta de una publicación determinada con la intención de evaluarla y describirla. En otras palabras, la reseña permite la opinión reflexiva sobre una obra en particular. En ella se ofrece una mirada breve pero justificada sobre el libro, señalando sus fortalezas y debilidades. El Comité Editorial de <span className="italic font-semibold">FA Revista</span> propone publicar reseñas originales e inéditas de obras de no más de 2 años desde su publicación. Dado que suele ser un texto argumentativo-expositivo, es frecuente que se rija por una estructura como la siguiente:
          </p>
          <div className="space-y-3">
            <div>
              <span className="font-bold">Título:</span> <span className="text-justify">Es una frase que resume el espíritu del texto, muchas veces mencionando la obra a reseñar. Puede ir acompañado de un subtítulo o una aclaración. La importancia de este título es que funciona como disparador del deseo de abordarlo.</span>
            </div>
            <div>
              <span className="font-bold">Introducción:</span> <span className="text-justify">Es el primer apartado de la reseña, donde se brinda al lector una perspectiva general o la información previa que servirá para adentrarse en el cuerpo del texto. Dicho de otro modo, es una pequeña cartografía de la obra que invita a recorrer ese territorio.</span>
            </div>
            <div>
              <span className="font-bold">Desarrollo:</span> <span className="text-justify">Es el apartado central de la reseña, donde se expone el grueso del texto: argumentos, citas, reflexiones, opiniones, entre otros. En esta parte el redactor sin alejarse del fondo de la obra se permite la crítica, la comparación, la deconstrucción del texto y donde empieza a perfilar su mirada personal sobre la obra. Es la parte más creativa del texto.</span>
            </div>
            <div>
              <span className="font-bold">Conclusiones:</span> <span className="text-justify">Es el apartado final de la reseña, donde se ofrece un cierre, una sensación general respecto de lo reseñado y, en ocasiones, información accesoria tal como dónde conseguir la obra reseñada, información editorial, etc.</span>
            </div>
          </div>
        </div>
      ),
      types: [],
    },
    {
      title: "ENTREVISTAS",
      description: (
        <div>
          <p className="text-justify mb-4">
            En general se asocia la entrevista con el periodismo, y en una segunda instancia con el oficio del investigador social. También se suele creer que basta contar con una grabadora y preguntarle a la gente sobre lo que interesa o se cree de interés para la sociedad. No obstante, la entrevista es una técnica que demanda gran preparación y que sólo es útil si se realiza correctamente. Con las precauciones metodológicas pertinentes, el Comité Editorial de <span className="font-bold">FA Revista</span> invita a docentes, investigadores, estudiantes a presentar para su publicación, entrevistas que consideren relevantes en el marco de sus trayectorias (investigaciones en curso o finalizadas; trayectorias de formación, experiencias educativas, etc.) de carácter inédito o no publicadas en otros soportes de divulgación. Atento a lo establecido anteriormente, el Comité Editorial de <span className="font-bold">FA Revista</span> se atribuye la potestad de publicar entrevistas que considere relevantes para la comunidad académica en particular y a la sociedad en general, poniendo especial énfasis en aquellos trabajos que comulguen en mayor medida con ciertos requerimientos editoriales:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-justify">
              Se priorizará la entrevista a un personaje destacado (de la cultura en general o del ámbito de la educación en particular) antes que la que se desarrolla como parte del cubrimiento de un hecho noticioso (sin que esto presuponga su descarte definitivo)
            </li>
            <li className="text-justify">
              Aunque la entrevista supone un diseño previo del diálogo (un diálogo formal no improvisado), podrán ser excepcionalmente publicadas, registros de charlas informales o espontáneas en las que se advierta de un aporte relevante y donde el Comité Editorial de <span className="font-bold">FA Revista</span> considere existe una riqueza conceptual/testimonial que aporte a la construcción de futuros objetos de estudio.
            </li>
            <li className="text-justify">
              Asociado al punto anterior el Comité Editorial de <span className="font-bold">FA Revista</span>, priorizará las entrevistas realizadas a aquellas personas (o grupos de personas) que, debido a su posición social, trayectoria académica, conocimientos aportados, trabajos realizados o logros destacados en algún ámbito de la sociedad, recabar sus testimonios y experiencias existenciales se consideren relevantes para enriquecer el acervo cultural de la institución y la sociedad toda.
            </li>
          </ul>
        </div>
      ),
      types: [],
    },
    {
      title: "DILEMAS Y COYUNTURAS",
      description: (
        <div>
          <p className="text-justify mb-4">
            Esta sección invita a poner en consideración de la comunidad, problemáticas que afecten a la sociedad en general y muy particularmente al ámbito de la educación en todos sus niveles y modalidades. Consideramos al dilema desde el punto filosófico, como la posibilidad de elección frente a dos opciones, o alternativas difíciles o conflictivas, ambas con implicaciones negativas o desafiantes.<sup>1</sup> Siendo que este tipo de elecciones están presentes cotidianamente, proponemos este espacio que posibilite el debate, amplíe la participación de diversos actores sociales, enriquezca el abordaje de particularidades complejas, posibilite la confrontación de ideas, percepciones y marcos teóricos; un espacio que pretende ser un escenario posible cuando, en muchas ocasiones, el encuentro de marcos de interpretación muchas veces controversiales o incontrastables, se tornan difíciles de establecer.
          </p>
          <p className="text-justify mb-4">
            El Comité Editorial de <span className="italic font-semibold">FA Revista</span> invita a la comunidad educativa a apropiarse de este espacio, en la convicción de que la coyuntura lo amerita, y el debate, como confrontación respetuosa de puntos de vista o esquemas de interpretación, puede presentarse como andamiaje y motor de futuras investigaciones, tribuna de investigaciones en curso o por concluir, o simplemente, establecer algunos parámetros, conceptualizaciones o señales del curso de ciertas discusiones que atraviesan a la sociedad.
          </p>
          <p className="text-justify mb-4">
            El debate es constitutivo de toda instancia democrática desde los albores de esta práctica relacional de la especie humana. En el debate se plantean ideas, se confrontan realidades disímiles, se aborda la diferencia como marco de existencia. La valoración final del mismo no remite a la competencia en sí misma, sino en el recorrido que valida la confrontación y desnuda posturas políticas, implicancias ideológicas o marcos filosóficos. De allí que el debate, se muestre como una brisa fresca que intenta esclarecer el camino a recorrer o recorrido con respecto a ciertos temas sensibles para la comunidad.
          </p>
          <div className="text-xs text-gray-500 mt-6 border-t pt-2">
            <sup>1</sup> <span className="font-bold">DILEMA</span> (lat. <span className="italic">dilemma</span>): Forma compleja de la argumentación disyuntiva en la que, partiendo de una disyunción, se muestra, a través de las premisas menores, que todos los términos de la disyunción conducen a una misma consecuencia. Cuaderno de materiales. Glosario de conceptos filosóficos:<br/>
            Extraído el 29/06/2025 de: <a href="https://www.filosofia.net/materiales/rec/glosario.htm#d" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">https://www.filosofia.net/materiales/rec/glosario.htm#d</a>
          </div>
        </div>
      ),
      types: [],
    },
  ]

  // Datos de las directrices para autores
  const authorGuidelines = [
    {
      title: "Generales",
      content: (
        <div className="space-y-4">
          <p className="text-justify">
            Las contribuciones enviadas a la revista tienen que ser originales. En caso de que se envíen textos ya publicados, los autores deben responsabilizarse de obtener los permisos para reproducir el trabajo.
          </p>
          <p className="text-justify">
            Los artículos enviados deben ajustarse a la política de secciones de la revista:
          </p>
          <ul className="list-disc list-inside space-y-1 text-justify">
            <li>Prácticas y experiencias educativas</li>
            <li>Ensayos académicos</li>
            <li>Artículos científicos</li>
            <li>Dilemas y coyunturas</li>
            <li>Relatos breves</li>
            <li>Reseñas bibliográficas</li>
            <li>Entrevistas</li>
          </ul>
          <p className="text-justify">
            Cada número de FA Revista cuenta con un dossier que define la temática para cada convocatoria.
            Se pueden enviar contribuciones a la sección Artículos libres.
            Solo se recibirán archivos en formato OpenOffice o Microsoft Word.
            Los trabajos que no respeten todas las normas de publicación de FA Revista serán devueltos para su adecuación.
          </p>
        </div>
      ),
    },
    {
      title: "Aspectos éticos",
      content: (
        <div className="space-y-4">
          <p className="text-justify">
            Tanto en lo que respecta a los aspectos éticos, como a la resolución de conflicto de interés tanto internos como externos, FA Revista se adhiere a las políticas del Consejo Nacional de Investigaciones Científicas y Técnicas respecto a los "Lineamientos para el comportamiento ético en las Ciencias Sociales y Humanidades". Los autores deben presentar sus resultados con claridad, honestidad y sin falsificación, o manipulación inadecuada de los datos.
          </p>
          <p className="text-justify">
            Al mismo tiempo, las contribuciones deben asumir el respeto por la libertad, los derechos humanos, el intercambio abierto de las interpretaciones científicas de la vida democrática. Y mantener y promover, de este modo, la dignidad, la honestidad, el espíritu crítico, la objetividad y la transparencia en la difusión de los trabajos.
          </p>
          <p className="text-justify">
            Los autores deben asegurar que los datos y resultados expuestos en el trabajo son originales y no han sido copiados, inventados, distorsionados o manipulados.
            Los autores se comprometen a enviar textos originales sin incurrir en prácticas ilegítimas de plagio.
          </p>
        </div>
      ),
    },
    {
      title: "Garantizar una evaluación anónima",
      content: (
        <div className="space-y-4">
          <p className="text-justify">
            Una evaluación por pares doble ciego significa que tanto el autor como el evaluador de un artículo desconocen mutuamente la identidad de las personas que se encuentran en el otro extremo del proceso de arbitraje.
          </p>
          <p className="text-justify">
            Para favorecer este proceso es imprescindible que los autores envíen sus artículos con su anonimato garantizado. Para ello proponemos seguir los siguientes pasos:
          </p>
          <ul className="list-disc list-inside space-y-1 text-justify">
            <li>Anonimizar el archivo en el software utilizado.</li>
            <li>Modificar todas las referencias a los autores (nombre, institución, referencias a escritos y trabajos propios, etc.) por la fórmula "[Autor/a]"</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Estructura interna de las contribuciones",
      content: (
        <div className="space-y-6">
          <p className="text-justify">
            La información que sigue es indicativa de los componentes que deberán tener los manuscritos en su cuerpo principal. Ello no implica que necesariamente deba nombrarse de esa misma forma cualquier ordenamiento interno del texto.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Prácticas y experiencias educativas (Extensión: entre 4500 y 10 mil palabras)</h4>
              <ul className="list-disc list-inside space-y-1 text-justify ml-4">
                <li>Título (español e inglés)</li>
                <li>Palabras clave (español e inglés)</li>
                <li>Introducción (despliegue de la ficha curricular: nivel, institución, área curricular, líneas de investigación)</li>
                <li>Contextualización (propósitos, estrategias, metodologías, actividades, etc.)</li>
                <li>Descripción y análisis de la experiencia</li>
                <li>Conclusiones o reflexiones a modo de cierre</li>
                <li>Referencias bibliográficas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Ensayos académicos (Extensión: entre 6 mil y 10 mil palabras)</h4>
              <ul className="list-disc list-inside space-y-1 text-justify ml-4">
                <li>Título (español, inglés)</li>
                <li>Resumen (español, inglés)</li>
                <li>Palabras clave (español, inglés)</li>
                <li>Introducción (presentación del problema sobre el cual se elaborará la reflexión)</li>
                <li>Desarrollo</li>
                <li>Conclusiones</li>
                <li>Referencias bibliográficas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Artículos científicos (Extensión: entre 6 mil y 10 mil palabras)</h4>
              <ul className="list-disc list-inside space-y-1 text-justify ml-4">
                <li>Título (español, inglés)</li>
                <li>Resumen (español, inglés)</li>
                <li>Palabras clave (español, inglés)</li>
                <li>Introducción (propósito, antecedentes, justificación)</li>
                <li>Apartado teórico-metodológico (construcción del problema y estrategia analítica)</li>
                <li>Desarrollo (análisis, resultados -si los hubiese-)</li>
                <li>Conclusiones</li>
                <li>Referencias bibliográficas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Dilemas y coyunturas</h4>
              <p className="text-justify ml-4">
                Promover el debate y el pensamiento crítico en torno a distintos problemas sociales. Específicamente, busca recibir trabajos de interpretación y de intervención en las polémicas vinculadas a la relación entre Estado, cultura, partidos y políticas educativas. Estos dilemas pueden estar localizados a escala local, como también a escala provincial y nacional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Literaturas breves (1500 palabras)</h4>
              <p className="text-justify ml-4">
                Promover y divulgar escritos ficcionales y no ficcionales originales e inéditos de estudiantes y docentes, además de escritoras y escritores locales invitadas/os. Publicaremos textos incluidos en cualquiera de los géneros literarios: cuentos, poemas, dramas breves, ensayos, crónicas y otros, con una extensión máxima de 1.500 palabras.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Comentarios bibliográficos</h4>
              <ul className="list-disc list-inside space-y-1 text-justify ml-4">
                <li>Título (español, inglés)</li>
                <li>Información del autor de la reseña</li>
                <li>Nombre del autor de la publicación presentada</li>
                <li>Referencia bibliográfica detallada sobre la publicación</li>
                <li>Texto de la reseña</li>
                <li>Antecedentes</li>
                <li>Presentación del texto</li>
                <li>Discusión / Análisis</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Entrevistas</h4>
              <ul className="list-disc list-inside space-y-1 text-justify ml-4">
                <li>Título (español, inglés)</li>
                <li>Datos del/los entrevistadores</li>
                <li>Información del entrevistado</li>
                <li>Entrevista inédita</li>
                <li>Autorización del entrevistado para su publicación</li>
                <li>Puede incluir fotografías siempre y cuando hayan sido tomadas por los autores de la entrevista o cedidas por el entrevistado</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Envío de propuestas de Dossier",
      content: (
        <div className="space-y-4">
          <p className="text-justify">
            Para coordinar un Dossier es necesario realizar una propuesta al Consejo editorial de la revista con una antelación de al menos un año.
          </p>
          <p className="text-justify">
            La misma debe ser remitida a los correos de contacto: <span className="text-blue-800 font-semibold">farevista@ipesfa-ushuaia.edu.ar</span>. Dicha propuesta, a cargo del o los coordinadores del dossier, debe contener:
          </p>
          <ul className="list-disc list-inside space-y-1 text-justify">
            <li>a) la presentación del tema,</li>
            <li>b) un breve CV del o los coordinadores (hasta tres páginas).</li>
          </ul>
          <p className="text-justify">
            Si la propuesta es aprobada por el Consejo editorial de Fa Revista, se organizará un esquema de trabajo conjunto.
          </p>
        </div>
      ),
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
                        src="/portada01.png"
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
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2 uppercase tracking-wide">
                        {section.title}
                      </h3>
                      {section.description}
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
                      <Link href="https://drive.google.com/file/d/1vZgIT5QYhIHgSfP5RHbW_4ftIZKpYkJX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                        Normas APA
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="bg-blue-800 hover:bg-blue-700">
                    <Link href="https://forms.gle/w4r3ysMwzbv85ryd6" target="_blank" rel="noopener noreferrer">Enviar un artículo</Link>
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

                <div className="max-w-2xl">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-800 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Correo electrónico</h3>
                          <p className="text-blue-800 font-semibold">farevista@ipesfa-ushuaia.edu.ar</p>
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
                          <span className="font-medium">Correo electrónico:</span> <span className="text-blue-800 font-semibold">farevista@ipesfa-ushuaia.edu.ar</span>
                        </p>
                      </div>
                    </div>
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
