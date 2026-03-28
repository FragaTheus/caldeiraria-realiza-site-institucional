import Image, { StaticImageData } from "next/image";
import { FaIndent } from "react-icons/fa6";

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
    <article className="bg-surface grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-8 gap-2">
      <div className="w-full h-full flex flex-col justify-evenly gap-4">
        <Icon className="text-primary size-8" />
        <h3 className="text-2xl font-semibold whitespace-pre-line">{title}</h3>
        <p className="font-light text-base lg:max-w-3/4">{description}</p>
      </div>
      <Image src={imageSrc} alt={title} className="w-full max-h-80" />
    </article>
  );
};

export default QualityCertificationCard;
