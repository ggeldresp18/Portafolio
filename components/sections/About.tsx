import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Sobre mí</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              Me enfoco en crear soluciones funcionales y sostenibles, cuidando la calidad del código y la estructura del software. Disfruto enfrentar desafíos técnicos que me permitan seguir creciendo y aportar valor real a cada proyecto.
            </p>
            <p>
              Me interesa construir productos bien diseñados, eficientes y pensados para escalar, siempre manteniendo buenas prácticas y una comunicación efectiva entre sistemas.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
