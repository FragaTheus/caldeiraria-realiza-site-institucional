export interface QualityDataBookCardProps {
  Icon: React.ElementType;
  description: string;
}

const QualityDataBookTitleCard = ({ title }: { title: string }) => {
  return (
    <article className="border-white border bg-muted text-white p-4 lg:p-8 min-h-42 w-full max-w-2xs lg:max-w-full flex items-center justify-center ">
      <h3 className="text-3xl font-bold whitespace-pre-line">{title}</h3>
    </article>
  );
};

const QualityDataBookDescriptionCard = ({
  description,
}: {
  description: string;
}) => {
  return (
    <article className="border-white border bg-muted text-white p-4 lg:p-8 min-h-42 w-full max-w-2xs lg:max-w-full flex items-center justify-center ">
      <p className="text-base font-semibold whitespace-pre-line">
        {description}
      </p>
    </article>
  );
};

const QualityDataBookCard = ({
  Icon,
  description,
}: QualityDataBookCardProps) => {
  return (
    <article className="min-h-42 w-full max-w-2xs lg:max-w-full p-4 lg:p-8 flex flex-col justify-between border border-white bg-muted text-white">
      <Icon className="text-primary size-8" />
      <p className="text-base font-light mt-4 lg:mt-8">{description}</p>
    </article>
  );
};

export {
  QualityDataBookCard,
  QualityDataBookTitleCard,
  QualityDataBookDescriptionCard,
};
