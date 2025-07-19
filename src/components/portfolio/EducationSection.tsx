import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.E. Computer Science",
      institution: "Bharath Niketan Engineering College",
      period: "2021-2025",
      score: "CGPA: 7.91",
      icon: GraduationCap,
      color: "text-primary"
    },
    {
      degree: "HSC",
      institution: "Nadar Saraswathi Boys Hr. Sec. School",
      period: "2019-2021",
      score: "80.46%",
      icon: BookOpen,
      color: "text-portfolio-accent"
    }
  ];

  const certifications = [
    {
      title: "E-Commerce Management in India",
      organization: "ICESTEM '24",
      type: "Certification",
      icon: Award
    },
    {
      title: "Secure Real-Time Chat App (XChaCha20)",
      organization: "ICESTEM '25",
      type: "Paper",
      icon: Award
    },
    {
      title: "UI/UX Design",
      organization: "Indage Technologies (Naan Mudhalvan)",
      type: "Certification",
      icon: Award
    },
    {
      title: "High Performance Computing - HPC Trainer",
      organization: "Naan Mudhalvan",
      type: "Certification",
      icon: Award
    }
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Tamil", level: "Native" }
  ];

  return (
    <section id="education" className="py-20 bg-portfolio-card-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-portfolio-gradient bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="hover:shadow-glow transition-all duration-500 bg-portfolio-card-bg border-border/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg bg-background/10 ${edu.color}`}>
                      <edu.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{edu.period}</Badge>
                        <Badge variant="outline" className="bg-primary/20">{edu.score}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-portfolio-accent" />
              Certifications & Papers
            </h3>
            
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="hover:shadow-glow transition-all duration-500 bg-portfolio-card-bg border-border/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-tight">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.organization}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Globe className="h-6 w-6 text-green-400" />
              Languages
            </h3>
            
            {languages.map((lang, index) => (
              <Card 
                key={lang.name}
                className="hover:shadow-glow transition-all duration-500 bg-portfolio-card-bg border-border/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{lang.name}</h4>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional info card */}
            <Card className="hover:shadow-glow transition-all duration-500 bg-portfolio-card-bg border-border/20">
              <CardContent className="p-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-portfolio-gradient rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Always Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuously improving skills through hands-on projects and industry certifications
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;