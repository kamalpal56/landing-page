// src/components/HeroSection.jsx
import firstPageImage from '../assets/images/first-page-image.png';
export default function HeroSection() {
  return (
    <section className="relative bg-[#f5f9ff] min-h-[90vh] flex items-center justify-center px-2">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Big Zero with Wave */}
        <div className="relative flex justify-center items-center">
          <div className="text-[25rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-200 select-none">
            0
          </div>
          <img
            src={firstPageImage} // replace with your wave image path
            
            className="absolute bottom-0 left-0 w-[100%] h-[100%] pointer-events-none"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Commission-Free <br /> Global Stock Markets
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Invest in a diverse range of stocks and ETFs from the US, EU, and UK
            markets without having to worry about commission fees. This means you
            can maximise your investment potential while keeping your costs low,
            allowing you to build a robust portfolio with ease.*
          </p>

          <button className="mt-8 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg transition">
            Start Investing
          </button>
        </div>
      </div>

      {/* Live Chat Button (Fixed at bottom-right) */}
      <button className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        💬 Live chat
      </button>
    </section>
  );
}
