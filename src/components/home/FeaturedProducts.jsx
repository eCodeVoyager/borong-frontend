import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import { featuredProducts } from "../../api/data";

const FeaturedProducts = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlistItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-2 right-2 p-2 rounded-full ${
                    wishlistItems.includes(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700"
                  } hover:bg-red-500 hover:text-white transition-colors`}
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
