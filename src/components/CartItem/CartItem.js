import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CartItem = ({ product }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full obcject-cover rounded-full"
          />
        </div>
        <h3 className="text-lg truncate w-20">{product.title}</h3>
      </div>
      <AiFillDelete className="text-red-500" />
    </div>
  );
};

export default CartItem;
