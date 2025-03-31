import React from "react";

const CategoryNavigation = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="py-8 sm:py-12 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center justify-center p-3 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                activeCategory === category.name
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div
                className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 ${
                  activeCategory === category.name
                    ? "bg-white/20"
                    : "bg-indigo-100"
                }`}
              >
                {category.icon}
              </div>
              <span className="font-medium text-xs sm:text-sm">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
