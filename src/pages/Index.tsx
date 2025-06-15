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
        <Hero />
        <ValueProposition />
        <ProfessionalExperience />
        <RealProjects />
        <Education />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
