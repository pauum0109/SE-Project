import Link from "next/link";
import React from "react";
import UserLinks from "./UserLink";

const Navbar = () => {
  const user = false;
  return (
    <div className="w-full h-20 p-5 shadow flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-[#ff6868] text-[28px] font-medium">G</span>
        <span className="text-black text-[28px] font-medium">roup </span>
        <span className="text-[#ff6868] text-[28px] font-medium">ATE</span>
      </div>
      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <div className="hidden md:flex gap-4 items-center justify-end flex-1">
          <div className="md:absolute top-3 r-2 gap-2 cursor-pointer bg-orange-300 rounded-md"></div>
          {/*{!user ? (*/}
          {/*  <Link href="/login">Login</Link>*/}
          {/*) : (*/}
          {/*  <Link href="/orders">Orders</Link>*/}
          {/*)}*/}
            <UserLinks/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
