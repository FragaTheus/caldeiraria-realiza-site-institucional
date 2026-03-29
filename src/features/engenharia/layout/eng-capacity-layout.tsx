import { AppH2 } from "@/shared/components/ui/app-h2";
import {
  EngCapacityCard,
  EngCapacityCardsProps,
  EngDescriptionCard,
} from "../compoenents/eng-capacities-card";
import { FadeInDown, FadeInWithIndex } from "@/shared/components/animate";

interface EngCapacityLayoutProps {
  lastCard: EngCapacityCardsProps;
  cards: EngCapacityCardsProps[];
  title: string;
}

const EngCapacityLayout = ({
  lastCard,
  cards,
  title,
}: EngCapacityLayoutProps) => {
  return (
    <div className="relative">
      <FadeInDown>
        <AppH2>{title}</AppH2>
      </FadeInDown>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mt-4">
        {cards.map((card, index) => (
          <FadeInWithIndex key={index} index={index}>
            <EngCapacityCard key={index} {...card} />
          </FadeInWithIndex>
        ))}
        <EngDescriptionCard {...lastCard} />
      </div>
    </div>
  );
};

export default EngCapacityLayout;
