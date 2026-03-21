"use client";

import { SwiperSlide } from "swiper/react";
import HomeServiceSwiper from "../components/swiper";
import {
  ServicesCard,
  ServicesCardProps,
} from "../components/services-content";

interface HomeServiceMobileWrapperProps {
  cards: ServicesCardProps[];
}

const HomeServiceMobileWrapper = ({ cards }: HomeServiceMobileWrapperProps) => {
  return (
    <HomeServiceSwiper>
      {cards.map((c, i) => (
        <SwiperSlide key={i} className="p-4">
          <ServicesCard {...c} />
        </SwiperSlide>
      ))}
    </HomeServiceSwiper>
  );
};

export default HomeServiceMobileWrapper;
