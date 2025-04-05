import React from "react";
import { useShop } from "../context/ShopContext";

export default function ProductList() {
  const { products, addToCart } = useShop();

  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{product.tshirtName}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">₹{product.price}</p>

          <div className="grid grid-cols-3 gap-2">
            {product.quantityL > 0 && (
              <button
                onClick={() => addToCart(product, "L", 1)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Buy Large ({product.quantityL})
              </button>
            )}
            {product.quantityM > 0 && (
              <button
                onClick={() => addToCart(product, "M", 1)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Buy Medium ({product.quantityM})
              </button>
            )}
            {product.quantityS > 0 && (
              <button
                onClick={() => addToCart(product, "S", 1)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Buy Small ({product.quantityS})
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
