
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Zap, Shield, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-slate-900 dark:via-background dark:to-purple-900/20 transition-colors duration-300"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-veryfi-gradient rounded-full opacity-10 animate-bounce-subtle"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-veryfi-blue rounded-full animate-ping"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-veryfi-purple rounded-full animate-ping delay-1000"
          style={{ transform: `translateY(${scrollY * 0.6}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border mb-6">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Trusted by 10,000+ businesses worldwide
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-gradient">Document Processing</span>{' '}
              Forever
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Extract data from receipts, invoices, and documents with 99.9% accuracy using our 
              advanced AI technology. Automate your workflows and save hours of manual work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-veryfi-gradient hover:opacity-90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg animate-pulse-glow"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-border hover:border-veryfi-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                Process in Seconds
              </div>
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2 text-blue-500" />
                99.9% Accuracy
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main demo card */}
              <div 
                className="glass-morphism rounded-2xl p-6 sm:p-8 hover-lift bg-card/80 border border-border"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    Live Document Processing
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Watch your documents get processed in real-time
                  </p>
                </div>
                
                {/* Mock document */}
                <div className="bg-muted/50 rounded-lg p-4 sm:p-6 mb-4 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">Receipt #12345</div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                    <div className="h-2 bg-muted rounded w-1/2"></div>
                    <div className="h-2 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
                
                {/* Extracted data preview */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Extracted Data:</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-medium text-foreground">$127.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium text-foreground">2024-01-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vendor:</span>
                      <span className="font-medium text-foreground">Acme Corp</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements with parallax */}
              <div 
                className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-10 sm:w-12 h-10 sm:h-12 bg-veryfi-gradient rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              >
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <div 
                className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-8 sm:w-10 h-8 sm:h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
              >
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
