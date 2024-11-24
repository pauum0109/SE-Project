"use client";

import { useParams } from "next/navigation";
import { featuredProducts, pizzas } from "@/data";
import Price from "@/components/Price";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  const { id } = useParams();

  if (!id || Array.isArray(id)) {
    return <p>Product ID is invalid</p>;
  }
  const productId = parseInt(id);

  const product = [...featuredProducts, ...pizzas].find(
    (p) => p.id === productId
  );

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
            alt={product.title || "Product image"}
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
        <Price
          price={product.price}
          id={product.id}
          options={product.options || []}
          product={{
            title: "",
            img: "",
          }}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
