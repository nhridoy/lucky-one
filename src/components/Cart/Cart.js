import React from "react";
import CartItem from "../CartItem/CartItem";
import Swal from "sweetalert2";

const Cart = ({ cart, setCart }) => {
  /* const total = cart.reduce((acc, item) => acc + item.price, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = total.toFixed(2);
  const totalItemsPrice = totalItems.toFixed(2);
  const totalPriceWithTax = (total * 1.1).toFixed(2);
  const totalPriceWithTaxAndShipping = (total * 1.1 + 10).toFixed(2);
  const totalPriceWithTaxAndShippingAndDiscount = (
    total * 1.1 +
    10 -
    10
  ).toFixed(2); */
  const itemChooser = () => {
    if (cart.length != 0) {
      const randomProduct = cart[Math.floor(Math.random() * cart.length)];
      Swal.fire({
        title: "You choose",
        text: `${randomProduct.title}`,
        imageUrl: `${randomProduct.image}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: `${randomProduct.title}`,
        confirmButtonText: "Buy Now",
        customClass: "animated fadeIn",
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        title: "Oops...",
        text: "You have no products in cart!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const cartClear = () => {
    if (cart.length != 0) {
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
      }).then((result) => {
        if (result.value) {
          setCart([]);
          Swal.fire("Deleted!", "Your cart has been deleted.", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your cart is safe :)", "error");
        }
      });
    } else {
      Swal.fire({
        title: "Oops...",
        text: "You have no products in cart!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-yellow-100 rounded-lg p-2 sticky top-0">
      <h2 className="font-bold text-xl text-center">Cart</h2>
      <div className="flex flex-col gap-2">
        {cart.length ? (
          cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))
        ) : (
          <p className="text-center">No products in cart</p>
        )}

        <button
          onClick={itemChooser}
          className="border p-2 text-green-500 border-green-500"
        >
          Help Me Choose
        </button>
        <button
          onClick={cartClear}
          className="border p-2 text-red-500 border-red-500"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
