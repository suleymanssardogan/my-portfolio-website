import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <div className="space-y-24 md:space-y-32 mb-20">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
