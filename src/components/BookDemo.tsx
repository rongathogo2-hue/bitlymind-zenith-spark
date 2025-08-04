import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageSquare, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Demo Request Submitted!",
      description: "Our team will contact you within 24 hours to schedule your personalized demo.",
    });

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="book-demo" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to </span>
              <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a personalized demo to see how our solutions can transform your business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">30-Minute Consultation</h3>
                    <p className="text-muted-foreground">Get a comprehensive overview of how our solutions align with your specific business needs and technical requirements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Custom Solution Design</h3>
                    <p className="text-muted-foreground">Our experts will create a tailored technology roadmap that addresses your unique challenges and growth objectives.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Technical Deep Dive</h3>
                    <p className="text-muted-foreground">Discuss architecture, security requirements, and integration possibilities with our senior engineering team.</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-tech-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-tech-secondary">Free</div>
                    <div className="text-sm text-muted-foreground">Consultation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-tech-accent">No</div>
                    <div className="text-sm text-muted-foreground">Obligations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="bg-gradient-card border-border/50 shadow-floating">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-card-foreground">
                  Book Your Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Work Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name *"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6 transition-all duration-300"
                  >
                    Schedule Demo Call
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};