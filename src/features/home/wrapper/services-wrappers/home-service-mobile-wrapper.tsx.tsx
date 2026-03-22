"use client";

import { SwiperSlide } from "swiper/react";
import {
  ServicesCard,
  ServicesCardProps,
} from "../../components/services-cards";
import HomeServiceSwiper from "@/shared/components/swiper";
import AnimateCard from "../../animate/home-services-animate";

interface HomeServiceMobileWrapperProps {
  cards: ServicesCardProps[];
}

const HomeServiceMobileWrapper = ({ cards }: HomeServiceMobileWrapperProps) => {
  return (
    <HomeServiceSwiper>
      {cards.map((c, i) => (
        <SwiperSlide key={i} className="p-4">
          <AnimateCard index={i}>
            <ServicesCard {...c} />
          </AnimateCard>
        </SwiperSlide>
      ))}
    </HomeServiceSwiper>
  );
};

export default HomeServiceMobileWrapper;
