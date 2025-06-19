import { Mail, FileText, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import SocialButton from "../ui/SocialButton";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Gavino Geldres Pinto</h1>
            <p className="text-xl text-gray-300">Desarrollador web y mobile en constante formación, estudiante de Ingeniería de Sistemas</p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Lima, Perú</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <SocialButton icon={Mail} label="Email" href="mailto:gavinogeldresp@gmail.com" />
            <SocialButton icon={FileText} label="CV" href="/cv_gavino_geldres.pdf" />
            <SocialButton icon={Github} label="GitHub" href="https://github.com/ggeldresp18" />
            <SocialButton icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/gavino-gabriel-geldres-pinto" />
          </div>

        </div>
        <ProfileImage />
      </div>
    </header>
  );
}

const ProfileImage = () => (
  <div className="flex-shrink-0">
    <div className="relative w-64 h-64 lg:w-80 lg:h-80">
      <Image
        src="/profile.jpeg?height=240&width=240"
        alt="Gavino Geldres Pinto"
        fill
        className="rounded-2xl object-cover border-4 border-gray-700"
      />
    </div>
  </div>
);