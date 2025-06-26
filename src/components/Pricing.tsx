
import { Check, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      period: 'month',
      description: 'Perfect for small businesses getting started',
      features: [
        { text: '1,000 documents/month', included: true },
        { text: 'Basic API access', included: true },
        { text: 'Email support', included: true },
        { text: 'Standard accuracy', included: true },
        { text: 'Advanced analytics', included: false },
        { text: 'Priority support', included: false },
        { text: 'Custom integrations', included: false }
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '99',
      period: 'month',
      description: 'For growing businesses with higher volume',
      features: [
        { text: '10,000 documents/month', included: true },
        { text: 'Full API access', included: true },
        { text: 'Priority support', included: true },
        { text: 'Premium accuracy', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Webhook integrations', included: true },
        { text: 'Custom integrations', included: false }
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        { text: 'Unlimited documents', included: true },
        { text: 'Full API access', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Maximum accuracy', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'On-premise deployment', included: true }
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start with a free trial 
            and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover-lift animate-fade-in-up ${
                plan.popular
                  ? 'border-veryfi-blue bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl scale-105'
                  : 'border-gray-200 bg-white shadow-lg hover:border-veryfi-blue/50'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-veryfi-gradient text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button
                className={`w-full py-4 text-lg font-semibold ${
                  plan.popular
                    ? 'bg-veryfi-gradient hover:opacity-90 text-white'
                    : 'border-2 border-gray-300 hover:border-veryfi-blue hover:text-veryfi-blue bg-white text-gray-900'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                What's included in the free trial?
              </h4>
              <p className="text-gray-600">
                Full access to all features for 14 days with 500 free document credits.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Can I change plans anytime?
              </h4>
              <p className="text-gray-600">
                Yes, upgrade or downgrade your plan at any time with prorated billing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                What about data security?
              </h4>
              <p className="text-gray-600">
                Bank-level encryption, SOC 2 compliance, and secure data centers worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Do you offer custom solutions?
              </h4>
              <p className="text-gray-600">
                Yes, we provide custom integrations and on-premise deployments for enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
