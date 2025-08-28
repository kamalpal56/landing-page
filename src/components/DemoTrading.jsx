import React from "react";
import { Smile, Wallet, CreditCard } from "lucide-react";

const DemoTrading = () => {
  return (
    <section className="bg-[#F7F9FB] py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try demo trading
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
            Not sure how to start? We&apos;ve got you! Start practicing trading with
            virtual funds on the Admirals demo trading account.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition">
            TRY FREE ON DEMO
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Large responsive image */}
          <img
            src="https://dynamic-images.admiralmarkets.com/2560x,webp/static-images.admiralmarkets.com/images/elements/try-demo.png"
            alt="Try demo trading"
            className="
              w-full max-w-[700px]
              h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]
              object-cover rounded-xl
            "
          />

          {/* Floating cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            
            {/* Center card */}
            <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center w-40 h-36 z-20">
              <Wallet className="w-8 h-8 text-green-600 mb-2" />
              <p className="text-gray-700 text-sm">No deposit</p>
            </div>

            {/* Left card */}
            <div className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center text-center w-32 h-28 absolute -left-36 top-4 z-10">
              <Smile className="w-7 h-7 text-green-600 mb-2" />
              <p className="text-gray-700 text-sm">No stress</p>
            </div>

            {/* Right card */}
            <div className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center text-center w-32 h-28 absolute -right-36 top-4 z-10">
              <CreditCard className="w-7 h-7 text-green-600 mb-2" />
              <p className="text-gray-700 text-sm">No credit card</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTrading;
