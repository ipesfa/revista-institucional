import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter text-blue-800 sm:text-5xl md:text-6xl">1ra Edición</h1>
                  <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">Revista Académica del IPES FA</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Publicación semestral de temas de educación y cultura.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/actual"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                  >
                    Último número
                  </Link>
                  <Link
                    href="/convocatoria"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
                  >
                    Enviar artículo
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[320px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/portada-koulana.png"
                    alt="Portada del último número de Koulana"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Issue Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex flex-col items-start gap-4">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Número Actual</h2>
              <div className="h-1 w-20 bg-blue-800"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow transition-all hover:shadow-md">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Artículo destacado"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="mb-2 text-sm font-medium text-blue-800">Educación</p>
                  <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">
                    Nuevas perspectivas en la educación contemporánea
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">Por María González y Juan Pérez</p>
                  <Link href="/articulo/1" className="text-sm font-medium text-blue-800 hover:underline">
                    Leer artículo →
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow transition-all hover:shadow-md">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Artículo destacado"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="mb-2 text-sm font-medium text-blue-800">Cultura</p>
                  <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">
                    El impacto cultural de las nuevas tecnologías
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">Por Carlos Rodríguez</p>
                  <Link href="/articulo/2" className="text-sm font-medium text-blue-800 hover:underline">
                    Leer artículo →
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow transition-all hover:shadow-md">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Artículo destacado"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="mb-2 text-sm font-medium text-blue-800">Investigación</p>
                  <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">
                    Metodologías de investigación en ciencias sociales
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">Por Ana Martínez y Luis Sánchez</p>
                  <Link href="/articulo/3" className="text-sm font-medium text-blue-800 hover:underline">
                    Leer artículo →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/actual"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
              >
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex flex-col items-start gap-4">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Números Anteriores</h2>
              <div className="h-1 w-20 bg-blue-800"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <Link
                  key={item}
                  href={`/archivos/${item}`}
                  className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow transition-all hover:shadow-md"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&text=Vol.${5 - item}`}
                      alt={`Volumen ${5 - item}`}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Volumen {5 - item}</h3>
                      <p className="text-sm text-gray-600">
                        {item % 2 === 0 ? "Enero - Junio" : "Julio - Diciembre"} {2023 - Math.floor(item / 2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/archivos"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
              >
                Ver archivo completo
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-800 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Convocatoria Abierta</h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Invitamos a investigadores y académicos a enviar sus artículos para el próximo número de Revista FA.
                </p>
              </div>
              <Link
                href="/convocatoria"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-800 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Conocer más
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
