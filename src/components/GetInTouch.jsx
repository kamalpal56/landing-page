// src/components/GetInTouch.jsx
import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Side: Image */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <img
            src="https://dynamic-images.admiralmarkets.com/670x,webp/static-images.admiralmarkets.com/data/homepage/flat-phone-new.png"
            alt="Phone mockup"
            className="w-full max-w-lg md:max-w-xl drop-shadow-xl"
            style={{ height: "450px", objectFit: "contain" }} // Increased height
          />
        </div>

        {/* Right Side: Text */}
        <div className="text-center md:text-left order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            More questions? Contact us today!
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
