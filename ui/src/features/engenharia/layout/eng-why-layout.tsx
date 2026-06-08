import { AppH2 } from "@/shared/components/ui/app-h2";
import { AppCard } from "@/shared/components/ui/app-card";
import EngWhyGrid, { EngWhyGridProps } from "../compoenents/eng-why-grid";
import { FadeInRight } from "@/shared/components/animate";

interface EngWhyLayoutProps {
  title: string;
  cards: EngWhyGridProps[];
}

const EngWhyLayout = ({ title, cards }: EngWhyLayoutProps) => {
  return (
    <div>
      <FadeInRight>
        <AppH2 className="text-left">{title}</AppH2>
      </FadeInRight>
      <AppCard className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 bg-muted! text-white">
        {cards.map((card, index) => (
          <EngWhyGrid key={index} {...card} />
        ))}
      </AppCard>
    </div>
  );
};

export default EngWhyLayout;
