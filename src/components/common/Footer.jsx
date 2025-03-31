import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              <span className="text-indigo-400">B</span>
              <span>orong</span>
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Simplified women's clothing e-commerce platform based in
              Bangladesh, focusing on seamless shopping experience without
              registration.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-indigo-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-indigo-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-indigo-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Shop
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Dresses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Tops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Bottoms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Ethnic Wear
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Help
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Returns &
                  Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> Payment Methods
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ChevronRight size={14} className="mr-2" /> FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start">
                <MapPin
                  size={16}
                  className="text-indigo-400 mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  123 Fashion Street, Gulshan, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={16}
                  className="text-indigo-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">+880 1234 567890</span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={16}
                  className="text-indigo-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">contact@borong.com</span>
              </li>
              <li className="flex items-center">
                <Clock
                  size={16}
                  className="text-indigo-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">
                  10:00 AM - 8:00 PM (Everyday)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-500 text-xs sm:text-sm">
              <p>&copy; {currentYear} Borong. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:justify-end">
              <div className="h-6 sm:h-8 w-12 sm:w-16 bg-gray-800 rounded-md flex items-center justify-center text-xs text-white">
                bKash
              </div>
              <div className="h-6 sm:h-8 w-12 sm:w-16 bg-gray-800 rounded-md flex items-center justify-center text-xs text-white">
                Nagad
              </div>
              <div className="h-6 sm:h-8 w-12 sm:w-16 bg-gray-800 rounded-md flex items-center justify-center text-xs text-white">
                Visa
              </div>
              <div className="h-6 sm:h-8 w-12 sm:w-16 bg-gray-800 rounded-md flex items-center justify-center text-xs text-white">
                Master
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
