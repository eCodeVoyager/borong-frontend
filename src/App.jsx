import React from "react";
import Home from "./pages/Home";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <div className="App">
          <Home />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
