import { Badge } from "@/components/ui/badge";
import type { IconType } from "react-icons";

interface TechnologyBadgeProps {
  technology: {
    name: string;
    icon: IconType;
  };
}

export default function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const Icon = technology.icon;

  return (
    <Badge
      variant="secondary"
      className="bg-gray-700 text-gray-200 hover:bg-gray-600 px-3 py-1 text-sm flex items-center gap-2"
    >
      <Icon className="w-5 h-5" />
      <span className="sr-only">{technology.name}</span>
      <span className="hidden md:inline">{technology.name}</span>
    </Badge>
  );
}
