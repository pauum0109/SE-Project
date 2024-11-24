"use client";

import { useParams } from "next/navigation";
import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
}

const filterProductsByCategory = (category: string): Product[] => {
  const drinkTitles = ["Matcha Latte", "Milk Coffee", "Strawberry Milk Shake"];
  const appetizerTitles = ["Mozzarella Sticks", "Spicy Arrabbiata"];
  const mainCourseTitles = [
    "Pesto Primavera",
    "Ramen",
    "Wings",
    "Jalapeño Fiesta",
  ];

  switch (category) {
    case "Drinks":
      return pizzas.filter((product) => drinkTitles.includes(product.title));
    case "Appetizer":
      return pizzas.filter((product) =>
        appetizerTitles.includes(product.title)
      );
    case "maincourses":
      return pizzas.filter((product) =>
        mainCourseTitles.includes(product.title)
      );
    default:
      return [];
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log("Category from URL:", category);

    if (category && typeof category === "string") {
      const filtered = filterProductsByCategory(category);
      console.log("Filtered Products:", filtered);
      setProducts(filtered);
    } else {
      setProducts([]);
    }
  }, [category]);

  return (
    <div className="flex flex-wrap text-red-500">
      {products.length > 0 ? (
        products.map(({ id, img, title, price }) => (
          <Link
            key={id}
            href={`/product/${id}`}
            className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          >
            {/* IMAGE CONTAINER */}
            {img && (
              <div className="relative h-[80%]">
                <Image
                  src={img}
                  alt={`Image of ${title}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {/* TEXT CONTAINER */}
            <div className="flex items-center justify-between font-bold">
              <h1 className="text-2xl uppercase p-2">{title}</h1>
              <h2 className="group-hover:hidden text-xl">${price}</h2>
              <button
                className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md"
                title="Add to Cart"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))
      ) : (
        <p className="w-full text-center">
          No products found for the selected category.
        </p>
      )}
    </div>
  );
};

export default memo(CategoryPage);
