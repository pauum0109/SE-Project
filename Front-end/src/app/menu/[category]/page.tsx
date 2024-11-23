'use client';

import { useParams } from 'next/navigation';
import { pizzas } from "@/data";  // Ensure the correct import path
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

// Define a type for the product
interface Product {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number; }[];
}

// Function to filter products by category
const filterProductsByCategory = (category: string): Product[] => {
  // Categories for filtering
  const drinkTitles = ["Matcha Latte", "Milk Coffee", "Strawberry Milk Shake"];
  const appetizerTitles = ["Mozzarella Sticks", "Spicy Arrabbiata"];
  const mainCourseTitles = ["Pesto Primavera", "Ramen", "Wings", "Jalapeño Fiesta"];

  // Filtering products based on category
  switch (category) {
    case "Drinks":
      return pizzas.filter(product => drinkTitles.includes(product.title));
    case "Appetizer":
      return pizzas.filter(product => appetizerTitles.includes(product.title));
    case "maincourses":
      return pizzas.filter(product => mainCourseTitles.includes(product.title));
    default:
      return []; // Return an empty array if the category does not match
  }
};

const CategoryPage = () => {
  const { category } = useParams();  // Get the category from the URL parameter
  const [products, setProducts] = useState<Product[]>([]);

  // Debugging: Log the category to ensure it's passed correctly
  useEffect(() => {
    console.log("Category from URL:", category);

    // Check if category exists and is a valid string
    if (category && typeof category === 'string') {
      const filtered = filterProductsByCategory(category);
      console.log("Filtered Products:", filtered); // Log the filtered products for debugging
      setProducts(filtered);
    } else {
      // If category is invalid, set products to an empty array or handle the case appropriately
      setProducts([]);
    }
  }, [category]); // Only rerun the effect when the category changes

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
                  alt={`Image of ${title}`}  // Alt text for accessibility
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
                title="Add to Cart"  // Improve accessibility with title attribute
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))
      ) : (
        <p className="w-full text-center">No products found for the selected category.</p>
      )}
    </div>
  );
};

export default memo(CategoryPage);  // Memoizing the component to prevent unnecessary re-renders
