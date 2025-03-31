import React, { createContext, useState, useContext } from "react";

// Create the Wishlist Context
const WishlistContext = createContext();

// Custom hook to use the Wishlist Context
export const useWishlist = () => useContext(WishlistContext);

// Wishlist Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Check if item already exists in wishlist
      const exists = prevItems.some((item) => item.id === product.id);

      if (!exists) {
        // Item doesn't exist, add new item
        return [...prevItems, product];
      }

      // Item already exists, return original array
      return prevItems;
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Toggle item in wishlist
  const toggleWishlistItem = (product) => {
    const exists = wishlistItems.some((item) => item.id === product.id);

    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  // Get wishlist count
  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  // Context value
  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    toggleWishlistItem,
    isInWishlist,
    clearWishlist,
    getWishlistCount,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
