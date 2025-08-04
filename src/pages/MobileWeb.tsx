import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, Tablet, Zap, Users, ArrowRight } from "lucide-react";

const MobileWeb = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const platforms = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android applications with exceptional user experiences."
    },
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Progressive web apps that work seamlessly across all devices."
    },
    {
      icon: Tablet,
      title: "Cross-Platform",
      description: "React Native and Flutter solutions for maximum reach and efficiency."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications with lightning-fast loading and smooth interactions."
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "PWA", "WebRTC",
    "React", "Vue.js", "Node.js", "GraphQL", "Firebase", "AWS"
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
                <span className="text-foreground">Mobile & Web</span>
                <br />
                <span className="text-muted-foreground">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Cross-platform applications that deliver exceptional user experiences across all devices and platforms.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
                onClick={scrollToDemo}
              >
                Build Your App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Platform Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <platform.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{platform.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Development Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech) => (
                  <div key={tech} className="bg-gradient-card rounded-lg p-4 border border-border/50 text-center">
                    <span className="font-medium text-card-foreground">{tech}</span>
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
              <h2 className="text-4xl font-bold mb-8 text-foreground">Ready to Launch Your App?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your ideas into powerful mobile and web applications that users love.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MobileWeb;