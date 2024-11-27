"use client"; // Mark this file as a client component

import { featuredProducts } from "@/data"; // Import the product data
import { useCart, CartProvider } from "@/context/CartContext"; // Import the cart context and CartProvider
import Link from "next/link"; // Import Link for navigation
import  Cart from "@/components/Cart";
const CartPage = () => {


  return (
    <CartProvider>
    <Cart/>
    </CartProvider>
  );
};

export default CartPage;