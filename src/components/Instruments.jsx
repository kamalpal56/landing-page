// src/components/Instruments.jsx
export default function Instruments() {
  const instruments = [
    {
      title: "Forex",
      desc: "80 CFDs on currency pairs",
      icon: "💱", // replace with svg if needed
    },
    {
      title: "Indices",
      desc: "12 Index CFDs, including cash CFDs and Index Futures",
      icon: "📊",
    },
    {
      title: "Commodities",
      desc: "5 CFDs on precious metals and energies",
      icon: "🌱",
    },
    {
      title: "ETFs",
      desc: "25 most prominent ETFs available via CFDs",
      icon: "📈",
    },
    {
      title: "Stocks",
      desc: "500+ CFDs on global blue-chip stocks",
      icon: "📜",
    },
    {
      title: "Cryptocurrencies",
      desc: "CFDs on Bitcoin, Dash, Ether, Litecoin and more",
      icon: "₿",
    },
  ];

  return (
    <section className="relative bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trade 2500+ instruments
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instruments.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="text-4xl text-blue-500">{item.icon}</div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Chat Button */}
      <button className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        💬 Live chat
      </button>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-100"
      >
        ↑
      </button>
    </section>
  );
}
