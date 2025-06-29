import Image from "next/image"
import Link from "next/link"

export default function ActualPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Número Actual</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Año 1 · Volumen 1 · Julio 2025
        </p>
      </div>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12 flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Contenido del Último Número</h2>
            <div className="h-1.5 w-24 bg-blue-800 rounded-full"></div>
          </div>

          {/* Presentación Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Columna izquierda: texto y chips */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Presentación</h3>
                <p className="mb-6 text-gray-700 text-justify text-lg">
                  Este número de FA revista explora las transformaciones educativas post-pandemia y los nuevos paradigmas en la enseñanza superior. Incluye investigaciones sobre metodologías híbridas, el impacto de la inteligencia artificial, y estudios culturales sobre la adaptación de instituciones educativas a los desafíos contemporáneos.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-medium">Educación</span>
                  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-medium">Tecnología</span>
                  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-medium">Cultura</span>
                  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-medium">Investigación</span>
                </div>
              </div>
              {/* Columna derecha: imagen */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md h-48 md:h-56 lg:h-64 bg-gray-100 rounded-xl flex items-center justify-center relative">
                  <Image
                    src="/volumen2.png"
                    alt="Portada de la revista"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dossier Temático Section */}
          <div className="mb-16">
            <h3 className="mb-6 text-xl font-bold text-gray-900 flex items-center gap-3">
              Dossier Temático
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Pedagogías territoriales y clima escolar en contextos extremos</h4>
                <p className="mb-6 text-gray-600 text-justify">Mariana Velázquez</p>
                <div className="flex gap-6">
                  <Link href="/pdf/dossier-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/dossier-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">La formación docente ante los desafíos de la inteligencia artificial</h4>
                <p className="mb-6 text-gray-600 text-justify">Tomás Benítez</p>
                <div className="flex gap-6">
                  <Link href="/pdf/dossier-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/dossier-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Prácticas y Experiencias Section */}
          <div className="mb-16">
            <h3 className="mb-6 text-xl font-bold text-gray-900 flex items-center gap-3">
              Prácticas y Experiencias Educativas
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Aula taller en contextos de plurigrado: experiencias desde Almanza</h4>
                <p className="mb-6 text-gray-600 text-justify">Equipo Docente Escuela 38</p>
                <div className="flex gap-6">
                  <Link href="/pdf/practica-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/practica-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Uso de podcasts como recurso didáctico en ESI</h4>
                <p className="mb-6 text-gray-600 text-justify">Prof. Carla Iriarte</p>
                <div className="flex gap-6">
                  <Link href="/pdf/practica-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/practica-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Artículos Científicos Section */}
          <div className="mb-16">
            <h3 className="mb-6 text-xl font-bold text-gray-900 flex items-center gap-3">
              Artículos Científicos
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">La enseñanza de la biología en entornos rurales: estudio de caso en Tolhuin</h4>
                <p className="mb-6 text-gray-600 text-justify">Gustavo Ilari</p>
                <div className="flex gap-6">
                  <Link href="/pdf/articulo-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/articulo-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Procesos de alfabetización científica en la escuela secundaria fueguina</h4>
                <p className="mb-6 text-gray-600 text-justify">Paula Sosa</p>
                <div className="flex gap-6">
                  <Link href="/pdf/articulo-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/articulo-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Ensayos Académicos Section */}
          <div className="mb-16">
            <h3 className="mb-6 text-xl font-bold text-gray-900 flex items-center gap-3">
              Ensayos Académicos
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Docencia y subjetividad: el rol de la emocionalidad en el aula</h4>
                <p className="mb-6 text-gray-600 text-justify">Malena Figueroa</p>
                <div className="flex gap-6">
                  <Link href="/pdf/ensayo-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/ensayo-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Descolonizar el currículo: una mirada desde el sur</h4>
                <p className="mb-6 text-gray-600 text-justify">Julián Cáceres</p>
                <div className="flex gap-6">
                  <Link href="/pdf/ensayo-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/ensayo-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dilemas y Coyunturas Section */}
          <div className="mb-16">
            <h3 className="mb-6 text-xl font-bold text-gray-900 flex items-center gap-3">
              Dilemas y Coyunturas
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Educación y meritocracia: tensiones en el discurso institucional</h4>
                <p className="mb-6 text-gray-600 text-justify">Lic. Ana Caprile</p>
                <div className="flex gap-6">
                  <Link href="/pdf/dilema-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/dilema-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Infraestructura escolar y políticas públicas en el sur argentino</h4>
                <p className="mb-6 text-gray-600 text-justify">Mg. Héctor Lapido</p>
                <div className="flex gap-6">
                  <Link href="/pdf/dilema-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/dilema-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Reseñas Section */}
          <div className="mb-16">
            <h3 className="mb-6 text-xl font-bold text-gray-900 flex items-center gap-3">
              Reseñas
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Reseña de Pedagogías del sur de N. Ferreyra</h4>
                <p className="mb-6 text-gray-600 text-justify">Prof. Julieta Massi</p>
                <div className="flex gap-6">
                  <Link href="/pdf/resena-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/resena-1" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border bg-white p-8 transition-all duration-300">
                <h4 className="mb-3 text-lg font-semibold text-blue-800">Lectura crítica de Cuerpos que educan de L. Melgarejo</h4>
                <p className="mb-6 text-gray-600 text-justify">Lic. Germán Ruiz</p>
                <div className="flex gap-6">
                  <Link href="/pdf/resena-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    PDF
                  </Link>
                  <Link href="/html/resena-2" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    HTML
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/archivos"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span>Ver todos los números</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          {/* Bloque de descarga offline y ver números anteriores */}
          <div className="w-full bg-transparent mt-12 flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg w-full max-w-5xl">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">¿Prefieres leer offline?</h3>
                <p className="text-gray-600">Descarga el número completo en formato PDF para leerlo cuando y donde quieras.</p>
              </div>
              <a
                href="/downloads/koulana-vol7-num1.pdf"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition-colors text-base font-medium"
                download
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Descargar PDF completo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
