"use client";

import { featuredProducts } from "@/data";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const parsePrice = (price: string | number) => {
    const priceString = typeof price === "string" ? price : price.toString();
    return parseFloat(priceString.replace("$", ""));
  };

  const findProductById = (id: number) =>
    featuredProducts.find((product) => product.id === id);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + parsePrice(item.price) * quantity;
    }, 0);
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {cart.length === 0 ? (
          <div className="text-center text-xl font-semibold text-gray-700">
            Your cart is empty
          </div>
        ) : (
          cart.map((item) => {
            const product = findProductById(item.id);
            return (
              <div
                key={item.id}
                className="flex items-center justify-between mb-6 border-b pb-4 flex-row"
              >
                <div className="flex-grow">
                  <h1 className="uppercase text-lg font-bold truncate">
                    {product?.title || "Unknown Product"}
                  </h1>
                  <span className="text-sm text-gray-600">{item.size}</span>
                </div>
                <h2 className="font-bold text-gray-900 min-w-[60px] text-right">
                  ${parsePrice(item.price).toFixed(2)}
                </h2>
                <span
                  className="cursor-pointer text-red-500 font-semibold remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </span>
              </div>
            );
          })
        )}
      </div>

      <div className="h-1/2 p-6 bg-fuchsia-50 flex flex-col gap-6 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-16 xl:px-32 2xl:text-lg 2xl:gap-8">
        <div className="flex justify-between text-gray-800 font-medium">
          <span>Subtotal ({cart.length} items)</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Delivery Cost</span>
          <span className="text-green-500 font-semibold">FREE!</span>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex justify-between text-gray-900 text-lg font-bold">
          <span>TOTAL</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <Link href="/Checkout">
          <button className="bg-red-500 text-white p-4 rounded-md w-full font-medium shadow-md hover:bg-red-600">
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
