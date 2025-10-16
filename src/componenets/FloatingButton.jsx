import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Floating Menu (WhatsApp + Call) */}
      {isOpen && (
        <div className="flex flex-col mb-3 space-y-3 animate-fadeIn">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
          >
            <FaWhatsapp className="text-2xl" />
          </a>

          {/* Call */}
          <a
            href="tel:+919876543210" // Replace with your phone number
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <FaPhoneAlt className="text-2xl" />
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 flex items-center justify-center"
      >
        <FaCommentDots className="text-2xl" />
      </button>
    </div>
  );
}

export default FloatingButton;