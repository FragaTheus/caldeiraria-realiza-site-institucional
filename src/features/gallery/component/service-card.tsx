import dynamic from "next/dynamic";
import { AppCard } from "@/shared/components/ui/app-card";
import { AppP } from "@/shared/components/ui/app-p";
import { StaticImageData } from "next/image";

const AppOptimizedImage = dynamic(
  () => import("@/shared/components/ui/app-optimized-image"),
);

export interface ServiceCardProps {
  title: string;
  imageSrc?: StaticImageData;
  videoSrc?: string;
  className?: string;
  imgClassName?: string;
}

const ServiceCard = ({
  title,
  imageSrc,
  videoSrc,
  imgClassName,
}: ServiceCardProps) => {
  return (
    <AppCard>
      <AppP className="font-semibold! mb-4">{title}</AppP>
      <div className="bg-muted-light w-full aspect-9/16 flex relative overflow-hidden">
        {imageSrc && (
          <AppOptimizedImage
            src={imageSrc}
            alt={title}
            fill
            className={`object-cover object-[30%_50%] ${imgClassName}`}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            quality={70}
          />
        )}
        {videoSrc && (
          <video
            className="object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
    </AppCard>
  );
};

export default ServiceCard;
