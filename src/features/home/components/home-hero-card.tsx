"use client";

import Line from "@/shared/components/line";
import HomeServiceSwiper from "@/shared/components/swiper";
import Image, { StaticImageData } from "next/image";
import { SwiperSlide } from "swiper/react";

interface AppHeroCardProps {
  headline: string;
  title: string;
  description: string;
  cardDescription?: string;
  imageSrc: StaticImageData[];
}

const AppHeroCard = ({
  headline,
  title,
  description,
  cardDescription,
  imageSrc,
}: AppHeroCardProps) => {
  return (
    <article className="w-full rounded-md grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 bg-surface gap-4">
      <div className="flex flex-col lg:mr-20">
        <small className="text-primary">{headline}</small>
        <div className="flex flex-col flex-1 items-center justify-evenly">
          <h1 className="mt-6 md:mt-12">{title}</h1>
          <Line width={"100%"} />
          <p className="pr-20 mt-4">{description}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <HomeServiceSwiper>
          {imageSrc.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={title}
                className="max-h-40 md:max-h-80 rounded-sm object-cover object-[50%_40%]"
                priority
              />
            </SwiperSlide>
          ))}
        </HomeServiceSwiper>
        <small className="text-muted-light mt-2 m-auto text-center hidden lg:inline">
          {cardDescription}
        </small>
      </div>
    </article>
  );
};

export default AppHeroCard;
