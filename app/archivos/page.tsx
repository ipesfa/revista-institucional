import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ArchivosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Archivos</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Archivo de Publicaciones</CardTitle>
            <CardDescription>
              Acceso a las publicaciones anteriores de la revista
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Esta sección contendrá el archivo completo de todas las publicaciones 
              anteriores de la revista FA, organizadas por volumen y fecha.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Volumen 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Publicaciones del primer volumen de la revista.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Volumen 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Publicaciones del segundo volumen de la revista.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Volumen 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Publicaciones del tercer volumen de la revista.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Búsqueda en Archivos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Próximamente se implementará una función de búsqueda para facilitar 
              la navegación por los archivos históricos de la revista.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
