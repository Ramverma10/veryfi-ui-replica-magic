
import { FileText, Zap, Shield, Brain, Globe, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

const Features = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Extraction',
      description: 'Advanced machine learning algorithms extract data with 99.9% accuracy from any document format.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process thousands of documents in seconds with our optimized cloud infrastructure.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and SOC 2 compliance ensure your data is always protected.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Support for 100+ languages and currencies with region-specific tax handling.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and reporting to track your document processing performance.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FileText,
      title: 'Universal Format Support',
      description: 'Process PDFs, images, emails, and digital receipts from any source or platform.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section 
      id="features" 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.1}px)` }}
    >
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-blue-50/50 dark:from-slate-800/30 dark:via-background dark:to-blue-950/20 transition-colors duration-300"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Powerful Features for{' '}
            <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate document processing and extract valuable insights 
            from your business data with unmatched accuracy and speed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 sm:p-8 shadow-lg hover-lift border border-border animate-fade-in-up transition-colors duration-300"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`
              }}
            >
              {/* Icon */}
              <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-4 sm:mt-6 flex items-center text-xs sm:text-sm font-medium text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:translate-x-2 transition-transform duration-300">
                Learn more →
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className="mt-16 sm:mt-20 bg-card rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-border transition-colors duration-300"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2">10M+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Documents Processed</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2">2.3s</div>
              <div className="text-sm sm:text-base text-muted-foreground">Average Processing Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
