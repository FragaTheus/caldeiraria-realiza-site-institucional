import Image, { StaticImageData } from "next/image";
import React from "react";

export interface EngGalleryCardsProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  imageUrl: StaticImageData;
}

const EngGalleryCards = ({
  title,
  description,
  Icon,
  imageUrl,
}: EngGalleryCardsProps) => {
  return (
    <article className="w-full bg-surface  lg:min-h-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col">
        <div className="flex items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:gap-4">
          <h3 className="whitespace-pre-line lg:order-last">{title}</h3>
          <Icon className="size-5 lg:size-6 text-primary lg:order-first" />
        </div>
        <p className="whitespace-pre-line text-muted-light font-light mt-4 lg:text-h4 hidden lg:block">
          {description}
        </p>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        className="w-full max-h-40 lg:max-h-80 bg-white rounded-sm p-4 border border-muted/20 object-contain"
      />
    </article>
  );
};

export default EngGalleryCards;
