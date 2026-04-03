import { AppH3 } from "@/shared/components/ui/app-h3";
import { AppP } from "@/shared/components/ui/app-p";
import { AppCard } from "@/shared/components/ui/app-card";
import { FadeInUp } from "@/shared/components/animate";

export interface GridContentProps {
  step: string;
  title: string;
  description: string;
}

const GridContent = ({
  step,
  title,
  description,
  index,
}: GridContentProps & { index: number }) => {
  return (
    <FadeInUp delay={0.1 * index}>
      <AppCard className="relative flex flex-col bg-surface min-h-80 lg:min-h-90">
        <div>
          <AppH3 className="text-primary">{step}</AppH3>
        </div>
        <div>
          <AppH3 className="mt-4">{title}</AppH3>
        </div>
        <div>
          <AppP className="text-muted-light mt-10">{description}</AppP>
        </div>
      </AppCard>
    </FadeInUp>
  );
};

interface HowWeWorkCardProps {
  grids: GridContentProps[];
}

const HowWeWorkCard = ({ grids }: HowWeWorkCardProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
      {grids.map((grid, index) => (
        <GridContent key={index} {...grid} index={index} />
      ))}
    </div>
  );
};

export default HowWeWorkCard;
