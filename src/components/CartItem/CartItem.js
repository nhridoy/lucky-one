import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { removeFromLocalStorage } from "../../utilities/localStorage";

const CartItem = ({ product, cart, setCart }) => {
  const handleRemoveFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: "animated fadeIn",
      reverseButtons: true,
    })
      .then((result) => {
        if (result.value) {
          const newCart = cart.filter((p) => p.id !== id);
          removeFromLocalStorage(id);
          setCart(newCart);
          Swal.fire("Deleted!", "Your cart has been deleted.", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your cart is safe :)", "error");
        }
      })
      .then(() => {
        if (cart.length === 0) {
          setCart([]);
        }
      });
  };
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
      <AiFillDelete
        onClick={() => handleRemoveFromCart(product.id)}
        className="text-red-500 cursor-pointer"
      />
    </div>
  );
};

export default CartItem;
