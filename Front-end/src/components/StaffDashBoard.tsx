import React from "react";
import Image from "next/image";
import Link from "next/link";

const StaffDashboard = () => {
  return (
    <div className="self-stretch h-[220px] px-[170px] py-[60px] bg-[#ff6868] flex justify-center items-center gap-10">
      <Link href="/staff">
        <div className="w-[100px] h-[100px] relative bg-white rounded-full overflow-hidden cursor-pointer">
          <Image
            src="/staff.jpg"
            alt="Staff Member"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </Link>

      <div className="flex flex-col items-center gap-3">
        <div className="text-white text-2xl font-bold">Staff Dashboard</div>
        <div className="flex items-center gap-1.5">
          <div className="px-1 py-0.5 rounded-sm flex justify-center items-center gap-0.5">
            <div className="text-white text-xs font-normal">
              Staff Access Only
            </div>
          </div>
        </div>
        <div className="text-white text-base font-normal">
          Manage daily menu and track orders from customers
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
