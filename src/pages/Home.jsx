import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";

// Import components
import MainLayout from "../components/layout/MainLayout";
import HeroBanner from "../components/home/HeroBanner";
import CategoryNavigation from "../components/home/CategoryNavigation";
import FeaturedProducts from "../components/home/FeaturedProducts";
import NewArrivals from "../components/home/NewArrivals";
import FeaturesSection from "../components/home/FeaturesSection";
import Testimonials from "../components/home/Testimonials";
import InstagramFeed from "../components/home/InstagramFeed";
import Newsletter from "../components/home/Newsletter";

// Import hooks and contexts
import useAnimations from "../hooks/useAnimations";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

const Home = () => {
  // State for categories
  const [activeCategory, setActiveCategory] = useState("All");

  // Get cart and wishlist from contexts
  const { addToCart, getCartCount } = useCart();
  const { toggleWishlistItem, isInWishlist, getWishlistCount } = useWishlist();

  // Initialize animations
  useAnimations();

  // Mock data for banner carousel
  const promotionalBanners = [
    {
      id: 1,
      title: "Exclusive Summer Collection",
      subtitle: "Refresh your wardrobe with our premium designs",
      description: "Up to 30% off on selected items",
      cta: "Shop Now",
    },
    {
      id: 2,
      title: "Eid Festival Offers",
      subtitle: "Celebrate in style with our festive collection",
      description: "Special discounts on all ethnic wear",
      cta: "Explore Collection",
    },
    {
      id: 3,
      title: "New Season Arrivals",
      subtitle: "Be the first to discover the latest trends",
      description: "Pre-order now for exclusive benefits",
      cta: "View New Arrivals",
    },
  ];

  // Mock categories
  const categories = [
    { id: "all", name: "All", icon: <ShoppingBag size={18} /> },
    { id: "dresses", name: "Dresses", icon: <ShoppingBag size={18} /> },
    { id: "tops", name: "Tops", icon: <ShoppingBag size={18} /> },
    { id: "bottoms", name: "Bottoms", icon: <ShoppingBag size={18} /> },
    { id: "ethnic", name: "Ethnic Wear", icon: <ShoppingBag size={18} /> },
    { id: "accessories", name: "Accessories", icon: <ShoppingBag size={18} /> },
  ];

  // Mock featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: "৳ 1,599",
      oldPrice: "৳ 1,999",
      category: "Dresses",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Casual Cotton Blouse",
      price: "৳ 899",
      oldPrice: "৳ 1,299",
      category: "Tops",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Elegant Evening Gown",
      price: "৳ 2,199",
      oldPrice: "৳ 2,899",
      category: "Dresses",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Denim Slim Jeans",
      price: "৳ 1,299",
      oldPrice: "৳ 1,599",
      category: "Bottoms",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Embroidered Kurti",
      price: "৳ 1,799",
      oldPrice: "৳ 2,199",
      category: "Ethnic",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Designer Handbag",
      price: "৳ 2,499",
      oldPrice: "৳ 2,999",
      category: "Accessories",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Silk Scarf",
      price: "৳ 799",
      oldPrice: "৳ 999",
      category: "Accessories",
      rating: 4.5,
    },
    {
      id: 8,
      name: "Pleated Midi Skirt",
      price: "৳ 1,399",
      oldPrice: "৳ 1,799",
      category: "Bottoms",
      rating: 4.7,
    },
  ];

  // Mock new arrivals
  const newArrivals = [
    {
      id: 9,
      name: "Embellished Party Dress",
      price: "৳ 2,799",
      category: "Dresses",
    },
    { id: 10, name: "Printed Summer Blouse", price: "৳ 999", category: "Tops" },
    {
      id: 11,
      name: "Designer Clutch Bag",
      price: "৳ 1,599",
      category: "Accessories",
    },
    {
      id: 12,
      name: "Linen Wide-Leg Pants",
      price: "৳ 1,899",
      category: "Bottoms",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Farida Ahmed",
      rating: 5,
      text: "The quality of Borong's clothes is exceptional! I received my order quickly with SMS updates, and the designs are beautiful.",
    },
    {
      id: 2,
      name: "Nusrat Rahman",
      rating: 5,
      text: "I love how I can order without creating an account. The checkout is so simple, and their customer service is excellent!",
    },
    {
      id: 3,
      name: "Tasneem Khan",
      rating: 4,
      text: "Borong has become my go-to online store for clothes. Their SMS notifications keep me updated on my order status.",
    },
  ];

  // Add to cart handler
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  // Toggle wishlist handler
  const handleToggleWishlist = (e, product) => {
    e.stopPropagation();
    toggleWishlistItem(product);
  };

  return (
    <MainLayout cartCount={getCartCount()} wishlistCount={getWishlistCount()}>
      <HeroBanner banners={promotionalBanners} />

      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <FeaturedProducts
        products={featuredProducts}
        activeCategory={activeCategory}
        isInWishlist={isInWishlist}
        toggleWishlist={handleToggleWishlist}
        handleAddToCart={handleAddToCart}
      />

      <NewArrivals products={newArrivals} />

      <FeaturesSection />

      <Testimonials testimonials={testimonials} />

      <InstagramFeed />

      <Newsletter />
    </MainLayout>
  );
};

export default Home;
