import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TECHNOLOGIES } from "../lib/constants";
import TechnologyBadge from "../ui/TechnologyBadge";

export default function Technologies() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Tecnologías</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {TECHNOLOGIES.map((tech) => (
              <TechnologyBadge key={tech.name} technology={tech} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}