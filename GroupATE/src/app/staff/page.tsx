import StaffDashboard from "@/components/StaffDashBoard";
import { featuredProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full h-full bg-white flex-col justify-start items-center inline-flex">
      <StaffDashboard />

      {/* Manage menu Section */}
      <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="text-center text-black text-[40px] font-bold leading-[48px]">
            Manage menu
          </div>
          <div className="w-full flex gap-6 overflow-x-scroll">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center p-4 hover:bg-fuchsia-50 transition-all duration-300 w-[300px] xl:w-[33vw] xl:h-[90vh]"
              >
                {/* Image Container */}
                <div className="relative w-full h-[250px] md:h-[300px] mb-4 hover:rotate-[60deg] transition-all duration-500">
                  {/* Render product image */}
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                      className="object-contain"
                    />
                  )}
                </div>
                {/* Text Container */}
                <div className="flex flex-col items-center justify-center text-center gap-4">
                  <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                    {item.title}
                  </h1>
                  <span className="text-xl font-bold">${item.price}</span>
                  <Link href={`/product/${item.id}`}>
                    <button className="bg-[#ff6868] text-white p-2 rounded-md">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales Tracking Section */}
      <div className="self-stretch h-[852px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
        <div className="self-stretch justify-center items-center gap-[60px] inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[520px] text-center text-black text-[40px] font-bold  leading-[48px]">
              Sales Tracking
            </div>
          </div>
        </div>
        <div className="self-stretch h-[124px] flex-col justify-center items-center gap-10 flex">
          <div className="self-stretch justify-start items-start gap-5 inline-flex">
            {/* Total Sales */}
            <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-black/50 text-base font-normal  leading-normal">
                Total Sales
              </div>
              <div className="text-black text-[28px] font-medium  leading-9">
                $10,000
              </div>
              <div className="text-black text-base font-normal  leading-normal">
                +25%
              </div>
            </div>
            {/* Top Selling Product */}
            <div className="grow shrink basis-0 p-4 rounded-md border border-black/10 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-black/50 text-base font-normal  leading-normal">
                Top Selling Product
              </div>
              <div className="text-black text-[28px] font-medium  leading-9">
                Product X
              </div>
              <div className="text-black text-base font-normal  leading-normal">
                -10%
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[440px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch grow shrink basis-0 p-5 rounded-md border border-black/10 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-black text-xl font-medium  leading-7">
              Sales Performance
            </div>
            <div className="self-stretch text-black/50 text-base font-normal  leading-normal">
              Revenue
            </div>
            {/* Placeholder for graph */}
            <div className="h-72 relative">
              <div className="w-[94.07px] h-[235.80px] left-[18.86px] top-[52.20px] absolute bg-[#ff6868]" />
              <div className="w-[94.07px] h-[169.20px] left-[173.40px] top-[118.80px] absolute bg-[#ff6868]" />
              <div className="w-[94.07px] h-[115.20px] left-[327.93px] top-[172.80px] absolute bg-[#ff6868]" />
              <div className="w-[94.07px] h-[176.40px] left-[482.47px] top-[111.60px] absolute bg-[#ff6868]" />
              <div className="w-[94.07px] h-[136.80px] left-[637.01px] top-[151.20px] absolute bg-[#ff6868]" />
              <div className="w-[94.07px] h-[210.60px] left-[791.54px] top-[77.40px] absolute bg-[#ff6868]" />
              <div className="w-[94.07px] h-[156.60px] left-[946.08px] top-[131.40px] absolute bg-[#ff6868]" />
            </div>
            <div className="self-stretch text-right text-black/50 text-base font-normal  leading-normal">
              Month
            </div>
          </div>
        </div>
      </div>

      {/* Customer Queries Section */}
      <div className="self-stretch h-[424px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] flex">
        <div className="self-stretch h-12 flex-col justify-start items-center gap-6 flex">
          <div className="w-[520px] text-center text-black text-[40px] font-bold  leading-[48px]">
            Customer Queries
          </div>
        </div>
        <div className="self-stretch h-[196px] py-5 flex-col justify-center items-center gap-10 flex">
          <div className="self-stretch justify-start items-center gap-10 inline-flex">
            {/* Query 1 */}
            <div className="grow shrink basis-0 h-[156px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
              <div className="w-[100px] h-[100px] justify-start items-start flex">
                <div className="h-full w-full relative bg-white">
                  <Image
                    src="/lisa.jpg"
                    alt="Query 1"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-black text-xl font-medium leading-7">
                  Lisa M.
                </div>
                <div className="self-stretch text-black text-base font-normal leading-normal">
                  lisa@gmail.com
                </div>
                <div className="self-stretch text-black text-base font-normal leading-normal">
                  01233456789
                </div>
              </div>
            </div>

            {/* Query 2 */}
            <div className="grow shrink basis-0 h-[156px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
              <div className="w-[100px] h-[100px] justify-start items-start flex">
                <div className="h-full w-full relative bg-white">
                  <Image
                    src="/anna.png"
                    alt="Query 2"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-[392px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-black text-xl font-medium leading-7">
                  Anna K.
                </div>
                <div className="self-stretch text-black text-base font-normal leading-normal">
                  anna@gmail.com
                </div>
                <div className="self-stretch text-black text-base font-normal leading-normal">
                  01233456789
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
