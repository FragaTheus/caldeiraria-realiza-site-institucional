"use client";

import "swiper/css";
import { SwiperSlide } from "swiper/react";
import {
  ServicesCard,
  ServicesCardProps,
} from "../../components/services-cards";
import HomeServiceSwiper from "@/shared/components/swiper";
import { FadeInWithIndex } from "@/shared/components/animate";

interface HomeServiceMobileWrapperProps {
  cards: ServicesCardProps[];
}

const HomeServiceMobileWrapper = ({ cards }: HomeServiceMobileWrapperProps) => {
  return (
    <HomeServiceSwiper>
      {cards.map((c, i) => (
        <SwiperSlide key={i} className="p-4">
          <FadeInWithIndex index={i}>
            <ServicesCard {...c} />
          </FadeInWithIndex>
        </SwiperSlide>
      ))}
    </HomeServiceSwiper>
  );
};

export default HomeServiceMobileWrapper;
