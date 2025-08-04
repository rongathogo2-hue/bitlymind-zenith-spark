import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold text-card-foreground">Bitly Mind Tech</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Engineering next-generation technology solutions for forward-thinking companies worldwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-tech-primary">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-tech-primary">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-tech-primary">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-card-foreground">Services</h3>
              <ul className="space-y-3">
                {[
                  "Software Engineering",
                  "Cybersecurity",
                  "Mobile & Web Apps",
                  "Code Optimization",
                  "Tech Consulting",
                  "Digital Transformation"
                ].map((service) => (
                  <li key={service}>
                    <button 
                      className="text-muted-foreground hover:text-tech-primary transition-colors"
                      onClick={() => scrollToSection('#services')}
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-card-foreground">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#about" },
                  { name: "Careers", href: "#careers" },
                  { name: "Case Studies", href: "#case-studies" },
                  { name: "Blog", href: "#blog" },
                  { name: "Contact", href: "#contact" },
                  { name: "Support", href: "#support" }
                ].map((item) => (
                  <li key={item.name}>
                    <button 
                      className="text-muted-foreground hover:text-tech-primary transition-colors"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-card-foreground">Stay Connected</h3>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@bitlymindtech.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  Get updates on tech trends and insights
                </p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter email" 
                    className="bg-background/50 border-border/50"
                  />
                  <Button size="sm" className="bg-gradient-primary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Bitly Mind Tech. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <button className="text-sm text-muted-foreground hover:text-card-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-card-foreground transition-colors">
                Terms of Service
              </button>
              <button className="text-sm text-muted-foreground hover:text-card-foreground transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};