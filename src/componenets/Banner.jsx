import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import sliderone from "../assets/images/sliderone.jpg";
import slidertwo from "../assets/images/slidertwo.jpeg";
import sliderthree from "../assets/images/sliderthree.png";

function Banner() {
  return (
    <>
      {/* 🔹 Slider Section */}
      <div className="w-full max-w-full overflow-hidden mb-6">
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
                className="w-full h-auto object-cover rounded-lg"
                alt="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slidertwo}
                className="w-full h-auto object-cover rounded-lg"
                alt="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderthree}
                className="w-full h-auto object-cover rounded-lg"
                alt="slider"
              />
            </SwiperSlide>
          </Swiper>
        </a>
      </div>
    </>
  );
}

export default Banner;
