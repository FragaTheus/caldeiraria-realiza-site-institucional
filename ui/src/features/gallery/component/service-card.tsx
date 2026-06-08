"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { AppCard } from "@/shared/components/ui/app-card";
import { AppP } from "@/shared/components/ui/app-p";
import { StaticImageData } from "next/image";

const AppOptimizedImage = dynamic(
  () => import("@/shared/components/ui/app-optimized-image"),
);

export interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: StaticImageData;
  videoSrc?: string;
  className?: string;
  imgClassName?: string;
}

const ServiceCard = ({
  title,
  description,
  imageSrc,
  videoSrc,
  className,
  imgClassName,
}: ServiceCardProps) => {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  return (
    <>
      <AppCard className={`w-full max-w-5xl mx-auto ${className ?? ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 md:gap-6">
          <div className="grid gap-2 content-start w-full">
            <AppP className="font-bold!">{title}</AppP>
            <AppP>{description}</AppP>
          </div>

          <div className="grid w-full place-items-center">
            <button
              type="button"
              onClick={() => setIsFullscreenOpen(true)}
              className="relative rounded-sm w-full max-w-xs h-72 max-h-80 sm:max-w-sm sm:h-80 md:max-w-md md:h-96 overflow-hidden cursor-zoom-in"
              aria-label={`Abrir mídia em tela cheia: ${title}`}
            >
              <div className="absolute bg-white borders border-muted shadow-md rounded-sm bottom-1 left-1/2 -translate-x-1/2 p-2 text-xs z-40">
                Clique para ver mais
              </div>
              {imageSrc && (
                <AppOptimizedImage
                  src={imageSrc}
                  alt={title}
                  fill
                  className={`object-contain ${imgClassName}`}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={70}
                />
              )}
              {videoSrc && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              )}
            </button>
          </div>
        </div>
      </AppCard>

      {isFullscreenOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 sm:p-8"
          onClick={() => setIsFullscreenOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-sm bg-white/15 px-3 py-2 text-sm text-white hover:bg-white/25 z-50"
            onClick={() => setIsFullscreenOpen(false)}
            aria-label="Fechar mídia em tela cheia"
          >
            Fechar
          </button>

          <div
            className="flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-full w-full max-w-7xl">
              {imageSrc && (
                <AppOptimizedImage
                  src={imageSrc}
                  alt={title}
                  fill
                  className={`object-contain ${imgClassName}`}
                  loading="lazy"
                  sizes="100vw"
                  quality={85}
                />
              )}
              {videoSrc && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
