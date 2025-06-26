
import { FileText, Zap, Shield, Brain, Globe, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

const Features = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which items should be visible
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Stagger the animation of feature cards
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Extraction',
      description: 'Advanced machine learning algorithms extract data with 99.9% accuracy from any document format.',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'gradient-bg-1'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process thousands of documents in seconds with our optimized cloud infrastructure.',
      color: 'from-yellow-500 to-orange-500',
      bgGradient: 'gradient-bg-2'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and SOC 2 compliance ensure your data is always protected.',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'gradient-bg-3'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Support for 100+ languages and currencies with region-specific tax handling.',
      color: 'from-purple-500 to-violet-500',
      bgGradient: 'gradient-bg-4'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and reporting to track your document processing performance.',
      color: 'from-pink-500 to-rose-500',
      bgGradient: 'gradient-bg-5'
    },
    {
      icon: FileText,
      title: 'Universal Format Support',
      description: 'Process PDFs, images, emails, and digital receipts from any source or platform.',
      color: 'from-indigo-500 to-blue-500',
      bgGradient: 'gradient-bg-6'
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden gradient-bg-6">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Everything you need to automate document processing and extract valuable insights 
            from your business data with unmatched accuracy and speed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group glass-morphism rounded-3xl p-8 interactive-card border border-white/20 transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: `translateY(${scrollY * -0.05}px)`
              }}
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                Learn more →
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className="glass-morphism rounded-3xl p-12 lg:p-16 border border-white/20 interactive-card"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`,
          }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="scroll-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-3">99.9%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">10M+</div>
              <div className="text-white/80">Documents Processed</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-3">500+</div>
              <div className="text-white/80">Enterprise Clients</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-3">2.3s</div>
              <div className="text-white/80">Average Processing Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
