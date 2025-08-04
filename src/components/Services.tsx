import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Smartphone, Zap, ArrowRight, Check } from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap = {
  Code,
  Shield,
  Smartphone,
  Zap
};

export const Services = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#book-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What We </span>
            <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology solutions that drive measurable business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-floating transition-all duration-300 bg-gradient-card border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-tech-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-card-foreground mb-3">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-tech-primary group-hover:text-primary-foreground transition-colors"
                    onClick={scrollToDemo}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-8 text-card-foreground">Proven Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {servicesData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tech-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};