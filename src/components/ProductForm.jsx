import React, { useState } from "react";
import { useShop } from "../context/ShopContext";

export default function ProductForm() {
  const { addProduct } = useShop();
  const [formData, setFormData] = useState({
    tshirtName: "",
    description: "",
    price: "",
    quantityL: "",
    quantityM: "",
    quantityS: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      ...formData,
      price: parseFloat(formData.price),
      quantityL: parseInt(formData.quantityL),
      quantityM: parseInt(formData.quantityM),
      quantityS: parseInt(formData.quantityS),
    });
    setFormData({
      tshirtName: "",
      description: "",
      price: "",
      quantityL: "",
      quantityM: "",
      quantityS: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            T-shirt Name
          </label>
          <input
            type="text"
            name="tshirtName"
            value={formData.tshirtName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
            min="0"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Quantity Available
        </label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Large</label>
            <input
              type="number"
              name="quantityL"
              value={formData.quantityL}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Medium</label>
            <input
              type="number"
              name="quantityM"
              value={formData.quantityM}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Small</label>
            <input
              type="number"
              name="quantityS"
              value={formData.quantityS}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              min="0"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Product
      </button>
    </form>
  );
}
