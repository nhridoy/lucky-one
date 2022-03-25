import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Question from "../Question/Question";

const Body = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
        <div className="md:col-span-4">
          <Product setCart={setCart} cart={cart} />
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
