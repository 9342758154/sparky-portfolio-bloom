import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-portfolio-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile info */}
          <div className="animate-fade-in space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                Available for hire
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-portfolio-gradient bg-clip-text text-transparent">
                Muthu Krishnan.R
              </h1>
              <h2 className="text-xl md:text-2xl text-portfolio-text-muted">
                UI/UX & Frontend Developer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A motivated and detail-focused Computer Science Engineering graduate with strong skills in frontend development and UI/UX design. Passionate about solving real-world problems with technical and creative solutions.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <span>muthukrishnan8650457@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 93427 58154</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-portfolio-gradient hover:opacity-90 transition-all duration-300 shadow-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="group">
                <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                View Portfolio
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-portfolio-accent hover:scale-110 transition-all">
                <Linkedin className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <Card className="p-8 bg-portfolio-card-bg border-border/20 shadow-card hover:shadow-glow transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-portfolio-gradient rounded-full blur-xl opacity-20 animate-glow-pulse"></div>
                <img
                  src={profilePhoto}
                  alt="Muthu Krishnan Profile"
                  className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;