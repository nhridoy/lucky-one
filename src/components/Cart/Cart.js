import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="bg-yellow-100 rounded-lg p-2 sticky top-0">
      <h2 className="font-bold text-xl text-center">Cart</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
                className="w-full h-full obcject-cover rounded-full"
              />
            </div>
            <h3 className="text-lg">Product Name</h3>
          </div>
          <AiFillDelete className="text-red-500" />
        </div>
        <button className="border p-2 text-green-500 border-green-500">
          Help Me Choose
        </button>
        <button className="border p-2 text-red-500 border-red-500">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
