import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  return context;
};

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  //Quantity should get updated in the product list
  // when the product is added to the cart
  const addToCart = (product, size, quantity) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.tshirtName === product.tshirtName && item.size === size
    );

    // Update product quantity
    setProducts(
      products.map((p) => {
        if (p.tshirtName === product.tshirtName) {
          return {
            ...p,
            [`quantity${size}`]: p[`quantity${size}`] - quantity,
          };
        }
        return p;
      })
    );

    if (existingItemIndex !== -1) {
      // Update existing cart item
      setCart(
        cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Add new cart item
      setCart([...cart, { ...product, size, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const itemToRemove = cart[index];

    // Restore product quantity
    setProducts(
      products.map((p) => {
        if (p.tshirtName === itemToRemove.tshirtName) {
          return {
            ...p,
            [`quantity${itemToRemove.size}`]:
              p[`quantity${itemToRemove.size}`] + itemToRemove.quantity,
          };
        }
        return p;
      })
    );

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
