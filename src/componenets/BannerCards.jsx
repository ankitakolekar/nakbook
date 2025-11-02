// import React from 'react'
// import banner_one from "../assets/images/banner_one.jpg";
// import banner_two from "../assets/images/banner_two.png";
// import banner_three from "../assets/images/banner_three.jpg";

// function BannerCards () {
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-white">
//     {/* Left Side - Two Cards */}
//     <div className="flex flex-col sm:flex-row gap-6">
//       <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
//         <img src={banner_one} alt="banner one" className="rounded-md w-full object-cover" />
//       </div>
//       <div className="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
//         <img src={banner_two} alt="banner two" className="rounded-md w-full object-cover" />
//       </div>
//     </div>

//     {/* Right Side - Single Card */}
//     <div className="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
//       <img src={banner_three} alt="banner three" className="rounded-md w-full object-cover" />
//     </div>
//   </div>
//   )
// }

// export default BannerCards 


import React, { useState, useEffect } from "react";
import banner_one from "../assets/images/banner_one.jpg";

function BannerCards() {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours when timer reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time to always show 2 digits
  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-r from-orange-50 to-yellow-50">
      {/* Offer Banner Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Daily Deal Sticker */}
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg transform rotate-12">
          <div className="text-center -rotate-12">
            <p className="text-xs font-bold uppercase">Daily</p>
            <p className="text-lg font-extrabold leading-none">Deal</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Side - Book Image */}
          <div className="md:w-2/5 bg-gradient-to-br from-purple-100 to-blue-100 p-8 flex items-center justify-center">
            <div className="relative">
              <img 
                src={banner_one} 
                alt="Featured Book" 
                className="rounded-lg shadow-xl max-h-80 object-contain transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>

          {/* Right Side - Book Details */}
          <div className="md:w-3/5 p-8 flex flex-col justify-center space-y-4">
            {/* Book Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              The Great Adventure
            </h2>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-orange-600">Rs.19.99</span>
              <span className="text-xl text-gray-400 line-through">Rs.99.99</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                50% OFF
              </span>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">(4.0) 1,234 reviews</span>
            </div>

            {/* Learn More Button */}
            <div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </div>

            {/* Timer */}
            <div className="border-t pt-4 mt-4">
              <p className="text-gray-600 text-sm mb-2 font-medium">Offer ends in:</p>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="bg-gray-800 text-white px-4 py-3 rounded-lg text-center min-w-[60px]">
                    <div className="text-2xl font-bold">{formatTime(timeLeft.hours)}</div>
                    <div className="text-xs text-gray-400">Hours</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-600 flex items-center">:</div>
                  <div className="bg-gray-800 text-white px-4 py-3 rounded-lg text-center min-w-[60px]">
                    <div className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</div>
                    <div className="text-xs text-gray-400">Minutes</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-600 flex items-center">:</div>
                  <div className="bg-gray-800 text-white px-4 py-3 rounded-lg text-center min-w-[60px]">
                    <div className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</div>
                    <div className="text-xs text-gray-400">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCards;
