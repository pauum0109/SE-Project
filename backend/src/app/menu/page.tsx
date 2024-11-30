import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2.5 gap-5">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative w-full h-60 md:h-80 bg-cover p-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-between`}
          >
            <div className="text-${category.color} w-full text-white">
              <h1 className="uppercase font-ariel text-3xl">
                {category.title}
              </h1>
              <p className="text-sm mt-4">{category.desc}</p>
            </div>
            <button
              className={`mt-4 bg-${category.color} text-${
                category.color === "black" ? "white" : "[#ff6868]"
              } py-2 px-4 rounded-md transition-colors duration-300 hover:bg-opacity-80`}
            ></button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
