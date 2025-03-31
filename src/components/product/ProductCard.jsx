import React from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const ProductCard = ({
  product,
  wishlistItems,
  toggleWishlist,
  handleAddToCart,
}) => {
  const isInWishlist = wishlistItems?.includes(product.id);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden pt-[125%]">
        <img
          src={`https://source.unsplash.com/random/600x800?fashion,${product.category.toLowerCase()}`}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex flex-col space-y-2">
          <button
            className={`p-1.5 sm:p-2 rounded-full shadow-md transition-all duration-300 ${
              isInWishlist
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:bg-indigo-600 hover:text-white"
            }`}
            onClick={(e) => toggleWishlist(e, product.id)}
          >
            <Heart size={16} fill={isInWishlist ? "white" : "none"} />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <Star size={14} fill="currentColor" />
              <span className="text-sm">{product.rating}</span>
            </div>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-1.5 sm:p-2 rounded-full transition-colors"
              onClick={(e) => handleAddToCart(e)}
            >
              <ShoppingBag size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center">
          <span className="text-indigo-600 font-semibold mr-2 text-sm sm:text-base">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 text-xs sm:text-sm line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
