import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import ValueProposition from "@/components/portfolio/ValueProposition";
import ProfessionalExperience from "@/components/portfolio/ProfessionalExperience";
import RealProjects from "@/components/portfolio/RealProjects";
import Education from "@/components/portfolio/Education";
import ContactCTA from "@/components/portfolio/ContactCTA";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
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
    </div>
  );
};

export default Index;
