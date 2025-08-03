import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate Data Science student with a vision to transform raw data into meaningful insights that drive real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a final-year B.Tech student specializing in Data Science at CMR Institute of Technology, Hyderabad. 
                My journey in technology is driven by curiosity and a deep fascination with how data can tell compelling 
                stories and solve complex problems.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With hands-on experience in Python, Java, SQL, and machine learning frameworks, I bridge the gap between 
                technical expertise and creative problem-solving. I'm particularly passionate about data engineering, 
                analytics, and UI/UX design, believing that beautiful and intuitive interfaces are just as important 
                as powerful algorithms.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I thrive on building intelligent, data-driven solutions that not only meet technical requirements but 
                also create meaningful user experiences. Whether it's developing predictive models, designing intuitive 
                dashboards, or optimizing data pipelines, I approach every project with enthusiasm and attention to detail.
              </p>
            </div>
          </div>

          {/* Education Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-primary">Education</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Current Education */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">B.Tech Data Science</h4>
                    <p className="text-sm text-muted-foreground mb-1">CMR Institute of Technology</p>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                      <MapPin className="h-3 w-3" />
                      <span>Hyderabad</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>2022 - 2026</span>
                    </div>
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      CGPA: 7.1/10
                    </span>
                  </div>

                  {/* Previous Education */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium text-foreground">Pre-University</h5>
                        <p className="text-xs text-muted-foreground">ASR Govt Jr College</p>
                        <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full mt-1">
                          65.9%
                        </span>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-foreground">Secondary</h5>
                        <p className="text-xs text-muted-foreground">MJPTBCWREIS</p>
                        <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full mt-1">
                          10/10 GPA
                        </span>
                      </div>
                    </div>
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