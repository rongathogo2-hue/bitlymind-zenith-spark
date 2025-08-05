import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, BarChart, UserCheck, Rocket, ArrowRight } from "lucide-react";

const Case = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const caseStudies = [
    {
      icon: Briefcase,
      title: "Enterprise Transformation",
      description: "How we helped a Fortune 500 company modernize their infrastructure."
    },
    {
      icon: BarChart,
      title: "Revenue Growth",
      description: "SaaS platform that increased ARR by 300% in 18 months."
    },
    {
      icon: UserCheck,
      title: "Customer Experience",
      description: "Redesigning user journeys for better engagement and retention."
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      description: "Taking a startup from MVP to market dominance in 12 months."
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
                <span className="text-foreground">Success</span>
                <br />
                <span className="text-muted-foreground">Case Studies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Real-world examples of how our solutions have driven business results.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
                onClick={scrollToDemo}
              >
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="studies" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Featured Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <caseStudy.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{caseStudy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{caseStudy.description}</p>
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
              <h2 className="text-4xl font-bold mb-8 text-foreground">Start Your Success Story</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to achieve similar results for your business?
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Case;