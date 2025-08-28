// src/components/HeroTrade.jsx
import secondPageImage from '../assets/images/second-page-image.png'; // <-- Import the image

export default function HeroTrade() {
  return (
    <section className="relative bg-black min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-gray-300 text-lg">Great news for traders!</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Trade CFD with 0 <br /> swap fees
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-lg">
            Experience the freedom of trading without swaps on the most 
            sought-after currency pairs, precious metals, and index CFDs! 
            Enjoy a seamless trading experience that allows you to maximise 
            your potential without the burden of overnight fees.*
          </p>

          <button className="mt-8 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg transition">
            Start Trading
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex justify-center items-center">
          <img
            src={secondPageImage}  // <-- Local image used here
            alt="Trading Banner"
            className="w-[80%] md:w-full object-contain"
          />
        </div>
      </div>

      {/* Live Chat Button */}
      <button className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        💬 Live chat
      </button>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-100"
      >
        ↑
      </button>
    </section>
  );
}
