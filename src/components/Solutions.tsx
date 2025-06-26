
import { Building2, ShoppingCart, Truck, Users, CreditCard, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Solutions = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which items should be visible
      const solutionsSection = document.getElementById('solutions');
      if (solutionsSection) {
        const rect = solutionsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          solutions.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Finance',
      description: 'Streamline accounts payable, expense management, and financial reporting.',
      features: ['Invoice Processing', 'Expense Reports', 'Tax Compliance', 'Audit Trails'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Automate receipt processing, inventory management, and customer analytics.',
      features: ['Receipt Analytics', 'Inventory Tracking', 'Customer Insights', 'Sales Reports'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Digitize shipping documents, track deliveries, and manage compliance.',
      features: ['BOL Processing', 'Delivery Tracking', 'Compliance Docs', 'Route Optimization'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const handleLearnMore = (title: string) => {
    console.log(`Learning more about ${title}`);
  };

  const handleViewIntegrations = () => {
    console.log('Viewing all integrations');
  };

  return (
    <section id="solutions" className="py-32 relative overflow-hidden gradient-bg-3">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div className="absolute top-40 left-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Solutions for Every{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Industry
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Tailored document processing solutions that adapt to your specific 
            industry needs and business requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group glass-morphism rounded-3xl p-8 interactive-card border border-white/20 transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                transform: `translateY(${scrollY * -0.05}px)`
              }}
            >
              {/* Icon */}
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                <solution.icon className="w-12 h-12 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-6">
                {solution.title}
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                {solution.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-10">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-white/90">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mr-4"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handleLearnMore(solution.title)}
                variant="outline" 
                className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 interactive-card"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div 
          className="glass-morphism rounded-3xl p-12 lg:p-16 text-center text-white border border-white/20 interactive-card"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`,
          }}
        >
          <h3 className="text-4xl font-bold mb-6">
            Seamless Integration with Your Existing Tools
          </h3>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with 500+ popular business applications through our robust API 
            and pre-built integrations.
          </p>
          
          {/* Integration logos */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center interactive-card">
              <FileSpreadsheet className="w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center interactive-card">
              <CreditCard className="w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center interactive-card">
              <Users className="w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center interactive-card">
              <Building2 className="w-8 h-8" />
            </div>
          </div>
          
          <Button 
            onClick={handleViewIntegrations}
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold interactive-card shadow-2xl"
          >
            View All Integrations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
