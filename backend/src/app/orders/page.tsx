"use client";

import { OrderType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const OrderHistory = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isPending, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success("The order status has been changed!");
  };

  if (isPending || status === "loading") return "Loading...";

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

      {/* Real-time Updates Section */}
      <div className="self-stretch px-[170px] py-[60px] bg-white">
        <div className="w-full flex-col justify-start items-start gap-[20px]">
          <div className="text-[#ff6868] text-[40px] font-bold">
            Real-time Updates
          </div>
          <div className="text-gray-600 text-base font-normal">
            Stay informed with real-time updates on your orders
          </div>
        </div>

        {data.map((item: OrderType) => (
          <div
            className="self-stretch py-5 flex-col justify-center items-center gap-8"
            key={item.id}
          >
            <div className="w-full p-4 rounded-lg border border-[#ff6868] bg-[#ff6868] flex gap-4 items-start">
              <div className="flex-col gap-2">
                <div className="text-xl font-medium text-white">{item.id}</div>
                <div className="text-base text-white">
                  Created date: {item.createdAt.toString().slice(0, 10)}
                </div>

                <div className="text-base text-white">
                  {item.products[0].title}
                </div>

                {session?.user.isAdmin ? (
                  <div>
                    <form
                      className="flex item-center justify-center gap-4 "
                      onSubmit={(e) => handleUpdate(e, item.id)}
                    >
                      <input
                        placeholder={item.status}
                        className="p-2 ring-1 ring-[#ff6868] rounded-md"
                      />
                      <button className="bg-[#ff6868] p-2 rounded-full">
                        <Image src="/edit.png" alt="" width={20} height={20} />
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-base text-white">{item.status}.</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
