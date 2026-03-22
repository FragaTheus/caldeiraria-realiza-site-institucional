"use client";

import { SwiperSlide } from "swiper/react";
import {
  ServicesCard,
  ServicesCardProps,
} from "../../components/services-cards";
import HomeServiceSwiper from "../../components/swiper";

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
