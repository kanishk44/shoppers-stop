import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product, size, quantity) => {
    setCart([...cart, { ...product, size, quantity }]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    products,
    cart,
    isCartOpen,
    setIsCartOpen,
    addProduct,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
