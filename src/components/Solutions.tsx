
import { Building2, ShoppingCart, Truck, Users, CreditCard, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Solutions = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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

  return (
    <section 
      id="solutions" 
      className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.05}px)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Solutions for Every{' '}
            <span className="text-gradient">Industry</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored document processing solutions that adapt to your specific 
            industry needs and business requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-card to-muted/30 rounded-3xl p-6 sm:p-8 shadow-lg hover-lift border border-border animate-fade-in-up transition-colors duration-300"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`
              }}
            >
              {/* Icon */}
              <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-3xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <solution.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6 sm:mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-veryfi-gradient rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-2 group-hover:border-veryfi-blue group-hover:text-veryfi-blue transition-colors text-sm sm:text-base"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white animate-fade-in-up transition-colors duration-300"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Seamless Integration with Your Existing Tools
          </h3>
          <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Connect with 500+ popular business applications through our robust API 
            and pre-built integrations.
          </p>
          
          {/* Integration logos placeholder */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-6 sm:mb-8 opacity-80">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <FileSpreadsheet className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
          >
            View All Integrations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
