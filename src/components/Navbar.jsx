import React from "react";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { cart, setIsCartOpen } = useShop();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">T-Shirt Store</h1>
      <button
        onClick={() => setIsCartOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
      >
        Cart ({cart.length})
      </button>
    </div>
  );
}
