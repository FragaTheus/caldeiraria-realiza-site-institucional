"use client";

import { Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const HomeServiceSwiper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        loop
        pagination={{ clickable: true }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default HomeServiceSwiper;
