import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Rocket, BarChart, Code, ArrowRight } from "lucide-react";

const Team = () => {
  const scrollToTeam = () => {
    const element = document.querySelector('#experts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const expertise = [
    {
      icon: Users,
      title: "Leadership",
      description: "Seasoned executives with decades of industry experience."
    },
    {
      icon: Rocket,
      title: "Product Development",
      description: "Innovators building cutting-edge solutions."
    },
    {
      icon: BarChart,
      title: "Growth Strategy",
      description: "Experts in scaling businesses and entering new markets."
    },
    {
      icon: Code,
      title: "Engineering",
      description: "Top-tier technical talent across multiple disciplines."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Our</span>
                <br />
                <span className="text-muted-foreground">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Meet the experts driving innovation and delivering exceptional results.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
                onClick={scrollToTeam}
              >
                Meet Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="experts" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Areas of Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((area, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <area.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Join Our Team</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Looking to work with talented professionals on challenging projects?
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;