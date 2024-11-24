"use client";

import React from "react";
import Link from "next/link";

const PaymentCompleted = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Title Section */}
      <header className="w-full px-20 py-10 flex justify-center">
        <h1 className="text-4xl font-bold text-[#ff6868]">Payment Completed</h1>
      </header>

      {/* Order Details Section */}
      <main className="w-full max-w-5xl px-10 py-10 bg-slate-50 rounded-lg shadow-xl flex flex-col gap-10">
        {/* Order ID */}
        <div className="text-2xl font-bold text-[#ff6868]">[Order ID]</div>

        {/* Order Items */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-xl text-black">5 x Hamburger</span>
            <span className="text-xl font-medium text-black">$15</span>
          </div>
        </div>

        {/* Subtotal, VAT, and Total */}
        <div className="flex flex-col gap-4 border-t pt-4">
          <div className="flex justify-between">
            <span className="text-xl text-black">Subtotal</span>
            <span className="text-xl font-medium text-black">$15</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl text-black">VAT</span>
            <span className="text-xl font-medium text-black">$8</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span className="text-[#ff6868]">Total</span>
            <span className="text-[#ff6868]">$23</span>
          </div>
        </div>

        {/* Billing Address & Payment Method */}
        <div className="flex gap-10 justify-center items-center">
          <div className="w-1/2 flex flex-col gap-2 items-center">
            <label className="text-sm font-medium text-black">Billing Address</label>
            <p className="text-lg text-black text-center">1234 Elm Street, Springfield</p>
          </div>
          <div className="w-1/2 flex flex-col gap-2 items-center">
            <label className="text-sm font-medium text-black">Payment Method</label>
            <p className="text-lg text-black text-center">Visa - **** **** **** 1234</p>
          </div>
        </div>


        {/* Return Button */}
        <div className="flex justify-center pt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-[#ff6868] text-white font-medium rounded-lg shadow hover:bg-[#ff6868] transition"
          >
            Return to Home Page
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PaymentCompleted;