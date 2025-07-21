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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="value-proposition">
          <ValueProposition />
        </section>
        <section id="experience">
          <ProfessionalExperience />
        </section>
        <section id="projects">
          <RealProjects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <ContactCTA />
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
