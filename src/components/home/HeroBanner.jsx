import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { promotionalBanners } from "../../api/data";

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-rotate banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % promotionalBanners.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % promotionalBanners.length);
  };

  const prevBanner = () => {
    setCurrentBanner(
      (prev) =>
        (prev - 1 + promotionalBanners.length) % promotionalBanners.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[500px]">
        {promotionalBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentBanner ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                  <p className="text-xl mb-2">{banner.subtitle}</p>
                  <p className="text-lg mb-6">{banner.description}</p>
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    {banner.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promotionalBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
