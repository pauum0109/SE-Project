import Featured from '@/components/Featured';
import StaffDashboard from "@/components/StaffDashBoard";
import CustomerReviews from '@/components/Review';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <StaffDashboard />

      {/* Welcome Section */}
      <section className="w-full h-[520px] px-[170px] py-[60px] flex gap-[60px] items-center">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-[40px] font-bold leading-[48px]">
            Welcome to <span className="text-[#ff6868]">G</span>roup{' '}
            <span className="text-[#ff6868]">ATE</span>
          </h1>
          <p className="text-[#4a4a4a] text-base font-medium leading-7">
            Where each dish becomes memory and every moment is well-spent
          </p>
          <Link href="/menu">
            <button className="h-12 px-4 bg-[#ff6868] text-neutral-50 text-base font-medium rounded-lg">
              Order Now
            </button>
          </Link>
        </div>
        <div className="flex-1 relative">
          <div className="h-[400px]">
            <Image
              src="/temporary/food.jpg"
              alt="food"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Featured />

      {/* About Us Section */}
      <section className="w-full h-auto px-[170px] py-[60px] flex items-center gap-[60px]">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">
            About us
          </h2>
          <p className="text-black text-base font-normal font-['Outfit']">
            Welcome to <span className="text-[#ff6868]">G</span>roup{' '}
            <span className="text-[#ff6868]">ATE</span>—your gateway to delicious, hassle-free
            dining! Our platform connects food lovers with top local restaurants, offering a
            seamless way to get food delivery...
          </p>
        </div>
        <div className="flex-1">
          <div className="h-[400px] relative bg-[#d8d8d8]/50">
            <Image
              src="/temporary/eat.jfif"
              alt="Placeholder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CustomerReviews />
    </main>
  );
}
