import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, FileText, Github, Linkedin } from "lucide-react";
import SocialButton from "../ui/SocialButton";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <SocialButton icon={Mail} label="Email" href="mailto:gavinogeldresp@gmail.com" />
            <SocialButton icon={FileText} label="CV" href="/cv_gavino_geldres.pdf" />
            <SocialButton icon={Github} label="GitHub" href="https://github.com/ggeldresp18" />
            <SocialButton icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/gavino-gabriel-geldres-pinto" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}