// src/components/Footer.jsx
import React from "react";
import {
  Youtube,
  Linkedin,
  Instagram,
  Send,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <Youtube className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <Linkedin className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <Instagram className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <Send className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <Twitter className="w-5 h-5 text-gray-600" />
          </a>
        </div>

        {/* Footer Links - Hidden on small screens */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold mb-3">Platforms</h4>
            <ul className="space-y-2">
              <li><a href="#">Admirals Platform</a></li>
              <li><a href="#">MetaTrader WebTrader</a></li>
              <li><a href="#">Admirals Mobile App</a></li>
              <li><a href="#">MetaTrader Supreme Edition</a></li>
              <li><a href="#">StereoTrader</a></li>
              <li><a href="#">VPS</a></li>
              <li><a href="#">Parallels for MAC</a></li>
              <li><a href="#">MetaTrader 4</a></li>
              <li><a href="#">MetaTrader 5</a></li>
              <li><a href="#">Asset Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Education</h4>
            <ul className="space-y-2">
              <li><a href="#">Forex & CFD Webinars</a></li>
              <li><a href="#">Articles & Tutorials</a></li>
              <li><a href="#">Trading Videos</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">E-books</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              <li><a href="#">Forex</a></li>
              <li><a href="#">Commodities</a></li>
              <li><a href="#">Indices</a></li>
              <li><a href="#">Stocks</a></li>
              <li><a href="#">ETFs</a></li>
              <li><a href="#">Cryptocurrencies</a></li>
              <li><a href="#">Margin Requirements</a></li>
              <li><a href="#">Contract Specifications</a></li>
              <li><a href="#">Fractional Investing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">About us</h4>
            <ul className="space-y-2">
              <li><a href="#">Leadership & Experts</a></li>
              <li><a href="#">Financial Security</a></li>
              <li><a href="#">Secure your trading account</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Company News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Analytics</h4>
            <ul className="space-y-2">
              <li><a href="#">Macroscope</a></li>
              <li><a href="#">Trading News</a></li>
              <li><a href="#">Research Terminal</a></li>
              <li><a href="#">Forex Calendar</a></li>
            </ul>
            <h4 className="font-semibold mt-6 mb-3">Contact us</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
