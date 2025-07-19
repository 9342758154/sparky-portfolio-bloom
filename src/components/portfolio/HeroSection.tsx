import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, ExternalLink, Download, Sparkles, Code, Palette } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-portfolio-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-portfolio-gradient opacity-20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        {/* Hero Image Section - Top */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            {/* Floating elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-portfolio-accent rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-10 -right-8 opacity-50">
              <Code className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <div className="absolute bottom-10 -left-8 opacity-50">
              <Palette className="h-6 w-6 text-portfolio-accent animate-pulse delay-500" />
            </div>
            
            {/* Main profile image */}
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-gradient rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Muthu Krishnan Profile"
                className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-2xl mx-auto hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto animate-scale-in">
          {/* Status badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-2 h-4 w-4" />
              Available for hire
            </Badge>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="block bg-portfolio-gradient bg-clip-text text-transparent">
                Muthu Krishnan.R
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-portfolio-text-muted font-light">
              UI/UX & Frontend Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A motivated and detail-focused Computer Science Engineering graduate with strong skills in frontend development and UI/UX design. Passionate about solving real-world problems with technical and creative solutions.
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>muthukrishnan8650457@gmail.com</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>+91 93427 58154</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-portfolio-gradient hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-glow text-white font-semibold px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary px-8 py-3"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              View Portfolio
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-6 justify-center pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-portfolio-accent/10 hover:bg-portfolio-accent hover:text-portfolio-accent-foreground hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;