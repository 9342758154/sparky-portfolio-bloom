import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Secure Real-Time Chat App",
      description: "Real-time chat application with end-to-end encryption and user authentication. Features include group messaging, file sharing, and message history.",
      technologies: ["ReactJS", "Django", "WebSocket", "XChaCha20"],
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "Foodies Corner",
      description: "Responsive food ordering website with modern UI/UX design. Features menu browsing, cart management, and order tracking functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Frontend",
      status: "Completed"
    },
    {
      title: "Flute Music App (UI/UX)",
      description: "Complete UI/UX design for a music streaming application focused on flute music. Includes user research, wireframes, and high-fidelity prototypes.",
      technologies: ["Figma", "Miro", "Sketch", "Prototyping"],
      category: "Design",
      status: "Design Complete"
    },
    {
      title: "Developer Hub Tool",
      description: "Collaborative platform designed for developer learning and knowledge sharing. Features include code snippets, tutorials, and community discussions.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Full Stack",
      status: "In Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Design Complete":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-portfolio-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-glow transition-all duration-500 bg-portfolio-card-bg border-border/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className={getStatusColor(project.status)}
                  >
                    {project.status}
                  </Badge>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="group">
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;