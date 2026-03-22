import { ChevronRightIcon } from "@heroicons/react/16/solid";

export interface GridContentProps {
  step: string;
  title: string;
  description: string;
}

const GridContent = ({ step, title, description }: GridContentProps) => {
  return (
    <div className="flex flex-col relative">
      <h3 className="font-semibold text-primary">{step}</h3>
      <p className="font-semibold mt-4">{title}</p>
      <p className="text-muted-light mt-10">{description}</p>
    </div>
  );
};

interface HowWeWorkCardProps {
  grids: GridContentProps[];
}

const HowWeWorkCard = ({ grids }: HowWeWorkCardProps) => {
  return (
    <article className="bg-surface w-full rounded-sm p-4 lg:p-8 grid grid-cols-4 gap-4">
      {grids.map((grid, index) => (
        <GridContent key={index} {...grid} />
      ))}
    </article>
  );
};

export default HowWeWorkCard;
