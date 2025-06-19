import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "../lib/constants";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Proyectos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
}