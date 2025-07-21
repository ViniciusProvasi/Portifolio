import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import ValueProposition from "@/components/portfolio/ValueProposition";
import ProfessionalExperience from "@/components/portfolio/ProfessionalExperience";
import RealProjects from "@/components/portfolio/RealProjects";
import Education from "@/components/portfolio/Education";
import ContactCTA from "@/components/portfolio/ContactCTA";
import Footer from "@/components/portfolio/Footer";
import FloatingActionButton from "@/components/portfolio/FloatingActionButton";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import { usePerformanceOptimization } from "@/hooks/use-performance";

const Index = () => {
  // Aplicar otimizações de performance
  usePerformanceOptimization();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <section id="hero" data-animate>
          <Hero />
        </section>
        <section id="value-proposition" data-animate>
          <ValueProposition />
        </section>
        <section id="experience" data-animate>
          <ProfessionalExperience />
        </section>
        <section id="projects" data-animate>
          <RealProjects />
        </section>
        <section id="education" data-animate>
          <Education />
        </section>
        <section id="contact" data-animate>
          <ContactCTA />
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
