import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Load Computer Products from API
    fetch("data.json")
      // Convert response to JSON
      .then((response) => response.json())
      // Set products state to JSON data
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-xl">Products</h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
