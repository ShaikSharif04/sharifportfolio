import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, BarChart3, Palette, Code } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes to transform raw data into actionable insights. Expertise in data warehousing, data modeling, and scalable architecture design.",
      icon: <Database className="h-12 w-12" />,
      features: ["ETL Pipeline Design", "Data Warehousing", "Database Optimization", "Big Data Processing"]
    },
    {
      title: "Data Analysis",
      description: "Comprehensive data analysis using statistical methods and machine learning algorithms to uncover patterns, trends, and insights that drive business decisions.",
      icon: <BarChart3 className="h-12 w-12" />,
      features: ["Statistical Analysis", "Predictive Modeling", "Data Mining", "Business Intelligence"]
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and user-friendly interfaces with a focus on user experience. Combining design principles with data-driven insights for optimal user engagement.",
      icon: <Palette className="h-12 w-12" />,
      features: ["User Interface Design", "User Experience Research", "Prototyping", "Responsive Design"]
    },
    {
      title: "Data-driven Software Development",
      description: "Developing intelligent software solutions that leverage data science and machine learning to solve complex business problems and automate processes.",
      icon: <Code className="h-12 w-12" />,
      features: ["ML Integration", "API Development", "Automation Solutions", "Real-time Processing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging data science expertise to deliver comprehensive solutions across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-primary mb-3">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed text-center">
                  {service.description}
                </p>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-primary mb-3 text-center">Key Capabilities</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;