"use client";

import { useParams } from "next/navigation"; // Correct hook to access dynamic route parameters
import { featuredProducts, pizzas } from "@/data"; // Import data from your provided data.ts
import Price from "@/components/Price";
import Image from "next/image";
import React from "react";
import { CartProvider } from "@/context/CartContext"; // Import the CartProvider

const SingleProductPage = () => {
  const { id } = useParams(); // Get the 'id' from the URL

  // Validate the id and check if it's a number
  if (!id || Array.isArray(id)) {
    return <p>Product ID is invalid</p>; // Handle invalid or array id
  }

  // Safely parse the id as a number
  const productId = parseInt(id);

  // Combine the product lists (featuredProducts + pizzas)
  const product = [...featuredProducts, ...pizzas].find(

    (p) => p.id === productId
  );
  console.log(product);
  // Handle case where product is not found
  if (!product) {
    return (
      <div>
        <p>Product not found</p>
        <a href="/products" className="text-blue-500">
          Go back to the product list
        </a>
      </div>
    );
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {product.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={product.img}
            alt={product.title || "Product image"} // Ensure alt text for accessibility
            className="object-contain"
            fill
          />
        </div>
      )}

      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {product.title}
        </h1>
        <p>{product.desc}</p>
        {/* type Props = {
          price: number;
        id: number;
        title: string; // Added title to props
        img: string; // Added img to props
        options?: {title: string; additionalPrice: number }[];
        };  Here for reference */} 
          <CartProvider>
        <Price
          price={product.price}
          id={product.id}
          img={product.img || "/default-image.jpg"} // Pass a default image
          options={product.options || []} // Ensure options are passed as an array
          title={product.title} // Pass the title

        />
        </CartProvider>
      </div>
    </div>
  );
};

export default SingleProductPage;
