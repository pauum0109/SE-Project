import React from "react";

const CustomerReviews = () => {
  return (
    <div className="self-stretch h-[508px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
      <div className="self-stretch h-24 flex-col justify-start items-center gap-6 flex">
        <div className="w-[520px] text-center text-black text-[40px] font-bold">
          Customer Reviews
        </div>
        <div className="w-[520px] text-center text-black text-base font-normal">
          See what our satisfied customers have to say
        </div>
      </div>

      <div className="self-stretch h-[232px] py-5 flex-col justify-center items-center gap-10 flex">
        <div className="flex gap-10">

          <div className="p-4 bg-black/5 rounded-md flex-col justify-start items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative bg-black/10 rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="/temporary/lisa.jpg" 
                  alt="Lisa M."
                />
              </div>
              <div className="flex flex-col">
                <div className="text-black text-sm font-medium">Lisa M.</div>
              </div>
            </div>
            <div className="text-black text-base font-normal">
              Absolutely loved the food and quick delivery!
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 text-center">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="p-4 bg-black/5 rounded-md flex-col justify-start items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative bg-[#cac9ce] rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="/temporary/Tom.jpg"
                  alt="Tom S."
                />
              </div>
              <div className="flex flex-col">
                <div className="text-black text-sm font-medium">Tom S.</div>
              </div>
            </div>
            <div className="text-black text-base font-normal">
              Great variety of options on the menu
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 text-center">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="p-4 bg-black/5 rounded-md flex-col justify-start items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative bg-white rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="/temporary/anna.png" 
                  alt="Anna K."
                />
              </div>
              <div className="flex flex-col">
                <div className="text-black text-sm font-medium">Anna K.</div>
              </div>
            </div>
            <div className="text-black text-base font-normal">
              Best customer service experience
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 text-center">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
