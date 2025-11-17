import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Award, Building } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Data Science",
      organization: "Infosys Springboard",
      provider: "Infosys",
      date: "September 2024",
      category: "Technical",
      certificateUrl: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_12666306402263577000_shared/1-0de9d834-e276-45d9-8ff0-e2990d098529.pdf"
    },
    {
      title: "Data Visualization with Tableau",
      organization: "Infosys Springboard",
      provider: "Infosys",
      date: "October 2024",
      category: "Technical",
      certificateUrl: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01330395564184371234740_shared/1-d326f886-7f61-4bb9-8867-968c6032a040.pdf"
    },
    {
      title: "AI Advanced",
      organization: "Hexart.in",
      provider: "Hexart.in",
      date: "July 2025",
      category: "Technical",
      certificateUrl: "https://www.hexart.in/certificate_v2/66c70f17271cfc9546080637/user/6870e6b17780efd0fe0fed27"
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      organization: "Forage",
      provider: "Accenture",
      date: "January 2024",
      category: "Soft Skills",
      certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_sYBJDZ5LDZsH2HwTq_1716195035035_completion_certificate.pdf"
    },
    {
      title: "Power BI Job Simulation",
      organization: "Forage",
      provider: "PwC Switzerland",
      date: "January 2024",
      category: "Technical",
      certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_sYBJDZ5LDZsH2HwTq_1717062534967_completion_certificate.pdf"
    },
    {
      title: "Agentforce Specialist",
      organization: "Salesforce",
      provider: "Salesforce",
      date: "November 2025",
      category: "Technical",
      certificateUrl: "https://drive.google.com/file/d/1fFyf6C0vBce_C-BbMiuzO0JfbC6R_9qG/view?usp=drive_link"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical":
        return "bg-primary text-primary-foreground";
      case "Soft Skills":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise in data science and related technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Award className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  <Badge className={getCategoryColor(cert.category)}>
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary leading-tight mb-2">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">{cert.organization}</span>
                  </div>
                  {cert.provider !== cert.organization && (
                    <p className="text-sm text-foreground">Offered by {cert.provider}</p>
                  )}
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                  onClick={() => window.open(cert.certificateUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;