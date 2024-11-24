import Image from "next/image";

const OrderHistory = () => {
  return (
    <div className="w-full h-auto bg-gray-100 flex-col justify-start items-center inline-flex">
      {/* Header Section */}
      <div className="self-stretch px-[170px] py-[60px] bg-[#ff6868] text-white text-center">
        <div className="w-full flex-col justify-start items-center gap-6 inline-flex">
          <div className="text-[40px] font-bold leading-[48px]">
            Order History Tracking
          </div>
          <div className="w-[407px] text-base font-normal leading-normal">
            View and track all your past orders
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="self-stretch px-[170px] py-[60px] bg-white shadow-md">
        <div className="w-[300px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch text-[#ff6868] text-[40px] font-bold leading-[50px]">
            Recent Orders
          </div>
        </div>
        <div className="grow shrink basis-0 flex justify-center items-center gap-10">
          <div className="py-3 px-6 rounded-lg border border-white bg-[#ff6868] text-center">
            <div className="text-xl font-semibold text-white">Order #1234</div>
            <div className="text-base font-medium text-white">Delivered</div>
            <div className="text-[28px] font-medium text-white">2022-01-15</div>
          </div>
          <div className="py-3 px-6 rounded-lg border border-white bg-[#ff6868] text-center">
            <div className="text-xl font-semibold text-white">Order #5678</div>
            <div className="text-base font-medium text-white">Delivered</div>
            <div className="text-[28px] font-medium text-white">2022-01-15</div>
          </div>
        </div>
      </div>

      {/* Real-time Updates Section */}
      <div className="self-stretch px-[170px] py-[60px] bg-white">
        <div className="w-full flex-col justify-start items-start gap-[20px]">
          <div className="text-[#ff6868] text-[40px] font-bold">Real-time Updates</div>
          <div className="text-gray-600 text-base font-normal">
            Stay informed with real-time updates on your orders
          </div>
        </div>
        <div className="self-stretch py-5 flex-col justify-center items-center gap-8">
          <div className="w-full p-4 rounded-lg border border-green-200 bg-green-50 flex gap-4 items-start">
            <Image
              src="/tick.jpg"
              alt="Delivered Order"
              width={100}
              height={100}
              className="rounded-full border border-green-400"
            />
            <div className="flex-col gap-2">
              <div className="text-xl font-medium text-green-700">Order #1234</div>
              <div className="text-base text-gray-700">
                Your order has been delivered successfully.
              </div>
            </div>
          </div>
          <div className="w-full p-4 rounded-lg border border-yellow-200 bg-yellow-50 flex gap-4 items-start">
            <Image
              src="/waiting.png"
              alt="In Transit Order"
              width={100}
              height={100}
              className="rounded-full border border-yellow-400"
            />
            <div className="flex-col gap-2">
              <div className="text-xl font-medium text-yellow-700">Order #5678</div>
              <div className="text-base text-gray-700">
                Your order is on its way and will arrive soon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
