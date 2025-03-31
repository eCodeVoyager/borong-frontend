import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroBanner = ({ banners }) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-rotate banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [banners.length]);

  // Next banner
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  // Previous banner
  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-purple-800 overflow-hidden">
      <div className="container mx-auto relative">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`transition-opacity duration-1000 ${
              currentBanner === index
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
              <div className="flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:px-12 z-10 text-white order-2 lg:order-1">
                <div
                  className="transform transition-transform duration-1000 translate-y-0"
                  style={{
                    opacity: currentBanner === index ? 1 : 0,
                    transform:
                      currentBanner === index
                        ? "translateY(0)"
                        : "translateY(20px)",
                    transition: "opacity 1s ease, transform 1s ease",
                  }}
                >
                  <span className="inline-block px-4 py-1 bg-indigo-500 bg-opacity-60 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    Limited Time Offer
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-indigo-100">
                    {banner.subtitle}
                  </p>
                  <p className="text-base sm:text-lg mb-4 sm:mb-8 text-indigo-200">
                    {banner.description}
                  </p>
                  <button className="bg-white text-indigo-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-indigo-100 transition-colors shadow-lg transform hover:scale-105 hover:shadow-xl duration-300 flex items-center text-sm sm:text-base">
                    {banner.cta}
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px]">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://source.unsplash.com/random/1200x800?fashion,${index}`}
                      alt={banner.title}
                      className="object-cover w-full h-full opacity-90 transform scale-105 animate-slow-pulse"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-purple-500 rounded-full opacity-20 animate-float-slow"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-600 rounded-full opacity-20 animate-float-slower"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel controls */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
          onClick={prevBanner}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
          onClick={nextBanner}
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentBanner === index ? "bg-white w-8" : "bg-white/50"
              }`}
              onClick={() => setCurrentBanner(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
