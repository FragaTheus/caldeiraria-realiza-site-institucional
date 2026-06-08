import { AppH3 } from "@/shared/components/ui/app-h3";
import { AppP } from "@/shared/components/ui/app-p";
import { AppCard } from "@/shared/components/ui/app-card";
import { FadeInWithIndex } from "@/shared/components/animate";

export interface QualityDataBookCardProps {
  Icon: React.ElementType;
  description: string;
  index: number;
}

const QualityDataBookTitleCard = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => {
  return (
    <FadeInWithIndex
      index={index}
      className="min-h-42 w-full max-w-2xs lg:max-w-full"
    >
      <AppCard
        variant="outlined"
        className="border-white bg-muted text-white flex items-center justify-center w-full h-full"
      >
        <AppH3 className="text-3xl font-bold">{title}</AppH3>
      </AppCard>
    </FadeInWithIndex>
  );
};

const QualityDataBookDescriptionCard = ({
  description,
  index,
}: {
  index: number;
  description: string;
}) => {
  return (
    <FadeInWithIndex
      index={index}
      className=" min-h-42 w-full max-w-2xs lg:max-w-full "
    >
      <AppCard
        variant="outlined"
        className="border-white bg-muted text-white flex items-center justify-center w-full h-full"
      >
        <AppP className="font-semibold whitespace-pre-line">{description}</AppP>
      </AppCard>
    </FadeInWithIndex>
  );
};

const QualityDataBookCard = ({
  Icon,
  description,
  index,
}: QualityDataBookCardProps) => {
  return (
    <FadeInWithIndex
      index={index}
      className="min-h-42 w-full max-w-2xs lg:max-w-full"
    >
      <AppCard
        variant="outlined"
        className="border-white bg-muted text-white flex flex-col justify-between w-full h-full"
      >
        <Icon className="text-primary size-8" />
        <AppP className="font-light mt-4 lg:mt-8">{description}</AppP>
      </AppCard>
    </FadeInWithIndex>
  );
};

export {
  QualityDataBookCard,
  QualityDataBookTitleCard,
  QualityDataBookDescriptionCard,
};
