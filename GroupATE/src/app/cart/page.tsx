"use client";

import { useCart, CartProvider } from "@/context/CartContext";
import  Cart from "@/components/Cart";
const CartPage = () => {


  return (
      <CartProvider>
        <Cart/>
      </CartProvider>
  );
};

export default CartPage;