import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-white/30 shadow-glow overflow-hidden">
                <img 
                  src="https://i.postimg.cc/cCQT0VfT/my-img.jpg"
                  alt="Shaik Sharif"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Shaik <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Sharif</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-purple-100 font-light">
            Data Science Undergraduate
          </p>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto text-purple-50 leading-relaxed">
            Data enthusiast skilled in building intelligent systems and visualizing impactful insights.
            Passionate about merging software development with data-driven solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-elegant transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              className="mx-auto h-8 w-8 text-white/70 cursor-pointer hover:text-white transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;