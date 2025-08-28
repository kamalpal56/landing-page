import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="w-full flex justify-between items-center px-4 md:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-[#0B1F3A]">admirals</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-gray-800 font-medium">
          <li><a href="#open" className="hover:text-blue-600">Open account</a></li>
          <li><a href="#platforms" className="hover:text-blue-600">Platforms</a></li>
          <li><a href="#products" className="hover:text-blue-600">Products</a></li>
          <li><a href="#education" className="hover:text-blue-600">Education</a></li>
          <li><a href="#analytics" className="hover:text-blue-600">Analytics</a></li>
          <li><a href="#about" className="hover:text-blue-600">About us</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact us</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Globe className="w-5 h-5 text-gray-700" />
          <button className="hidden md:inline text-gray-800 font-medium">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Register</button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-gray-800 font-medium">
            <li><a href="#open" className="hover:text-blue-600">Open account</a></li>
            <li><a href="#platforms" className="hover:text-blue-600">Platforms</a></li>
            <li><a href="#products" className="hover:text-blue-600">Products</a></li>
            <li><a href="#education" className="hover:text-blue-600">Education</a></li>
            <li><a href="#analytics" className="hover:text-blue-600">Analytics</a></li>
            <li><a href="#about" className="hover:text-blue-600">About us</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact us</a></li>
            <li className="border-t pt-4">
              <button className="text-gray-800 font-medium">Login</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
