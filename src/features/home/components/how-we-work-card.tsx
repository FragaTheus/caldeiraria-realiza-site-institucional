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
    <article className="flex flex-col relative bg-surface p-4 lg:p-8">
      <AnimateIcon>
        <h3 className="font-semibold text-primary">{step}</h3>
      </AnimateIcon>
      <AnimateTitle>
        <p className="font-semibold mt-4">{title}</p>
      </AnimateTitle>
      <AnimateDescription>
        <p className="text-muted-light mt-10">{description}</p>
      </AnimateDescription>
    </article>
  );
};

interface HowWeWorkCardProps {
  grids: GridContentProps[];
}

const HowWeWorkCard = ({ grids }: HowWeWorkCardProps) => {
  return (
    <article className="w-full grid grid-cols-4 gap-8">
      {grids.map((grid, index) => (
        <GridContent key={index} {...grid} />
      ))}
    </article>
  );
};

export default HowWeWorkCard;
