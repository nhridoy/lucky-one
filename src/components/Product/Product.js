import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Swal from "sweetalert2";
import { addToLocalStorage } from "../../utilities/localStorage";

const Product = ({ cart, setCart, products }) => {
  const handleAddToCart = (id) => {
    // Get Product from State
    const productInCart = products.find((p) => p.id === id);
    if (cart.length < 4) {
      if (cart.find((p) => p.id === id)) {
        Swal.fire({
          title: "Product already in cart",
          text: "You can only add 4 products to cart",
          icon: "warning",
          confirmButtonText: "OK",
        });
      } else {
        // Add Product to Cart
        setCart([...cart, productInCart]);
        // Save Cart in LocalStorage
        addToLocalStorage(id);
      }
    } else {
      Swal.fire({
        title: "Oops...",
        text: "You can only select 4 products!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white items-center p-1 border rounded-lg "
          >
            <div className="p-1 border h-full rounded-lg relative">
              <div className="w-full h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg">{product.title}</h3>
              <p className="font-semibold my-5">$ {product.price}</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-bold absolute bottom-0 flex items-center gap-2"
              >
                <span>Add to Cart</span> <AiOutlineShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
