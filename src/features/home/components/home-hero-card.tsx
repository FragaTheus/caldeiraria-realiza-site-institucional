import Image, { StaticImageData } from "next/image";

interface AppHeroCardProps {
  headline: string;
  title: string;
  description: string;
  cardDescription?: string;
  imageSrc: StaticImageData;
}

const AppHeroCard = ({
  headline,
  title,
  description,
  cardDescription,
  imageSrc,
}: AppHeroCardProps) => {
  return (
    <article className="w-full rounded-md grid grid-cols-1 md:grid-cols-2 p-4 md:p-12 bg-surface gap-4">
      <div className="flex flex-col md:mr-10">
        <small className="text-primary">{headline}</small>
        <h2 className="mt-6 md:mt-12 md:text-h1">{title}</h2>
        <div className="h-px w-full bg-muted-light mt-2 md:mt-4 opacity-20" />
        <p className="mt-8 md:mt-16">{description}</p>
      </div>

      <div className="flex flex-col">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover max-h-40 md:max-h-full rounded-sm"
        />
        <small className="text-muted-light mt-2 m-auto">
          {cardDescription}
        </small>
      </div>
    </article>
  );
};

export default AppHeroCard;
