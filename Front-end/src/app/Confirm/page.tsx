"use client";

import React from "react";
import Link from "next/link";

const PaymentCompleted = () => {
  return (
    <div className="w-[1440px] h-[1088px] bg-white flex-col justify-start items-center inline-flex">
      {/* Payment Completed Title */}
      <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
          <div className="text-black text-[40px] font-bold font-['Outfit'] leading-[48px]">
            Payment Completed
          </div>
        </div>
      </div>

      {/* Order Details Section */}
      <div className="self-stretch h-[740px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
        <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-[40px] font-bold font-['Outfit'] leading-[48px]">
              [Order ID]
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-center inline-flex">
            <div className="self-stretch justify-start items-start gap-[25px] inline-flex">
              <div className="grow shrink basis-0 h-[68px] py-5 justify-center items-center gap-[25px] flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-['Outfit'] leading-7">
                    5 x Hamburger
                  </div>
                </div>
              </div>
            </div>

            {/* Subtotal, VAT, Total */}
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[68px] py-5 justify-center items-center gap-4 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-['Outfit'] leading-7">
                    Subtotal
                  </div>
                </div>
                <div className="text-right text-black text-xl font-medium font-['Outfit'] leading-7">
                  $15
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[68px] py-5 justify-center items-center gap-4 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-['Outfit'] leading-7">
                    VAT
                  </div>
                </div>
                <div className="text-right text-black text-xl font-medium font-['Outfit'] leading-7">
                  $8
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 h-[68px] py-5 justify-center items-center gap-4 flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-['Outfit'] leading-7">
                    Total
                  </div>
                </div>
                <div className="text-right text-black text-xl font-medium font-['Outfit'] leading-7">
                  $5
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Address & Payment Method */}
        <div className="self-stretch h-[60px] flex-col justify-center items-center gap-10 flex">
          <div className="self-stretch justify-start items-start gap-20 inline-flex">
            <div className="w-[510px] flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch text-black text-sm font-medium font-['Outfit'] leading-tight">
                Billing Address
              </div>
              <div className="self-stretch px-3 py-2 bg-neutral-50 rounded-md border border-[#d9d9d9] justify-start items-center gap-1 inline-flex">
                <input
                  type="text"
                  placeholder="Enter card number"
                  className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal font-['Roboto'] leading-tight bg-neutral-50 border-none outline-none"
                />
              </div>
            </div>
            <div className="w-[510px] flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch text-black text-sm font-medium font-['Outfit'] leading-tight">
                Payment Method
              </div>
              <div className="self-stretch px-3 py-2 bg-neutral-50 rounded-md border border-[#d9d9d9] justify-start items-center gap-1 inline-flex">
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  className="grow shrink basis-0 h-5 text-black/50 text-sm font-normal font-['Roboto'] leading-tight bg-neutral-50 border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="justify-start items-start gap-3 inline-flex">
          <Link href="/" passHref>
            <div className="w-60 p-3 bg-[#ff6868] rounded-lg flex-col justify-center items-center inline-flex">
              <div className="text-neutral-50 text-base font-medium font-['Outfit'] leading-normal">
                Return to Home Page
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCompleted;
