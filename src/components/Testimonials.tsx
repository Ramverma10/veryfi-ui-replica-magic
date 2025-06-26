
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Veryfi has transformed our accounts payable process. What used to take our team hours now happens in minutes with 99% accuracy. The ROI was immediate.",
      author: "Sarah Chen",
      role: "CFO",
      company: "TechFlow Solutions",
      rating: 5,
      image: "👩‍💼"
    },
    {
      content: "The API integration was seamless and the support team is exceptional. We're processing 10x more documents with half the staff time.",
      author: "Marcus Rodriguez",
      role: "Operations Director",
      company: "Global Logistics Inc",
      rating: 5,
      image: "👨‍💼"
    },
    {
      content: "Security and compliance were our biggest concerns. Veryfi not only met but exceeded our enterprise requirements. Highly recommended.",
      author: "Emily Watson",
      role: "IT Security Manager",
      company: "Fortune 500 Corp",
      rating: 5,
      image: "👩‍💻"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are transforming their document processing 
            workflows with Veryfi's AI-powered solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-veryfi-gradient rounded-2xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-gray-600 mb-8">Join thousands of satisfied customers</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TECHCRUNCH</div>
            <div className="text-2xl font-bold text-gray-400">FORBES</div>
            <div className="text-2xl font-bold text-gray-400">WIRED</div>
            <div className="text-2xl font-bold text-gray-400">BLOOMBERG</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
