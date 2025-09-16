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


import React from "react";
import banner_one from "../assets/images/banner_one.jpg";
import banner_two from "../assets/images/banner_two.png";
import banner_three from "../assets/images/banner_three.jpg";

function BannerCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-white">
      {/* Left Side - Two Cards */}
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
          <img src={banner_one} alt="banner one" className="rounded-md w-full object-cover" />
        </div>
        <div className="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
          <img src={banner_two} alt="banner two" className="rounded-md w-full object-cover" />
        </div>
      </div>

      {/* Right Side - Single Card */}
      <div className="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
        <img src={banner_three} alt="banner three" className="rounded-md w-full object-cover" />
      </div>
    </div>
  );
}

export default BannerCards;
