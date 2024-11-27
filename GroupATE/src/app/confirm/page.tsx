"use client";

import React from "react";
import Link from "next/link";

const PaymentCompleted = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center">
      {/* Title Section */}
      <header className="w-full px-20 py-10 flex justify-center">
        <h1 className="text-4xl font-bold text-blue-800">Payment Completed</h1>
      </header>

      {/* Order Details Section */}
      <main className="w-full max-w-5xl px-10 py-10 bg-white rounded-lg shadow-xl flex flex-col gap-10">
        {/* Order ID */}
        <div className="text-2xl font-bold text-blue-800">[Order ID]</div>

        {/* Order Items */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-xl text-blue-800">5 x Hamburger</span>
            <span className="text-xl font-medium text-blue-800">$15</span>
          </div>
        </div>

        {/* Subtotal, VAT, and Total */}
        <div className="flex flex-col gap-4 border-t pt-4">
          <div className="flex justify-between">
            <span className="text-xl text-blue-800">Subtotal</span>
            <span className="text-xl font-medium text-blue-800">$15</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl text-blue-800">VAT</span>
            <span className="text-xl font-medium text-blue-800">$8</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span className="text-blue-900">Total</span>
            <span className="text-blue-900">$23</span>
          </div>
        </div>

        {/* Billing Address & Payment Method */}
        <div className="flex gap-10">
          <div className="w-1/2 flex flex-col gap-2">
            <label htmlFor="billingAddress" className="text-sm font-medium text-blue-800">
              Billing Address
            </label>
            <input
              id="billingAddress"
              type="text"
              placeholder="Enter billing address"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label htmlFor="paymentMethod" className="text-sm font-medium text-blue-800">
              Payment Method
            </label>
            <input
              id="paymentMethod"
              type="text"
              placeholder="MM/YYYY"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Return Button */}
        <div className="flex justify-center pt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Return to Home Page
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PaymentCompleted;
