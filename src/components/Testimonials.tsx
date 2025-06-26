
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which items should be visible
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        const rect = testimonialsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          testimonials.forEach((_, index) => {
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
    <section id="testimonials" className="py-32 relative overflow-hidden gradient-bg-5">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-32 left-12 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-12 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            See how leading companies are transforming their document processing 
            workflows with Veryfi's AI-powered solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-morphism rounded-3xl p-8 interactive-card border border-white/20 transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transform: `translateY(${scrollY * -0.05}px)`
              }}
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
                <Quote className="w-8 h-8 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-white/90 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl mr-4 shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-white/70">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div 
          className="text-center glass-morphism rounded-3xl p-8 border border-white/20"
          style={{
            transform: `translateY(${scrollY * -0.02}px)`,
          }}
        >
          <p className="text-white/80 mb-8 text-lg">Join thousands of satisfied customers</p>
          <div className="flex justify-center items-center space-x-12 opacity-70">
            <div className="text-2xl font-bold text-white/60 hover:text-white transition-colors cursor-pointer">TECHCRUNCH</div>
            <div className="text-2xl font-bold text-white/60 hover:text-white transition-colors cursor-pointer">FORBES</div>
            <div className="text-2xl font-bold text-white/60 hover:text-white transition-colors cursor-pointer">WIRED</div>
            <div className="text-2xl font-bold text-white/60 hover:text-white transition-colors cursor-pointer">BLOOMBERG</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
