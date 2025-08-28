// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; // optional but safe
// import '../assets/styles/Bannerstyles.css';
// import { Pagination, Autoplay } from 'swiper/modules'; // import required modules


// import sliderone from '../assets/images/sliderone.jpg';
// import slidertwo from '../assets/images/slidertwo.jpeg';
// import sliderthree from '../assets/images/sliderthree.png';
// import banner_one from '../assets/images/banner_one.jpg';
// import banner_two from '../assets/images/banner_two.png';
// import banner_three from '../assets/images/banner_three.jpg';

// function Banner() {
//   return (
//     <>
//     <div className="h-[475px] mt-[]">
//       <a href="https://www.nakbook.com/product-category/vanrakshak/" tabindex="0">
//       <Swiper
//         loop={true}
//         speed={1000} // 💡 1000ms = 1s smooth transition
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={sliderone}/></SwiperSlide>
//         <SwiperSlide><img src={slidertwo}/></SwiperSlide>
//         <SwiperSlide><img src={sliderthree}/></SwiperSlide>
//         <SwiperSlide><img src={sliderone}/></SwiperSlide>
//         <SwiperSlide><img src={slidertwo}/></SwiperSlide>
//         <SwiperSlide><img src={sliderthree}/></SwiperSlide>
//         <SwiperSlide><img src={sliderone}/></SwiperSlide>
//         <SwiperSlide><img src={slidertwo}/></SwiperSlide>
//         <SwiperSlide><img src={sliderthree}/></SwiperSlide>
//       </Swiper>
//       </a>
//     </div>

//     <div class="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-white">
//         <div className="flex">
//         {/* <!-- Card 1 --> */}
//         <div class="bg-white rounded-xl shadow-md p-4 w-full max-w-md flex items-center gap-4">
//           <img src={banner_one}/>
//         </div>

//         {/* <!-- Card 2 --> */}
//         <div class="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full max-w-md flex items-center gap-4">
//           <img src={banner_two}/>
//         </div>
//         </div>

//         <div className="">
//           <div class="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full max-w-md flex items-center gap-4">
//           <img src={banner_three}/>
//         </div>
//         </div>
//     </div>

//     </>
//   );
// }

// export default Banner;
 

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import sliderone from "../assets/images/sliderone.jpg";
import slidertwo from "../assets/images/slidertwo.jpeg";
import sliderthree from "../assets/images/sliderthree.png";
import banner_one from "../assets/images/banner_one.jpg";
import banner_two from "../assets/images/banner_two.png";
import banner_three from "../assets/images/banner_three.jpg";

function Banner() {
  return (
    <>
      {/* 🔹 Slider Section */}
      <div className="h-[250px] sm:h-[350px] md:h-[475px] w-full">
        <a
          href="https://www.nakbook.com/product-category/vanrakshak/"
          tabIndex={0}
        >
          <Swiper
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src={sliderone}
                className="w-full h-full object-cover rounded-lg"
                alt="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slidertwo}
                className="w-full h-full object-cover rounded-lg"
                alt="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderthree}
                className="w-full h-full object-cover rounded-lg"
                alt="slider"
              />
            </SwiperSlide>
          </Swiper>
        </a>
      </div>

      {/* 🔹 Banner Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-white">
        {/* Left Side - Two Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
            <img
              src={banner_one}
              alt="banner one"
              className="rounded-md w-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
            <img
              src={banner_two}
              alt="banner two"
              className="rounded-md w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Single Card */}
        <div className="bg-[#d2ecec] rounded-xl shadow-md p-4 w-full sm:w-[250px] flex items-center justify-center">
          <img
            src={banner_three}
            alt="banner three"
            className="rounded-md w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
