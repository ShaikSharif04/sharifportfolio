import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Cpu, Github, Bot } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "Python", level: "Proficient" },
        { name: "R", level: "Intermediate" },
        { name: "C", level: "Average" },
        { name: "Java", level: "Basic" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "HTML", level: "Proficient" },
        { name: "CSS", level: "Proficient" }
      ]
    },
    {
      title: "Database Systems",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "SQL", level: "Proficient" },
        { name: "MySQL", level: "Proficient" }
      ]
    },
    {
      title: "Visualization Tools",
      icon: <BarChart3 className="h-8 w-8" />,
      skills: [
        { name: "Tableau", level: "Proficient" },
        { name: "Power BI", level: "Proficient" }
      ]
    },
    {
      title: "Productivity Tools",
      icon: <Cpu className="h-8 w-8" />,
      skills: [
        { name: "MS Office", level: "Proficient" }
      ]
    },
    {
      title: "AI & Development Platforms",
      icon: <Bot className="h-8 w-8" />,
      skills: [
        { name: "GitHub Copilot", level: "Proficient" },
        { name: "OpenAI GPT", level: "Proficient" },
        { name: "Replit.AI", level: "Proficient" },
        { name: "Notbooklm.AI", level: "Proficient" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Proficient":
        return "bg-primary text-primary-foreground";
      case "Intermediate":
        return "bg-accent text-accent-foreground";
      case "Average":
        return "bg-secondary text-secondary-foreground";
      case "Basic":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <Badge className={getLevelColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;