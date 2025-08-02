import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const project = {
    title: "Helmet Detection using Machine Learning and Automatic License Plate Recognition",
    duration: "Dec 2024 – May 2025",
    description: "Developed an intelligent system to detect helmets and recognize license plates from real-time footage using advanced computer vision techniques.",
    features: [
      "Implemented YOLOv5 object detection model for helmet detection",
      "Integrated Tesseract OCR for automatic license plate recognition",
      "Real-time processing capabilities for traffic monitoring",
      "Contributed to road safety enforcement through automation"
    ],
    technologies: ["Python", "OpenCV", "YOLOv5", "Tesseract OCR", "Machine Learning"],
    status: "In Development",
    impact: "Enhances road safety through automated enforcement systems"
  };

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Project</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in machine learning and computer vision through real-world applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle className="text-2xl md:text-3xl text-primary leading-tight">
                  {project.title}
                </CardTitle>
                <Badge className="bg-accent text-accent-foreground w-fit">
                  {project.status}
                </Badge>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-primary text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-2">Project Impact</h4>
                <p className="text-foreground">{project.impact}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex items-center space-x-2 bg-primary hover:bg-primary/90">
                  <ExternalLink className="h-4 w-4" />
                  <span>View Project Details</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-4 w-4" />
                  <span>Source Code</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;