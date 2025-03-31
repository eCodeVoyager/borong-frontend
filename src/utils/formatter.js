/**
 * Format a price in BDT (Bangladesh Taka)
 * @param {number} price - The price to format
 * @param {boolean} withSymbol - Whether to include the BDT symbol
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, withSymbol = true) => {
  // Format the number with thousands separators
  const formattedNumber = new Intl.NumberFormat("bn-BD").format(price);

  // Add currency symbol if requested
  return withSymbol ? `৳ ${formattedNumber}` : formattedNumber;
};

/**
 * Parse a price string to a number
 * @param {string} priceString - The price string to parse (e.g., "৳ 1,599")
 * @returns {number} Parsed price as a number
 */
export const parsePrice = (priceString) => {
  // Remove currency symbol, commas, and spaces
  const cleanedString = priceString.replace(/[৳,\s]/g, "");

  // Parse as float
  return parseFloat(cleanedString);
};

/**
 * Calculate discount percentage
 * @param {string} currentPrice - Current price string
 * @param {string} originalPrice - Original price string
 * @returns {number} Discount percentage
 */
export const calculateDiscount = (currentPrice, originalPrice) => {
  const current = parsePrice(currentPrice);
  const original = parsePrice(originalPrice);

  if (original <= 0) return 0;

  const discount = ((original - current) / original) * 100;
  return Math.round(discount);
};

/**
 * Format a date
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

/**
 * Truncate text to a certain length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text;

  return `${text.substring(0, maxLength)}...`;
};

export default {
  formatPrice,
  parsePrice,
  calculateDiscount,
  formatDate,
  truncateText,
};
