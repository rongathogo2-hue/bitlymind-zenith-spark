import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, CreditCard, Smartphone, ArrowRight } from "lucide-react";

const Eccomerce = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: ShoppingCart,
      title: "Online Storefronts",
      description: "Beautiful, high-converting e-commerce websites."
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time stock tracking and fulfillment systems."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure multi-payment gateway integrations."
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Optimized shopping experiences for mobile users."
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
                <span className="text-foreground">E-commerce</span>
                <br />
                <span className="text-muted-foreground">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                End-to-end e-commerce platforms designed to maximize conversions and revenue.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
                onClick={scrollToDemo}
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">E-commerce Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
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
              <h2 className="text-4xl font-bold mb-8 text-foreground">Launch Your Online Store</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to build or scale your e-commerce business?
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
              >
                Contact E-commerce Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Eccomerce;