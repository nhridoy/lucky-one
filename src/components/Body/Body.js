import React from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Body = () => {
  return (
    <div className="grid grid-cols-5 gap-5 mt-5">
      <div className="col-span-4">
        <Product />
      </div>
      <div className="col-span-1">
        <Cart />
      </div>
    </div>
  );
};

export default Body;
