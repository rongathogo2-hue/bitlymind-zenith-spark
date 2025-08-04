import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Award, Globe, Clock } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies and methodologies to deliver solutions that put you ahead of the competition."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team consists of senior engineers, security specialists, and architects with proven track records in enterprise environments."
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "We deliver production-ready solutions faster than traditional development cycles without compromising on quality."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every line of code undergoes rigorous testing, security scanning, and performance optimization before deployment."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Our solutions are built to handle global traffic with multi-region deployment and 99.9% uptime guarantees."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring, support, and maintenance to ensure your systems operate flawlessly."
  }
];

export const WhyUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">Bitly Mind Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-card-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-12 border border-border/50">
            <h3 className="text-3xl font-bold mb-4 text-card-foreground">Ready to Transform Your Business?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ranks of successful companies that trust us to deliver exceptional technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-2xl font-bold text-tech-primary">150+ Projects</div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-2xl font-bold text-tech-secondary">98% Success Rate</div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-2xl font-bold text-tech-accent">50+ Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};