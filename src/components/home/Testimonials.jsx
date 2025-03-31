import React from "react";
import { Star } from "lucide-react";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-indigo-200 font-medium mb-2">Testimonials</h5>
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            Hear from our satisfied customers about their shopping experience
            with Borong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:bg-white/20 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={`https://source.unsplash.com/random/100x100?portrait,woman,${testimonial.id}`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-indigo-100 text-sm lg:text-base">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
