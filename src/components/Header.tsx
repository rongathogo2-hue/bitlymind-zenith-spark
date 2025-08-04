import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, ChevronDown } from "lucide-react";
import { navigationData } from "@/data/navigation";

export const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold">Bitly Mind Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationData.navItems.map((item) => (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-card/95 backdrop-blur-md border border-border">
                  {item.dropdown.map((dropdownItem) => (
                    <DropdownMenuItem
                      key={dropdownItem.title}
                      className="flex flex-col items-start p-4 hover:bg-accent/50 cursor-pointer"
                      onClick={() => navigate(dropdownItem.href)}
                    >
                      <div className="font-medium text-card-foreground">{dropdownItem.title}</div>
                      <div className="text-sm text-muted-foreground">{dropdownItem.description}</div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            
            <Button 
              className="hidden sm:flex bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Book a Demo
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationData.navItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      <h3 className="font-semibold text-lg text-card-foreground">{item.title}</h3>
                      <div className="space-y-2 pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.title}
                            className="block text-left w-full p-2 text-muted-foreground hover:text-card-foreground transition-colors"
                            onClick={() => navigate(dropdownItem.href)}
                          >
                            {dropdownItem.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 border-t border-border">
                    <Button 
                      className="w-full bg-gradient-primary"
                      onClick={() => navigate('/contact')}
                    >
                      Book a Demo
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};