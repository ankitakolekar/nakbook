import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RequestBook() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // 👉 Replace with API or Firebase logic
    console.log("Form submitted");
  };

  const handleClose = () => {
    navigate("/"); // Redirect home (change if needed)
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/request-book-bg.jpg')", // update path
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 z-10">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Request a Book
        </h2>

        {submitted ? (
          <p className="text-green-600 font-medium text-center">
            ✅ Thank you! Your request has been submitted.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />

            <input
              type="text"
              placeholder="Book Name"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-full hover:bg-blue-800 transition font-semibold"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RequestBook;
