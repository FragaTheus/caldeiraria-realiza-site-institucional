import {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInWithIndex,
} from "@/shared/components/animate";
import { AppCard } from "@/shared/components/ui/app-card";
import { AppH2 } from "@/shared/components/ui/app-h2";
import { AppP } from "@/shared/components/ui/app-p";
import React from "react";
import Badges, { BadgesProps } from "../component/services-badges";
import Image, { StaticImageData } from "next/image";

interface ServicesLayoutProps {
  title: string;
  description: string;
  badges: BadgesProps[];
  Icon: React.ElementType;
  imgSrc: StaticImageData;
}

const ServicesLayout = ({
  title,
  Icon,
  description,
  imgSrc,
  badges,
}: ServicesLayoutProps) => {
  return (
    <div>
      <FadeInDown>
        <AppH2 className="mb-4">{title}</AppH2>
      </FadeInDown>
      <AppCard className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-last lg:order-first flex items-start flex-col justify-evenly">
          <FadeInDown>
            <Icon className="text-primary size-8" />
          </FadeInDown>
          <FadeInLeft>
            <AppP className="lg:max-w-3/4 mt-4">{description}</AppP>
          </FadeInLeft>
          <div className="mt-4">
            {badges.map((badge, index) => (
              <FadeInWithIndex key={index} index={index}>
                <Badges {...badge} />
              </FadeInWithIndex>
            ))}
          </div>
        </div>
        <FadeIn>
          <Image
            src={imgSrc}
            alt="Imagem"
            className="w-full h-full order-first lg:order-last max-h-50 lg:max-h-80 rounded-sm object-cover"
          />
        </FadeIn>
      </AppCard>
    </div>
  );
};

export default ServicesLayout;
