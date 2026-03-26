import EngCapacityCard, {
  EngCapacityCardProps,
} from "../compoenents/eng-capacities-card";

interface EngCapacityLayoutProps {
  cards: EngCapacityCardProps[];
  title: string;
}

const EngCapacityLayout = ({ cards, title }: EngCapacityLayoutProps) => {
  return (
    <div>
      <h1 className="tracking-tighter font-bold">{title}</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mt-4">
        {cards.map((card, index) => (
          <EngCapacityCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default EngCapacityLayout;
