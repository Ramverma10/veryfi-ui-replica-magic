
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Zap, Shield, CheckCircle, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animation on mount
    setIsVisible(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWatchDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartTrial = () => {
    // This would typically redirect to a signup page
    console.log('Starting free trial...');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Floating shapes with morphing animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
            animation: 'morphing 10s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/15 rounded-full"
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.1}deg)`,
            animation: 'morphing 8s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-6 py-3 glass-morphism rounded-full border border-white/20 mb-8 glow-effect">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-sm font-medium text-white">
                Trusted by 10,000+ businesses worldwide
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Document Processing
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 blur-lg opacity-30 -z-10"></div>
              </span>{' '}
              Forever
            </h1>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Extract data from receipts, invoices, and documents with 99.9% accuracy using our 
              advanced AI technology. Automate your workflows and save hours of manual work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Button 
                size="lg" 
                onClick={handleStartTrial}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold interactive-card shadow-2xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleWatchDemo}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-sm text-white/80">
              <div className="flex items-center interactive-card">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center interactive-card">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Process in Seconds
              </div>
              <div className="flex items-center interactive-card">
                <FileText className="w-5 h-5 mr-2 text-blue-400" />
                99.9% Accuracy
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main demo card */}
              <div 
                className="glass-morphism rounded-3xl p-8 interactive-card bg-white/10 border border-white/20 shadow-2xl"
                style={{
                  transform: `translateY(${scrollY * -0.1}px)`,
                }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Live Document Processing
                  </h3>
                  <p className="text-white/80">
                    Watch your documents get processed in real-time
                  </p>
                </div>
                
                {/* Mock document */}
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-white/90">Receipt #12345</div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-white/30 rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-2 bg-white/30 rounded-full w-1/2 animate-pulse delay-75"></div>
                    <div className="h-2 bg-white/30 rounded-full w-2/3 animate-pulse delay-150"></div>
                  </div>
                </div>
                
                {/* Extracted data preview */}
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-sm font-medium text-white/90 mb-3">Extracted Data:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Total:</span>
                      <span className="font-medium text-white">$127.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Date:</span>
                      <span className="font-medium text-white">2024-01-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Vendor:</span>
                      <span className="font-medium text-white">Acme Corp</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div 
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  transform: `translateY(${scrollY * -0.15}px)`,
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div 
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  animation: 'float 4s ease-in-out infinite reverse'
                }}
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
