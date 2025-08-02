import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-hero-bg flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-white/20 overflow-hidden shadow-lg">
              <img 
                src="https://i.postimg.cc/cCQT0VfT/my-img.jpg"
                alt="Shaik Sharif"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sharif Shaik
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Data enthusiast skilled in building intelligent systems and visualizing impactful insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30 px-8 py-3 text-base font-medium rounded-lg transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white/20 backdrop-blur px-8 py-3 text-base font-medium rounded-lg transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              className="mx-auto h-6 w-6 text-white/60 cursor-pointer hover:text-white transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;