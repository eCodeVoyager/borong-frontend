import React from "react";
import { Phone } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Subscribe with your phone number to receive exclusive offers and
                updates
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="pl-10 w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  />
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg text-sm">
                  Subscribe
                </button>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm mt-4">
                By subscribing, you agree to receive SMS notifications from
                Borong.
              </p>
            </div>

            <div className="relative h-48 sm:h-64 lg:h-auto overflow-hidden">
              <img
                src="https://source.unsplash.com/random/800x800?fashion,model"
                alt="Newsletter"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-purple-600/80 flex flex-col justify-center p-6 sm:p-10 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Get 10% Off
                </h3>
                <p className="mb-4 text-sm sm:text-base">
                  On your first order when you subscribe
                </p>
                <div className="inline-block px-4 py-1 border-2 border-white/30 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                  Limited Time Offer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
