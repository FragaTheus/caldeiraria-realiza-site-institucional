import EngWhyCard, { EngWhyCardProps } from "../compoenents/eng-why-card";

interface EngWhyLayoutProps {
  title: string;
  cards: EngWhyCardProps[];
}

const EngWhyLayout = ({ title, cards }: EngWhyLayoutProps) => {
  return (
    <div>
      <h2 className="text-left tracking-tighter whitespace-pre-line font-black text-4xl">
        {title}
      </h2>
      <article className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 bg-muted text-white">
        {cards.map((card, index) => (
          <EngWhyCard key={index} {...card} />
        ))}
      </article>
    </div>
  );
};

export default EngWhyLayout;
