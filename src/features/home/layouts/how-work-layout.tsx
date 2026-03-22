import {
  MiniCard,
  MainCard,
  MiniCardProps,
} from "../components/how-we-work-card";

interface HowWeWorkLayoutProps {
  miniCards: MiniCardProps[];
}

const HowWeWorkLayout = ({ miniCards }: HowWeWorkLayoutProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1>Como funciona o processo</h1>
      <div className="grid grid-cols-3 w-full gap-4">
        <div className="grid grid-cols-2 col-span-3 lg:col-span-2 gap-2 lg:gap-4">
          {miniCards.map((card, index) => (
            <MiniCard
              key={index}
              step={card.step}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="col-span-3 lg:col-span-1">
          <MainCard />
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkLayout;
