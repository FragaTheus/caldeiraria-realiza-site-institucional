import Image, { StaticImageData } from "next/image";

export interface EngCapacityCardProps {
  title: string;
  imageSrc: StaticImageData;
  isLast?: boolean;
}

const EngCapacityCard = ({ title, imageSrc }: EngCapacityCardProps) => {
  return (
    <article className="rounded-sm border border-muted/20 p-4">
      <div className="flex flex-col items-center text-start">
        <h3>{title}</h3>
        <Image
          src={imageSrc}
          alt={title}
          className="w-auto m-auto h-65 mt-8 rounded-sm bg-white"
        />
      </div>
    </article>
  );
};

export default EngCapacityCard;
