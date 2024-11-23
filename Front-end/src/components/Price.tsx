"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext"; // Assuming useCart is a custom hook for managing cart state

type Props = {
  price: number;
  id: number;
  title: string; // Added title to props
  img: string; // Added img to props
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, title, img, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const { addToCart } = useCart(); // Assuming addToCart is a function to update the cart
  const router = useRouter(); // For navigation

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  const handleAddToCart = () => {
    if (typeof id === "number" && typeof price === "number") {
      // Add to cart
      addToCart({
        id,
        price: total, // Total price including quantity and options
        quantity,
        title, // Dynamically set the title
        size: options ? options[selected].title : "Default Size", // Set size based on options
        img, // Dynamically set the image
      });

      // Navigate to cart
      router.push("/cart");
    } else {
      console.error("Invalid id or price values");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          onClick={handleAddToCart}
          className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
