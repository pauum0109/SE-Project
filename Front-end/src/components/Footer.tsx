import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Logo and Name */}
        <div className="flex justify-start gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-[#ff6868] text-[28px] font-medium">G</span>
            <span className="text-black text-[28px] font-medium">roup </span>
            <span className="text-[#ff6868] text-[28px] font-medium">ATE</span>
          </Link>
        </div>

        {/* Middle Column: Main Menu */}
        <div className="text-center">
          <h3 className="text-xl font-semibold">Main Menu</h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Offers</Link>
            </li>
            <li>
              <Link href="/">Menu</Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Us */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500">
        <p>© ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
