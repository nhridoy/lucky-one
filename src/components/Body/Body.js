import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Question from "../Question/Question";

const Body = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Load Computer Products from API
    fetch("data.json")
      // Convert response to JSON
      .then((response) => response.json())
      // Set products state to JSON data
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    setCart([]);
    if (products.length) {
      // Load Products ID from LocalStorage
      const storeProducts = JSON.parse(localStorage.getItem("products"));
      if (storeProducts) {
        storeProducts.map((product) => {
          // Get Product from State
          const productInCart = products.find((p) => p.id === product);
          // Add Product to Cart
          setCart((c) => [...c, productInCart]);
        });
      } else {
        setCart([]);
      }
    }
  }, [products]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
        <div className="md:col-span-4">
          <Product setCart={setCart} cart={cart} products={products} />
        </div>
        <div className="md:col-span-1">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
      <Question />
    </div>
  );
};

export default Body;
