import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ServicesSection from "@/components/Portfolio/ServicesSection";
import CertificationsSection from "@/components/Portfolio/CertificationsSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
