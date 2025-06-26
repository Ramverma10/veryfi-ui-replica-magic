
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-veryfi-gradient rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Veryfi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-veryfi-blue transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-veryfi-blue transition-colors">
              Solutions
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-veryfi-blue transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-muted-foreground hover:text-veryfi-blue transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="text-muted-foreground hover:text-veryfi-blue">
              Sign In
            </Button>
            <Button className="bg-veryfi-gradient hover:opacity-90 text-white px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t border-border">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-veryfi-blue transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#solutions" className="block text-muted-foreground hover:text-veryfi-blue transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Solutions
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-veryfi-blue transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-veryfi-blue transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full text-muted-foreground">
                  Sign In
                </Button>
                <Button className="w-full bg-veryfi-gradient text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
