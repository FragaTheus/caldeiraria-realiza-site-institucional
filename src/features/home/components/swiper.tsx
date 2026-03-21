"use client";

import { Swiper } from "swiper/react";
import "swiper/css";

const HomeServiceSwiper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default HomeServiceSwiper;
