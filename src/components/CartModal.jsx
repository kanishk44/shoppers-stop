import React from "react";
import { useShop } from "../context/ShopContext";

export default function CartModal() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, clearCart } =
    useShop();

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h3 className="font-semibold">{item.tshirtName}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-semibold">₹{item.price}</p>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">₹{total}</span>
              </div>
              <button
                onClick={() => {
                  alert("Order placed successfully!");
                  clearCart();
                  setIsCartOpen(false);
                }}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
