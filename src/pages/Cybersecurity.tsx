import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const Cybersecurity = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments to identify risks."
    },
    {
      icon: Lock,
      title: "Implementation",
      description: "Deploy robust security frameworks and protocols across your infrastructure."
    },
    {
      icon: Eye,
      title: "Monitoring",
      description: "24/7 security monitoring and threat detection with real-time response."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid incident response and recovery procedures to minimize downtime."
    }
  ];

  const certifications = [
    "CISSP", "CISM", "CEH", "OSCP", "SANS GIAC", "ISO 27001",
    "SOC 2", "GDPR", "HIPAA", "PCI DSS", "NIST", "Zero Trust"
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
                <span className="text-foreground">Cybersecurity</span>
                <br />
                <span className="text-muted-foreground">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
                onClick={scrollToDemo}
              >
                Secure Your Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Security Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Compliance & Certifications</h2>
              <p className="text-xl text-muted-foreground mb-12">
                We ensure your organization meets all relevant security standards and regulations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="bg-gradient-card rounded-lg p-4 border border-border/50 text-center">
                    <span className="font-medium text-card-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Protect Your Business Today</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don't wait for a security breach. Let our experts secure your digital infrastructure now.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
              >
                Schedule Security Audit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurity;