import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}