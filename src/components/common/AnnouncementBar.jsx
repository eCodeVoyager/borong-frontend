import React from "react";
import { Phone, Mail } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-indigo-900 text-white py-1 sm:py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center text-xs">
              <Phone size={12} className="mr-1" />
              <span>+880 1234 567890</span>
            </div>
            <div className="hidden md:flex items-center text-xs">
              <Mail size={12} className="mr-1" />
              <span>contact@borong.com</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium">
            Free shipping on orders over ৳3,000
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
