
import { FileText, Zap, Shield, Brain, Globe, BarChart3 } from 'lucide-react';

const Features = () => {
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
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate document processing and extract valuable insights 
            from your business data with unmatched accuracy and speed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-sm font-medium text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:translate-x-2 transition-transform duration-300">
                Learn more →
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-gradient mb-2">10M+</div>
              <div className="text-gray-600">Documents Processed</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="text-4xl font-bold text-gradient mb-2">2.3s</div>
              <div className="text-gray-600">Average Processing Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
