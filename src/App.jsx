import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("all");
  // Add a product to the cart
  const handleAddToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      {/* Cart */}
      <Cart cart={cart} />

      {/* TODO: Implement and render Cart component */}
    </div>
  );
};

export default App;