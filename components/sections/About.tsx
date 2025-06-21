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
            Soy un desarrollador apasionado por la tecnología y la programación, con un enfoque definido en el desarrollo backend. Actualmente curso la carrera de Ingeniería de Sistemas, lo que me permite complementar mi formación académica con proyectos reales y experiencias prácticas.
            
            Me especializo en el desarrollo de aplicaciones web y móviles, priorizando la calidad del código, la escalabilidad de la arquitectura y la aplicación de patrones de diseño como MVC y MVVM. Trabajo tanto con APIs REST como con GraphQL, adaptándome a las necesidades específicas de cada proyecto y buscando siempre una comunicación eficiente entre sistemas.
            
            Las tecnologías y frameworks con las que más trabajo son Django, NestJS, Laravel y Spring Boot. Estoy en constante aprendizaje, explorando nuevas herramientas y enfoques que me permitan crecer como desarrollador. Me interesa construir soluciones funcionales, sostenibles y que realmente aporten valor.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
