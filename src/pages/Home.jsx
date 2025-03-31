import React, { useState } from "react";
import Header from "../components/layout/Header";
import HeroBanner from "../components/home/HeroBanner";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewArrivals from "../components/home/NewArrivals";
import Footer from "../components/layout/Footer";
import { useAnimations } from "../hooks/useAnimations";

const Home = () => {
  const [cartCount] = useState(0);
  const [wishlistItems] = useState([]);

  // Initialize animations
  useAnimations();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} wishlistItems={wishlistItems} />
      <main>
        <HeroBanner />
        <Categories />
        <FeaturedProducts />
        <NewArrivals />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
