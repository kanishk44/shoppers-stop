import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import { ShopProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ShopProvider>
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        <div className="mb-8">
          <ProductForm />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductList />
        </div>
        <CartModal />
      </div>
    </ShopProvider>
  );
}

export default App;
