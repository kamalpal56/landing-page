import React, { useState, useEffect } from "react";

export default function TradingSection() {
  const [activeTab, setActiveTab] = useState("pc");
  const [screenSize, setScreenSize] = useState("desktop"); // 'desktop', 'tablet', 'mobile'

  // Detect screen size for theme & image
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("desktop");
      } else if (window.innerWidth >= 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Content for PC & Web tabs
  const content = {
    pc: {
      title: "MetaTrader for PC – The #1 tool for traders worldwide",
      description:
        "Download MetaTrader for Windows and trade in 500+ instruments including Forex pairs, CFDs on indices, commodities, shares and ETFs.",
      button: "🪟 GET METATRADER FOR PC",
      image:
        screenSize === "desktop"
          ? "https://dynamic-images.admiralmarkets.com/900x,webp/static-images.admiralmarkets.com/data/homepage/tab-1.png"
          : screenSize === "tablet"
          ? "https://dynamic-images.admiralmarkets.com/600x,webp/static-images.admiralmarkets.com/data/homepage/tab-1.png"
          : "/images/metatrader-pc-light.png", // Mobile fallback
    },
    web: {
      title: "MetaTrader Web Trader – Trade instantly in your browser",
      description:
        "Access MetaTrader directly from your browser with no download required. Trade safely and securely on any device, anywhere.",
      button: "🌐 START WEB TRADER",
      image:
        screenSize === "desktop"
          ? "/images/metatrader-web-dark.png"
          : "/images/metatrader-web-light.png",
    },
  };

  return (
    <section
      className={`
        w-full px-6 py-12 transition-colors duration-300
        ${screenSize === "desktop" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* -------- Left Text Section -------- */}
        <div className="flex-1 text-center lg:text-left">
          {/* Tabs */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-6">
            <button
              className={`pb-2 border-b-2 transition-colors ${
                activeTab === "pc"
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-500 hover:text-gray-800 lg:hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("pc")}
            >
              PC
            </button>
            <button
              className={`pb-2 border-b-2 transition-colors ${
                activeTab === "web"
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-500 hover:text-gray-800 lg:hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("web")}
            >
              WEB TRADER
            </button>
          </div>

          {/* Heading & Text */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {content[activeTab].title}
          </h2>
          <p className={`mb-6 ${screenSize === "desktop" ? "text-gray-300" : "text-gray-600"}`}>
            {content[activeTab].description}
          </p>

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold mx-auto lg:mx-0">
            {content[activeTab].button}
          </button>
        </div>

        {/* -------- Right Image Section -------- */}
        <div className="flex-1 flex justify-center">
          <img
            src={content[activeTab].image}
            alt={content[activeTab].title}
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
