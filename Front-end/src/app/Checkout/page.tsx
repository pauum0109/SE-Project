"use client";

import Link from "next/link";
import React, { useState } from "react";


const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  const paymentMethods = [
    { icon: "💳", label: "Credit Card" },
    { icon: "💵", label: "Cash on Delivery" },
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center">
      {/* Payment Section */}
      <div className="w-full px-40 py-16 flex flex-col items-center gap-16">
        <h1 className="text-black text-4xl font-bold leading-tight">
          Choose Payment Method
        </h1>

        {/* Apply Coupon */}
        <div className="w-full-col flex justify-between items-start gap-16">
          <div className="w-full">
            <h2 className="text-black text-4xl font-bold ">
              Apply Coupon/Discount
            </h2>
          </div>
          <div className="w-full flex flex-col items-start gap-5">
            <div className="w-full">
              <label className="text-black text-l font-medium ">
                Coupon Code
              </label>
              <input
                type="text"
                placeholder="Enter code"
                className="w-full px-3 py-2 bg-neutral-50 border rounded-md border-neutral-50 text-sm text-black/50"
              />
            </div>
            <button className="w-full px-4 py-3 bg-[#ff6868] rounded-lg text-neutral-50 text-base font-medium ">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="w-full px-40 py-16 flex flex-col items-center gap-16">
        <h2 className="text-black text-4xl font-bold ">
          Available Payment Methods
        </h2>
        <div className="w-full grid grid-cols-2 gap-10">
          {paymentMethods.map((method, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-5 w-full py-8 px-4 rounded-lg border-2 ${
                selectedMethod === index
                  ? "border-[#ff6868] bg-[#ff6868]/10"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedMethod(index)}
            >
              <div
                className="w-24 h-24 bg-black/5 rounded-full flex justify-center items-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="text-black text-4xl">{method.icon}</span>
              </div>
              <span className="text-black text-xl font-normal ">
                {method.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Total Payment */}
      <div className="w-full px-40 py-16 flex flex-col items-center gap-16">
        <h2 className="text-center text-black text-4xl font-bold ">
          Total Payment
        </h2>
        <div className="w-full flex justify-between gap-5">
          {[
            { label: "Subtotal", value: "$100" },
            { label: "Discount", value: "-$10" },
            { label: "Total", value: "$90" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 border rounded-md w-full"
            >
              <span className="text-black/50 text-base font-normal">
                {item.label}
              </span>
              <span className="text-black text-2xl font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Information - Only shown if "Credit Card" is selected */}
      {selectedMethod === 0 && (
        <div className="w-full px-40 py-16 flex flex-col items-center gap-16">
          <h2 className="text-center text-black text-4xl font-bold ">
            Card Information
          </h2>
          <div className="w-full grid grid-cols-2 gap-20">
            {[
              { label: "Card Number", placeholder: "Enter card number" },
              { label: "Expiry Date", placeholder: "MM/YYYY" },
              { label: "CVV", placeholder: "Enter CVV" },
              { label: "Delivery Address", placeholder: "Enter Address" },
            ].map((field, index) => (
              <div key={index} className="flex flex-col gap-1">
                <label className="text-black text-sm font-medium">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 bg-neutral-50 border rounded-md border-gray-300 text-sm text-black/50"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cancel and Order Buttons - Always visible */}
      <div className="flex gap-3 mb-16">
        <Link href="/cart">
          <button className="px-8 py-3 border rounded-lg border-black text-black text-base font-medium">
            Cancel
          </button>
        </Link>
        <Link href="/Confirm">
          <button className="px-8 py-3 bg-[#ff6868] rounded-lg text-neutral-50 text-base font-medium">
            Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
