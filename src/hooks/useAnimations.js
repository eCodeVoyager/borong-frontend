import { useEffect } from "react";

/**
 * Custom hook to add CSS animations to the global stylesheet
 * This allows animations to be used across the application
 */
const useAnimations = () => {
  useEffect(() => {
    // Create a stylesheet for animations
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";

    // Define animation keyframes
    styleSheet.innerText = `
      @keyframes slowPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes floatSlow {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes floatSlower {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-slow-pulse {
        animation: slowPulse 6s infinite ease-in-out;
      }
      
      .animate-float-slow {
        animation: floatSlow 7s infinite ease-in-out;
      }
      
      .animate-float-slower {
        animation: floatSlower 10s infinite ease-in-out;
      }
    `;

    // Append the stylesheet to the document head
    document.head.appendChild(styleSheet);

    // Clean up function to remove the stylesheet when the component unmounts
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
};

export default useAnimations;
