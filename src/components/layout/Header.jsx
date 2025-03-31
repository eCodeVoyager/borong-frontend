import React, { useState } from "react";
import { ShoppingBag, Heart, Menu, X, Search } from "lucide-react";

const Header = ({ cartCount, wishlistItems, onToggleSearch, onToggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    onToggleSearch?.(!isSearchOpen);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onToggleMenu?.(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Borong</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleToggleSearch}
              className="p-2 text-gray-700 hover:text-gray-900"
            >
              <Search className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              onClick={handleToggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Categories
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 p-4">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
