import React, { useState } from "react";
import {
  ShoppingBag,
  Heart,
  Menu,
  X,
  Search,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const Header = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center z-10">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-800">
              <span className="text-purple-600">B</span>
              <span>orong</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 py-1"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 py-1"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 py-1"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 py-1"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 py-1"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Cart, Wishlist & Search */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              className="text-gray-700 hover:text-indigo-600 transition-colors relative p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>

            <button className="text-gray-700 hover:text-indigo-600 transition-colors relative p-2">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            <div className="relative p-2">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors">
                <ShoppingBag size={20} />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-700 hover:text-indigo-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar (toggle) */}
        <div
          className={`mt-4 transition-all duration-300 overflow-hidden ${
            isSearchOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-indigo-800">Borong</h2>
            <button
              className="text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              About
            </a>
            <a href="#" className="text-gray-800 font-medium py-2">
              Contact
            </a>
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-gray-700">
                <Phone size={18} className="mr-2" />
                <span>+880 1234 567890</span>
              </a>
              <a href="#" className="flex items-center text-gray-700">
                <Mail size={18} className="mr-2" />
                <span>contact@borong.com</span>
              </a>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
