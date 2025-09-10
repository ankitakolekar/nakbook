
import React from "react";
import logo from "../assets/images/logoImage.png";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-10 pb-6 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo & Contact */}
        <div>
          <img src={logo} alt="Nakshatra Book Depo" className="h-[80px]" />
          <p className="text-base font-medium mt-4">Got Questions? Call us!</p>
          <p className="text-3xl font-bold text-[#011E41]">0241 3590019</p>
          <div className="mt-4 flex items-center gap-2 text-blue-600 hover:text-[#051d38] font-medium cursor-pointer">
            <FaTelegramPlane size={20} />
            <span className="text-xl">Join us on Telegram</span>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2 text-2xl">Contact Info</h3>
          <p className="text-base text-gray-600">
            Nakshatra Books, Shani Chowk,
            <br />
            Ahmednagar, Maharashtra 414001
          </p>
          <p className="text-base text-gray-600 mt-2">
            Monday – Friday: 9:30am – 9:00pm
          </p>
          <p className="mt-2 text-base font-medium">help@nakbook.com</p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Explore</h3>
          <ul className="space-y-1 text-base text-gray-600">
            <li className="hover:text-blue-800 cursor-pointer">Bookshelf</li>
            <li className="hover:text-blue-800 cursor-pointer">My Account</li>
            <li className="hover:text-blue-800 cursor-pointer">My Orders</li>
            <li className="hover:text-blue-800 cursor-pointer">Track Product</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Help & Info</h3>
          <ul className="space-y-1 text-base text-gray-600">
            <li className="hover:text-blue-800 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-800 cursor-pointer">Terms Of Service</li>
            <li className="hover:text-blue-800 cursor-pointer">Shipping & Return</li>
            <li className="hover:text-blue-800 cursor-pointer">Help & Support</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Categories</h3>
          <ul className="space-y-1 text-base text-gray-600">
            <li className="hover:text-blue-800 cursor-pointer">Marathi Grammar</li>
            <li className="hover:text-blue-800 cursor-pointer">English Grammar</li>
            <li className="hover:text-blue-800 cursor-pointer">Buddhimatta</li>
            <li className="hover:text-blue-800 cursor-pointer">View more...</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Nakshatra Book Depo. Crafted & Cared by{" "}
        <span className="text-blue-700 font-semibold">Neo Tech</span>.
      </div>
    </footer>
  );
}

export default Footer;
