import React, { useState, useEffect } from "react";
import banner_one from "../assets/images/banner_one.jpg";

function BannerCards() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div className="flex justify-center items-center p-3 sm:p-6 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl">
        {/* Daily Deal Sticker */}
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-br from-red-500 to-orange-600 text-black rounded-full w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg transform rotate-12">
          <div className="text-center -rotate-12">
            <p className="text-[8px] sm:text-[10px] font-bold uppercase">Daily</p>
            <p className="text-sm sm:text-lg font-extrabold leading-none">Deal</p>
          </div>
        </div>

        {/* Main Layout — stays side-by-side even on mobile */}
        <div className="flex flex-row items-stretch">
          {/* Left Side - Book Image */}
          <div className="w-[45%] sm:w-2/5 bg-gradient-to-br from-purple-100 to-blue-100 p-2 sm:p-6 flex items-center justify-center">
            <img
              src={banner_one}
              alt="Featured Book"
              className="rounded-lg shadow-xl w-full h-auto object-contain max-h-48 sm:max-h-80 transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side - Book Details */}
          <div className="w-[55%] sm:w-3/5 p-3 sm:p-8 flex flex-col justify-center space-y-3 sm:space-y-4">
            {/* Title */}
            <h2 className="text-xl sm:text-4xl font-bold text-gray-800 leading-tight">
              The Great Adventure
            </h2>

            {/* Price Section */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-lg sm:text-3xl font-bold text-orange-600">
                Rs.19.99
              </span>
              <span className="text-base sm:text-xl text-gray-400 line-through">
                Rs.99.99
              </span>
              <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                50% OFF
              </span>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-3 h-3 sm:w-5 sm:h-5 ${
                      index < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">
                (4.0) 1,234 reviews
              </span>
            </div>

            {/* Timer */}
            <div className="border-t pt-2 sm:pt-4 mt-2 sm:mt-4">
              <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 font-medium">
                Offer ends in:
              </p>
              <div className="flex items-center gap-1 sm:gap-3 flex-wrap">
                {["hours", "minutes", "seconds"].map((unit, i) => (
                  <div key={i} className="flex items-center gap-1 sm:gap-2">
                    <div className="bg-gray-800 text-white px-2 sm:px-4 py-1 sm:py-3 rounded-lg text-center min-w-[45px] sm:min-w-[60px]">
                      <div className="text-base sm:text-2xl font-bold">
                        {formatTime(timeLeft[unit])}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 capitalize">
                        {unit}
                      </div>
                    </div>
                    {i < 2 && (
                      <div className="text-base sm:text-2xl font-bold text-gray-600">
                        :
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCards;
