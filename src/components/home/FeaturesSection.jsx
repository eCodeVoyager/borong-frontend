import React from "react";
import { ShoppingBag, MessageCircle, Shield, Truck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Easy Ordering",
      description:
        "Shop without registration for a hassle-free shopping experience. Just add to cart and checkout!",
      icon: <ShoppingBag size={20} className="text-indigo-600" />,
    },
    {
      id: 2,
      title: "SMS Updates",
      description:
        "Receive real-time SMS notifications about your order status and delivery updates directly to your phone.",
      icon: <MessageCircle size={20} className="text-indigo-600" />,
    },
    {
      id: 3,
      title: "Secure Payments",
      description:
        "Multiple payment options including Cash on Delivery, bKash, and Nagad for your convenience and security.",
      icon: <Shield size={20} className="text-indigo-600" />,
    },
    {
      id: 4,
      title: "Fast Delivery",
      description:
        "Enjoy prompt delivery across Bangladesh with our reliable shipping partners and real-time tracking.",
      icon: <Truck size={20} className="text-indigo-600" />,
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            Why Choose Borong
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Experience hassle-free shopping with our simplified ordering process
            and real-time SMS updates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
