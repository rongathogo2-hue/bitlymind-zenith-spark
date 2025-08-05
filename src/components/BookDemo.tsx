import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageSquare, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/application`,
        {
          ...formData,
          // Add any additional fields your API expects
          type: "demo_request", // You can specify this is a demo request
          source: "website",     // Track where the request came from
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Add any required headers here
          }
        }
      );

      // Handle successful submission
      toast({
        title: "Demo Request Submitted!",
        description: "Our team will contact you within 24 hours to schedule your personalized demo.",
      });

      // Reset form
      setFormData({ name: "", email: "", company: "", message: "" });

    } catch (error) {
      console.error("Submission error:", error);
      
      let errorMessage = "Please try again later or contact support.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      }

      toast({
        title: "Something went wrong",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              {/* ... (keep your existing benefits content) ... */}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 min-h-[120px]"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Schedule Demo Call"}
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