import { AppH3 } from "@/shared/components/ui/app-h3";
import { AppP } from "@/shared/components/ui/app-p";
import { AppCard } from "@/shared/components/ui/app-card";
import Image, { StaticImageData } from "next/image";

export interface QualityCertificationCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

const QualityCertificationCard = ({
  Icon,
  title,
  description,
  imageSrc,
}: QualityCertificationCardProps) => {
  return (
    <AppCard className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className="w-full h-full flex flex-col justify-evenly gap-4">
        <Icon className="text-primary size-8" />
        <AppH3>{title}</AppH3>
        <AppP className="font-light lg:max-w-3/4">{description}</AppP>
      </div>
      <Image
        src={imageSrc}
        alt={title}
        className="w-full max-h-80"
        loading="lazy"
        sizes="(max-width: 1024px) 100vw, 50vw"
        quality={70}
      />
    </AppCard>
  );
};

export default QualityCertificationCard;
