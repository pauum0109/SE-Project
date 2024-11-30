"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = params;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div>
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
      <div>
        <h2 className="text-black text-4xl font-bold w-full px-40 py-12 flex flex-col items-center">
          Available Payment Methods
        </h2>
        <div>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayPage;
