// src/context/CartContext.tsx
'use client'; // Add this at the top to mark this as a client component

import React, { createContext, useState, useContext, ReactNode,useEffect } from 'react';
// Define the structure of a Product
interface Product {
  size: ReactNode;
  quantity: number;
  id: string;
  title: string;
  price: string;
  img: string;
  desc?: string;
}

// Define the structure of the Cart Context
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);


let products: Product[] = []
// CartProvider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize cart state
  const [cart, setCart] = useState<Product[]>([]);
  // Add a product to the cart or update the quantity if it's already in the cart
  const addToCart = (product: Product) => {

    products.push(product)

    // This code is useless because it is a async function call which will not update immediately when call

    // setCart((prevCart) => {
    //   const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
    //   if (existingProductIndex !== -1) {
    //     // If the product is already in the cart, update its quantity
    //     const updatedCart = [...prevCart];
    //     updatedCart[existingProductIndex].quantity += product.quantity;
    //     while(products.length>0){
    //       products.pop()
    //     }
    //     for(let i=0;i<updatedCart.length;i++){
    //       products.push(updatedCart[i])
    //     }
    //     return updatedCart;
    //   } else {
    //     // Otherwise, add the product as a new entry in the cart
    //     while(products.length>0){
    //       products.pop()
    //     }
    //       products.push(product)

    //     return [...prevCart, product];
    //   }
    // });
  };

  useEffect(() => {setCart(prevCart => ([...prevCart, ...products])); }, [])
  // Remove a product from the cart by ID
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    //remove product from products
    // products = products.filter((item) => item.id !== productId)
  };

  // Clear all items in the cart
  const clearCart = () => {
    setCart([]);
  };

  // Provide the context value
  return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};