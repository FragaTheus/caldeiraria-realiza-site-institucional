import { AppP } from "@/shared/components/ui/app-p";
import { AppCard } from "@/shared/components/ui/app-card";
import Image, { StaticImageData } from "next/image";

export interface EngGalleryCardsProps {
  description: string;
  imageUrl: StaticImageData;
}

const EngGalleryCards = ({ description, imageUrl }: EngGalleryCardsProps) => {
  return (
    <AppCard className="w-full h-full flex flex-col justify-between bg-surface">
      <AppP className="font-semibold whitespace-pre-line text-sm">
        {description}
      </AppP>
      <Image
        src={imageUrl}
        alt={description}
        className="mt-8 w-auto max-h-40 m-auto"
        loading="lazy"
        sizes="(max-width: 768px) 80vw, 320px"
        quality={70}
      />
    </AppCard>
  );
};

export default EngGalleryCards;
