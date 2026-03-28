import Line from "@/shared/components/line";
import Image, { StaticImageData } from "next/image";
import { BsProjector } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";

export interface EngCapacityCardsProps {
  title: string;
  description?: string;
  imageSrc: StaticImageData;
}

const EngCapacityCard = ({ title, imageSrc }: EngCapacityCardsProps) => {
  return (
    <article className=" border p-4 lg:p-8">
      <div className="flex flex-col text-left">
        <h3 className="whitespace-pre-line text-2xl">{title}</h3>
        <Line className="max-w-2/3 mt-2" />
        <Image
          src={imageSrc}
          alt={title}
          className="w-auto m-auto h-65 mt-8 pointer-events-none"
        />
      </div>
    </article>
  );
};

const EngDescriptionCard = ({
  title,
  imageSrc,
  description,
}: EngCapacityCardsProps) => {
  return (
    <article className="border p-4 lg:p-8 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-linear-320 bg-muted text-white">
      <div className="text-left flex flex-col items-start justify-evenly whitespace-pre-line">
        <MdEngineering className="text-primary size-8" />
        <h3 className="text-2xl mt-4">{title}</h3>
        {description && (
          <h4 className="font-light mt-4 lg:w-2/3 text-lg">{description}</h4>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        className="w-full m-auto h-auto pointer-events-none"
      />
    </article>
  );
};

export { EngCapacityCard, EngDescriptionCard };
