import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    links: { icon: string; label: string }[];
    live_url: string;
    repo_url: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">
              Tecnologías usadas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {project.links.map((link) => {
              const Icon = link.icon === "Github" ? Github : ExternalLink;
              const href =
                link.icon === "Github" ? project.repo_url : project.live_url;

              return (
                <Button
                  key={link.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-gray-600 hover:border-gray-500"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        <div className="relative w-full lg:w-64 h-48 lg:h-64">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-lg object-cover border-2 border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}