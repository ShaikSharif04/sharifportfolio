import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I am a final-year B.Tech student specializing in Data Science at CMR Institute of 
            Technology, Hyderabad, with a current CGPA of 7.1. I am passionate about developing 
            intelligent, data-driven solutions and have hands-on experience with programming 
            languages such as Python, Java, and SQL.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-lg text-foreground leading-relaxed mb-6 px-[64px] mx-[7px] my-[4px] py-[2px]">
              With a strong foundation in analytics, software development, and 
              machine learning, I am eager to contribute to innovative projects that 
              make real-world impact. I'm actively seeking opportunities where I can 
              apply my skills, grow as a professional, and support organizational goals 
              through data-centric thinking and problem-solving.
            </p>
          </div>

          {/* Education Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* B.Tech Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-elegant">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-semibold text-primary">B.Tech in Data Science</h3>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">CMR Institute of Technology</p>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                  <MapPin className="h-3 w-3" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>2022 - 2026</span>
                </div>
                <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  CGPA: 7.1/10
                </span>
              </CardContent>
            </Card>

            {/* Pre-University Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-elegant">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-semibold text-primary">Pre-University Education</h3>
                </div>
                <p className="text-sm font-medium text-foreground">ASR Govt Jr College</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;