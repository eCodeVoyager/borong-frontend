import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { categories } from "../../api/data";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                activeCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <ShoppingBag size={18} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
