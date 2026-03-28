import Image, { StaticImageData } from "next/image";

export interface EngGalleryCardsProps {
  description: string;
  imageUrl: StaticImageData;
}

const EngGalleryCards = ({ description, imageUrl }: EngGalleryCardsProps) => {
  return (
    <article className="p-4 w-full h-full flex flex-col justify-between bg-surface">
      <p className="font-semibold whitespace-pre-line text-sm">{description}</p>
      <Image
        src={imageUrl}
        alt={description}
        className="mt-8 w-auto max-h-40 m-auto"
      />
    </article>
  );
};

export default EngGalleryCards;
