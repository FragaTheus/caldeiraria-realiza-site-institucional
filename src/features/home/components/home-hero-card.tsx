"use client";

import {
  AnimateCta,
  AnimateDescription,
  AnimateHeadline,
  FadeInAnimate,
  AnimateTitle,
} from "@/features/home/animate/home-hero-animate";
import Line from "@/shared/components/line";
import HomeServiceSwiper from "@/shared/components/swiper";
import { CtaButton } from "@/shared/components/ui/app-button";
import Image, { StaticImageData } from "next/image";
import { MdPhone } from "react-icons/md";
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
      <div className="flex flex-col lg:mr-20 order-last lg:order-first">
        <AnimateHeadline>
          <small className="text-primary">{headline}</small>
        </AnimateHeadline>
        <div className="flex flex-col flex-1 items-center justify-evenly">
          <AnimateTitle>
            <h1 className="mt-6 md:mt-12">{title}</h1>
          </AnimateTitle>
          <Line className="mt-2 lg:mt-4" />
          <AnimateDescription>
            <p className="pr-20 mt-6">{description}</p>
          </AnimateDescription>
        </div>
        <AnimateCta>
          <CtaButton className="bg-primary lg:w-1/2 hover:bg-primary/80 mt-6 lg:mt-12">
            <MdPhone className="size-6" />
            <span>Entrar em contato</span>
          </CtaButton>
        </AnimateCta>
      </div>

      <FadeInAnimate>
        <div className="flex flex-col order-first lg:order-last">
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
      </FadeInAnimate>
    </article>
  );
};

export default AppHeroCard;
