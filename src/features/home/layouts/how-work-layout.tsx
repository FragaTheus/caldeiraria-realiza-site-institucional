import {
  MiniCard,
  MainCard,
  MiniCardProps,
  MainCardProps,
} from "../components/how-we-work-card";

interface HowWeWorkLayoutProps {
  miniCards: MiniCardProps[];
  mainCard: MainCardProps;
}

const HowWeWorkLayout = ({ miniCards, mainCard }: HowWeWorkLayoutProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-3 w-full gap-4">
        <div className="grid grid-cols-2 col-span-3 lg:col-span-2 gap-2 lg:gap-4">
          {miniCards.map((card, index) => (
            <MiniCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="col-span-3 lg:col-span-1">
          <MainCard title={mainCard.title} description={mainCard.description} />
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkLayout;
