
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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
    <section 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.05}px)` }}
    >
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 transition-colors duration-300"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Trusted by{' '}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies are transforming their document processing 
            workflows with Veryfi's AI-powered solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 sm:p-8 shadow-lg hover-lift border border-border animate-fade-in-up transition-colors duration-300"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`
              }}
            >
              {/* Quote Icon */}
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-veryfi-gradient rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Quote className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-lg sm:text-2xl mr-3 sm:mr-4 flex-shrink-0">
                  {testimonial.image}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div 
          className="mt-12 sm:mt-16 text-center animate-fade-in-up"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">Join thousands of satisfied customers</p>
          <div className="flex justify-center items-center space-x-4 sm:space-x-8 opacity-60">
            <div className="text-lg sm:text-2xl font-bold text-muted-foreground">TECHCRUNCH</div>
            <div className="text-lg sm:text-2xl font-bold text-muted-foreground">FORBES</div>
            <div className="text-lg sm:text-2xl font-bold text-muted-foreground">WIRED</div>
            <div className="text-lg sm:text-2xl font-bold text-muted-foreground">BLOOMBERG</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
