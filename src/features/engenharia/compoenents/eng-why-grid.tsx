import { FadeInWithIndex } from "@/shared/components/animate";
import { AppH3 } from "@/shared/components/ui/app-h3";
import { AppP } from "@/shared/components/ui/app-p";

export interface EngWhyGridProps {
  Icon: React.ElementType;
  index: number;
  title: string;
  desc: string;
}

const EngWhyGrid = ({ Icon, index, title, desc }: EngWhyGridProps) => {
  return (
    <FadeInWithIndex index={index} className="w-full">
      <Icon className="size-8 text-primary" />
      <AppH3 className="mt-4 lg:mt-8">{title}</AppH3>
      <AppP className="font-light mt-4 lg:mt-8 whitespace-pre-line lg:whitespace-normal">
        {desc}
      </AppP>
    </FadeInWithIndex>
  );
};

export default EngWhyGrid;
