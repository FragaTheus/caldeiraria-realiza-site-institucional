import { AppCard } from "@/shared/components/ui/app-card";
import { AppP } from "@/shared/components/ui/app-p";
import Image, { StaticImageData } from "next/image";

export interface ServiceCardProps {
  title: string;
  imageSrc?: StaticImageData;
  videoSrc?: string;
}

const ServiceCard = ({ title, imageSrc, videoSrc }: ServiceCardProps) => {
  return (
    <AppCard>
      <AppP className="font-semibold! mb-4">{title}</AppP>
      <div className="bg-muted-light w-full aspect-9/16 flex">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            className="object-cover object-[30%_50%]"
            loading="lazy"
          />
        )}
        {videoSrc && (
          <video className="object-cover" autoPlay loop muted preload="auto">
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
    </AppCard>
  );
};

export default ServiceCard;
