import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Sobre mí</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-lg leading-relaxed">
            Soy un desarrollador apasionado por la tecnología y la programación abocado al desarrollo backend.
            Actualmente me encuentro estudiando la carrera de Ingeniería de Sistemas.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}