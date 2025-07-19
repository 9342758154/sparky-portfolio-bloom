import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-portfolio-card-bg/50 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span className="text-muted-foreground">by</span>
            <Badge variant="outline" className="bg-portfolio-gradient text-white border-none">
              Muthu Krishnan.R
            </Badge>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;