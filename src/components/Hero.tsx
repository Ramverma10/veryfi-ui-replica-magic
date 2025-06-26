
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Zap, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-veryfi-gradient rounded-full opacity-10 animate-bounce-subtle" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-veryfi-blue rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-veryfi-purple rounded-full animate-ping delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Trusted by 10,000+ businesses worldwide
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-gradient">Document Processing</span>{' '}
              Forever
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Extract data from receipts, invoices, and documents with 99.9% accuracy using our 
              advanced AI technology. Automate your workflows and save hours of manual work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-veryfi-gradient hover:opacity-90 text-white px-8 py-4 text-lg animate-pulse-glow"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-veryfi-blue px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-500">
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
              <div className="glass-morphism rounded-2xl p-8 hover-lift bg-white/80 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Live Document Processing
                  </h3>
                  <p className="text-gray-600">
                    Watch your documents get processed in real-time
                  </p>
                </div>
                
                {/* Mock document */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 mb-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-gray-700">Receipt #12345</div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
                
                {/* Extracted data preview */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-sm font-medium text-gray-700 mb-2">Extracted Data:</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-medium text-gray-900">$127.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium text-gray-900">2024-01-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vendor:</span>
                      <span className="font-medium text-gray-900">Acme Corp</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-veryfi-gradient rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
