
import React from 'react';
import { Card } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Anmol's strategic approach to design challenges transformed our healthcare platform. His ability to balance user needs with business goals resulted in a 45% increase in customer engagement.",
      author: "Sarah Johnson",
      position: "Product Director, Nysa Health",
      image: "https://placehold.co/100x100/f8f9fa/343a40?text=SJ"
    },
    {
      quote: "Working with Anmol on our financial portal redesign was exceptional. His structured design process and attention to detail helped us simplify complex workflows while maintaining compliance requirements.",
      author: "Michael Chen",
      position: "VP of Digital, ICICI Bank",
      image: "https://placehold.co/100x100/f8f9fa/343a40?text=MC"
    },
    {
      quote: "Anmol stands out for his ability to translate business objectives into intuitive user experiences. His leadership on our investment platform directly contributed to our 40% growth in new users.",
      author: "Priya Sharma",
      position: "Chief Product Officer, FinTech Startup",
      image: "https://placehold.co/100x100/f8f9fa/343a40?text=PS"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Client Testimonials</h2>
        <p className="section-subheading text-center">
          Feedback from product leaders I've collaborated with to deliver impactful digital solutions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="mb-4 text-blue-500">
                <QuoteIcon size={32} />
              </div>
              
              <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
