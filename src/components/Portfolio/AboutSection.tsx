import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a final-year B.Tech student specializing in Data Science at CMR Institute of Technology, Hyderabad, 
            with a current CGPA of 7.1. I am passionate about developing intelligent, data-driven solutions and have 
            hands-on experience with programming languages such as Python, Java, and SQL.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed mx-0 my-0 py-0 px-0">
              With a strong foundation in analytics, software development, and machine learning, I am eager to 
              contribute to innovative projects that make real-world impact. I'm actively seeking opportunities 
              where I can apply my skills, grow as a professional, and support organizational goals through 
              data-centric thinking and problem-solving.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My interests lie in data engineering, data analysis, and UI/UX design, and I am proficient in 
              Python, SQL, MySQL, Power BI, and machine learning tools.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      B.Tech in Data Science
                    </h3>
                    <p className="text-foreground font-medium">CMR Institute of Technology</p>
                    <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Hyderabad, India</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2022 - 2026</span>
                      </div>
                    </div>
                    <p className="text-primary font-semibold mt-2">CGPA: 7.1/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Pre-University Education
                    </h3>
                    <p className="text-foreground font-medium">ASR Govt Jr College</p>
                    <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Khammam, India</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2021-2022</span>
                      </div>
                    </div>
                    <p className="text-primary font-semibold mt-2">Grade: 65.9%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Secondary Education
                    </h3>
                    <p className="text-foreground font-medium">MJPTBCWREIS</p>
                    <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Khammam, India</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2020</span>
                      </div>
                    </div>
                    <p className="text-primary font-semibold mt-2">GPA: 10/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;