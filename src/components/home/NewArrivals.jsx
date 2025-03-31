import React from "react";
import { ArrowRight } from "lucide-react";

const NewArrivals = ({ products }) => {
  return (
    <div className="py-12 sm:py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h5 className="text-indigo-600 font-medium mb-2">Just Landed</h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            New Arrivals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover our latest collection of premium women's clothing, designed
            for comfort and elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl shadow-sm"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                <img
                  src={`https://source.unsplash.com/random/600x800?fashion,${product.category.toLowerCase()},${
                    product.id
                  }`}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-xl font-bold mb-0 sm:mb-1">
                  {product.name}
                </h3>
                <p className="text-indigo-100 mb-2 sm:mb-4 text-sm sm:text-base">
                  {product.price}
                </p>
                <button className="bg-white text-indigo-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 hover:bg-indigo-50 text-xs sm:text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            View All New Arrivals
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
