import Line from "@/shared/components/line";
import { AppH3 } from "@/shared/components/ui/app-h3";
import { AppCard } from "@/shared/components/ui/app-card";
import Image, { StaticImageData } from "next/image";
import { MdEngineering } from "react-icons/md";
import {
  FadeIn,
  FadeInDown,
  FadeInWithIndex,
} from "@/shared/components/animate";

export interface EngCapacityCardsProps {
  title: string;
  description?: string;
  imageSrc: StaticImageData;
}

const EngCapacityCard = ({ title, imageSrc }: EngCapacityCardsProps) => {
  return (
    <AppCard variant="outlined">
      <div className="flex flex-col text-left">
        <AppH3>{title}</AppH3>
        <Line className="max-w-2/3 mt-2" />
        <Image
          src={imageSrc}
          alt={title}
          className="w-auto m-auto h-65 mt-8 pointer-events-none"
          loading="lazy"
          sizes="(max-width: 768px) 80vw, 420px"
          quality={70}
        />
      </div>
    </AppCard>
  );
};

const EngDescriptionCard = ({
  title,
  imageSrc,
  description,
}: EngCapacityCardsProps) => {
  return (
    <AppCard className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-linear-320 bg-muted! text-white">
      <div className="text-left flex flex-col items-start justify-evenly whitespace-pre-line">
        <FadeInDown>
          <MdEngineering className="text-primary size-8" />
        </FadeInDown>
        <FadeInWithIndex index={0}>
          <AppH3 className="mt-4">{title}</AppH3>
        </FadeInWithIndex>
        <FadeInWithIndex index={1}>
          {description && (
            <h4 className="font-light mt-4 lg:w-2/3 text-lg">{description}</h4>
          )}
        </FadeInWithIndex>
      </div>
      <FadeIn>
        <Image
          src={imageSrc}
          alt={title}
          className="w-full m-auto h-auto pointer-events-none"
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={70}
        />
      </FadeIn>
    </AppCard>
  );
};

export { EngCapacityCard, EngDescriptionCard };
