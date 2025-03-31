import React from "react";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  // Number of Instagram posts to display
  const postCount = 6;

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h5 className="text-indigo-600 font-medium mb-2">@BorongBD</h5>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Tag your photos with #BorongStyle for a chance to be featured
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {[...Array(postCount)].map((_, index) => (
            <a href="#" key={index} className="relative group overflow-hidden">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/300x300?fashion,outfit,${
                    index + 1
                  }`}
                  alt={`Instagram post ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-indigo-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={24} className="text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-10">
          <a
            href="#"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors text-sm sm:text-base"
          >
            View More on Instagram <Instagram size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
