import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Coffee, Laptop } from "lucide-react";

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $180k",
    description: "Lead development of enterprise-grade applications using React, Node.js, and cloud technologies.",
    skills: ["React", "Node.js", "AWS", "TypeScript", "Docker"]
  },
  {
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$130k - $190k",
    description: "Design and implement security frameworks for high-profile client engagements.",
    skills: ["CISSP", "Penetration Testing", "SIEM", "Zero Trust", "Compliance"]
  },
  {
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $160k",
    description: "Build cutting-edge mobile applications for iOS and Android platforms.",
    skills: ["React Native", "Swift", "Kotlin", "Flutter", "App Store"]
  }
];

const benefits = [
  {
    icon: Laptop,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and home office stipend"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Top-tier salaries, equity packages, and performance bonuses"
  },
  {
    icon: Users,
    title: "Growth Opportunities",
    description: "Leadership development, conference attendance, and skill advancement"
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Unlimited PTO, wellness programs, and team building events"
  }
];

export const Careers = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#book-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Join Our </span>
            <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">Elite Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Work with industry experts on cutting-edge projects that shape the future of technology.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2 text-card-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Open Positions</h3>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-floating transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-card-foreground">{position.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-tech-primary">{position.salary}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {position.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full md:w-auto bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={scrollToDemo}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-12 border border-border/50">
            <h3 className="text-3xl font-bold mb-4 text-card-foreground">Don't See Your Role?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Reach out and let's discuss how you can contribute to our mission.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
              onClick={scrollToDemo}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};