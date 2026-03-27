import {
  EngCapacityCard,
  EngCapacityCardsProps,
  EngDescriptionCard,
} from "../compoenents/eng-capacities-card";

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
      <h1 className="tracking-tighter font-bold whitespace-pre-line">
        {title}
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mt-4">
        {cards.map((card, index) => (
          <EngCapacityCard key={index} {...card} />
        ))}
        <EngDescriptionCard {...lastCard} />
      </div>
    </div>
  );
};

export default EngCapacityLayout;
