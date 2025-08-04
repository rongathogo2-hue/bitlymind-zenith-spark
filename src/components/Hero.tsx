import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 border border-border/20 backdrop-blur-sm mb-8 animate-slide-up">
            <span className="text-sm font-medium text-foreground">Trusted by 50+ Enterprise Clients</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="text-foreground">Tech Solutions</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            We engineer cutting-edge software, implement bulletproof security, and accelerate growth for forward-thinking companies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-floating text-lg px-8 py-4 transition-all duration-300 animate-pulse-glow"
              onClick={() => scrollToSection('#book-demo')}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-border/30 hover:bg-card/50 backdrop-blur-sm"
              onClick={() => scrollToSection('#services')}
            >
              <Play className="mr-2 w-5 h-5" />
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              { value: "150+", label: "Projects" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
              { value: "50+", label: "Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-tech-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};