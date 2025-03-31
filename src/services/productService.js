// This file would typically contain API calls for product data.
// For the current implementation, we're using mock data, but in a real application,
// these functions would make actual API requests.

// Mock categories
const categories = [
  { id: "all", name: "All", icon: "shopping-bag" },
  { id: "dresses", name: "Dresses", icon: "shopping-bag" },
  { id: "tops", name: "Tops", icon: "shopping-bag" },
  { id: "bottoms", name: "Bottoms", icon: "shopping-bag" },
  { id: "ethnic", name: "Ethnic Wear", icon: "shopping-bag" },
  { id: "accessories", name: "Accessories", icon: "shopping-bag" },
];

// Mock featured products
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

// Mock banner data
const banners = [
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

/**
 * Get all product categories
 */
export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 300);
  });
};

/**
 * Get featured products
 * @param {string} category - Category filter (optional)
 */
export const getFeaturedProducts = (category = "All") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === "All") {
        resolve(featuredProducts);
      } else {
        const filtered = featuredProducts.filter(
          (product) => product.category === category
        );
        resolve(filtered);
      }
    }, 300);
  });
};

/**
 * Get new arrivals
 */
export const getNewArrivals = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newArrivals);
    }, 300);
  });
};

/**
 * Get banner data
 */
export const getBanners = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(banners);
    }, 300);
  });
};

/**
 * Get product by ID
 * @param {number} id - Product ID
 */
export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const allProducts = [...featuredProducts, ...newArrivals];
      const product = allProducts.find((p) => p.id === id);

      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 300);
  });
};

// Export all functions
export default {
  getCategories,
  getFeaturedProducts,
  getNewArrivals,
  getBanners,
  getProductById,
};
