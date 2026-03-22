import {
  AnimateDescription,
  AnimateIcon,
  AnimateTitle,
} from "../animate/home-about-animate";

export interface GridContentProps {
  step: string;
  title: string;
  description: string;
}

const GridContent = ({ step, title, description }: GridContentProps) => {
  return (
    <div className="flex flex-col relative">
      <AnimateIcon>
        <h3 className="font-semibold text-primary">{step}</h3>
      </AnimateIcon>
      <AnimateTitle>
        <p className="font-semibold mt-4">{title}</p>
      </AnimateTitle>
      <AnimateDescription>
        <p className="text-muted-light mt-10 mr-8">{description}</p>
      </AnimateDescription>
    </div>
  );
};

interface HowWeWorkCardProps {
  grids: GridContentProps[];
}

const HowWeWorkCard = ({ grids }: HowWeWorkCardProps) => {
  return (
    <article className="bg-surface w-full rounded-sm p-4 lg:p-8 grid grid-cols-4 gap-8">
      {grids.map((grid, index) => (
        <GridContent key={index} {...grid} />
      ))}
    </article>
  );
};

export default HowWeWorkCard;
