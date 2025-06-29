import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Journal Title and Submit Article Link - static on main page */}
      <section className="bg-blue-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Journal Cover Image - perfectly centered in the blue strip */}
            <div className="flex items-center justify-center h-[160px] flex-shrink-0">
              <div className="relative w-[100px] h-[140px]">
                <Image
                  src="/portada1.png"
                  alt="Portada de la revista Koulana"
                  width={100}
                  height={140}
                  className="object-contain shadow-md"
                />
              </div>
            </div>
            {/* Journal Title */}
            <div className="flex-grow">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal text-white leading-tight">
                FA revista
              </h1>
              <p className="text-sm md:text-base text-white/90 mt-1">
                Revista académica del IPES Florentino Ameghino
              </p>
              {/* Submit Article Link - Desktop */}
              <div className="hidden md:block mt-2">
                <Link href="/convocatoria" className="inline-flex items-center text-sm text-white hover:underline">
                  Enviar artículo
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
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Submit Article Link - Mobile */}
            <div className="md:hidden w-full">
              <Link href="/convocatoria" className="inline-flex items-center text-sm text-white hover:underline">
                Enviar artículo
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <main>
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 max-w-4xl mx-auto">
              {/* Texto */}
              <div className="flex-1 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-5">
                <h1 className="text-2xl md:text-4xl font-semibold text-blue-900 leading-tight">Número actual</h1>
                <p className="text-base md:text-lg text-gray-500">Año 1 · Volumen 1</p>
                <p className="text-base md:text-lg text-gray-600 max-w-md text-justify">Descubre los artículos, ensayos y experiencias educativas más recientes publicados en nuestra revista académica semestral del IPES Florentino Ameghino.</p>
                <Link
                  href="/actual"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-800 px-8 py-3 text-base font-medium text-white hover:bg-blue-800 transition-all duration-300 ease-in-out shadow-md mt-2"
                >
                  Explorar artículos
                </Link>
              </div>
              {/* Imagen */}
              <div className="flex-1 w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                <div className="relative w-40 h-56 md:w-52 md:h-72">
                  <Image
                    src="/portada1.png"
                    alt="Portada de la revista Koulana"
                    fill
                    className="object-contain rounded-xl shadow-sm"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        {/* (Eliminado: todo el contenido del último número, solo debe estar en /actual) */}

        {/* Call to Action */}
        <section className="bg-blue-50 py-10 md:py-14">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-semibold text-blue-900">Convocatoria abierta</h2>
              <p className="max-w-xl text-blue-900/80 text-base">Envía tu artículo para el próximo número de FA revista.</p>
              <div className="flex justify-center pt-2">
                <Link
                  href="/convocatoria"
                  className="flex h-9 items-center justify-center rounded-md bg-blue-800 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-800"
                >
                  Conocer más
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
