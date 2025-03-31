import React from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({
  products,
  activeCategory,
  wishlistItems,
  toggleWishlist,
  handleAddToCart,
}) => {
  // Filter products by category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-10">
          <div>
            <h5 className="text-indigo-600 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              Our Collection
            </h5>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>
          <a
            href="#"
            className="mt-3 md:mt-0 flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors text-sm sm:text-base"
          >
            View All Collections <ChevronRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              wishlistItems={wishlistItems}
              toggleWishlist={toggleWishlist}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
