import Image from "next/image";

const OrderHistory = () => {
  return (
    <div className="w-full h-[1336px] bg-white flex-col justify-start items-center inline-flex">
      {/* Header Section */}
      <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[30px] inline-flex">
        <div className="w-full flex-col justify-start items-center gap-6 inline-flex">
          <div className="text-black text-[40px] font-bold leading-[48px]">
            Order History Tracking
          </div>
          <div className="w-[407px] text-center text-black text-base font-normal leading-normal">
            View and track all your past orders
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[30px] inline-flex">
        <div className="w-[300px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch text-black text-[40px] font-bold leading-[50px]">
            Recent Orders
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-center gap-5 inline-flex ">
          <div className="self-stretch justify-start items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
              <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex ">
                <div className="self-stretch text-center text-black text-xl font-normal leading-7">
                  Order #1234
                </div>
                <div className="self-stretch text-center text-black/50 text-base font-normal leading-normal">
                  Delivered
                </div>
              </div>
              <div className="self-stretch text-center text-black text-[28px] font-medium leading-9">
                2022-01-15
              </div>
            </div>
            <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-5 inline-flex">
              <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-center text-black text-xl font-normal leading-7">
                  Order #5678
                </div>
                <div className="self-stretch text-center text-black/50 text-base font-normal leading-normal">
                  In Transit
                </div>
              </div>
              <div className="self-stretch text-center text-black text-[28px] font-medium leading-9">
                2022-02-03
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Updates Section */}
      <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[30px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-center items-center gap-[10px] inline-flex">
          <div className="self-stretch h-24 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-black text-[40px] font-bold leading-[48px]">
              Real-time Updates
            </div>
            <div className="self-stretch text-black text-base font-normal leading-normal">
              Stay informed with real-time updates on your orders
            </div>
          </div>
          <div className="self-stretch h-[344px] py-5 flex-col justify-center items-center gap-8 flex">
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[132px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
                <div className="w-[100px] h-[100px] justify-start items-start flex">
                  <div className="h-[100px] relative bg-[#d8d8d8]/50">
                    <Image
                      className="w-[100px] h-[100px]"
                      src="/tick.jpg"
                      alt="order image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-black text-xl font-medium leading-7">
                    Order #1234
                  </div>
                  <div className="self-stretch text-black text-base font-normal leading-normal">
                    Your order has been delivered successfully.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[132px] p-4 rounded-md border border-black/10 justify-center items-start gap-4 flex">
                <div className="w-[100px] h-[100px] justify-start items-start flex">
                  <div className="h-[100px] relative bg-[#d8d8d8]/50">
                    <Image
                      className="w-[100px] h-[100px]"
                      src="/waiting.png"
                      alt="order image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-black text-xl font-medium leading-7">
                    Order #5678
                  </div>
                  <div className="self-stretch text-black text-base font-normal leading-normal">
                    Your order is on its way and will arrive soon.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
