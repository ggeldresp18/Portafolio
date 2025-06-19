import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export default function SocialButton({ icon: Icon, label, href }: SocialButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-blue-600 text-blue-600 hover:text-cyan-300 hover:border-cyan-300 transition-colors duration-200 justify-center"
      >
        <Icon className="w-4 h-4 mr-2 text-inherit" />
        {label}
      </Button>
    </a>
  );
}
