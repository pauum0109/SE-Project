"use client"; // Mark this file as a client component

import { featuredProducts } from "@/data"; // Import the product data
import { useCart, CartProvider } from "@/context/CartContext"; // Import the cart context and CartProvider
import Link from "next/link"; // Import Link for navigation
import { Console } from "console";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Destructure cart items and removeFromCart function
    
 

  // Helper function to parse the price as a float
    const parsePrice = (price: string | number) => {
    const priceString = typeof price === "string" ? price : price.toString();
    return parseFloat(priceString.replace("$", "")); // Remove the '$' and convert to float
  };

  // Find the product by id from the featuredProducts array
  const findProductById = (id: number) =>{
    featuredProducts.find((product) => product.id === id);
  }
   

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity || 1; // Default to 1 if quantity is missing
      return total + parsePrice(item.price) * quantity;
    }, 0);
  };

  return (
     
    <CartProvider>
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
        {/* PRODUCTS CONTAINER */}
        <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
          {/* Loop through cart items */}
          {
          cart.length === 0 ? (
            <div className="text-center text-xl">Your cart is empty</div>        
          ) : (
            cart.map((item) => {
               
              const product = findProductById(Number(item.id)); // Find the product details
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
                  <div>
                    <h1 className="uppercase text-xl font-bold">
                      {item.title || "Unknown Product"}
                    </h1>
                    <span>{item.size}</span> {/* Display size only */}
                  </div>
                  <h2 className="font-bold">
                    ${(parsePrice(item.price)).toFixed(2)}
                  </h2>
                  <span
                    className="cursor-pointer text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* PAYMENT CONTAINER */}
        <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
          <div className="flex justify-between">
            <span>Subtotal ({cart.length} items)</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Service Cost</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Cost</span>
            <span className="text-green-500">FREE!</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span>TOTAL</span>
            <span className="font-bold">${calculateTotal().toFixed(2)}</span>
          </div>
          <Link href="/Checkout">
            <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </CartProvider>
  );
};

export default Cart;