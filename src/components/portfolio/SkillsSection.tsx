import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, GitBranch, FileText, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "JavaScript (Learning)"],
      color: "text-primary"
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["HTML", "CSS", "Bootstrap", "ReactJS (Learning)"],
      color: "text-portfolio-accent"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Django (Learning)"],
      color: "text-green-400"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL"],
      color: "text-blue-400"
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Figma", "Canva", "Miro", "Sketch"],
      color: "text-purple-400"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
      color: "text-orange-400"
    },
    {
      title: "Others",
      icon: FileText,
      skills: ["MS Office (Word, PowerPoint)"],
      color: "text-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-card-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-portfolio-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-glow transition-all duration-500 bg-portfolio-card-bg border-border/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-background/10 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
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