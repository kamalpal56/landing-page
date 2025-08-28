import React from "react";
import Slider from "react-slick";
import { Shield, Briefcase, Plus } from "lucide-react"; // Correct icon

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChoose = () => {
  const data = [
    {
      icon: <Plus className="w-12 h-12 text-blue-600" />, // Bigger icon like in screenshot
      title: "Support at Your Fingertips",
      text: "Get personalized support with multilingual assistance via phone, email, and live chat.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Funds are secured",
      text: "All client deposits are kept separate from our own operating funds. Client money is held in designated client bank accounts, ensuring it is protected and segregated from our own funds.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-600" />,
      title: "Start from $25",
      text: "You can start trading from $25.",
      link: "START NOW →",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Why choose Admirals?</h2>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-6">{item.title}</h3>
            <p className="text-gray-500 mt-4 leading-relaxed">{item.text}</p>
            {item.link && (
              <a href="#" className="text-green-600 font-semibold mt-6 inline-block">
                {item.link}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i} className="px-4">
              <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center text-center border border-gray-100">
                {item.icon}
                <h3 className="text-xl font-semibold mt-6">{item.title}</h3>
                <p className="text-gray-500 mt-4 leading-relaxed">{item.text}</p>
                {item.link && (
                  <a href="#" className="text-green-600 font-semibold mt-6 inline-block">
                    {item.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChoose;
