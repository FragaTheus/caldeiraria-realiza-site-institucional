import { ContainerLayout } from "@/shared/layouts/section-layout";
import {
  ServicesCard,
  ServicesCardProps,
} from "../../components/services-cards";
import AnimateCard from "../../animate/home-services-animate";

interface HomeServiceDesktopWrapperProps {
  cards: ServicesCardProps[];
}

const HomeServiceDesktopWrapper = ({
  cards,
}: HomeServiceDesktopWrapperProps) => {
  return (
    <ContainerLayout>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <AnimateCard key={i} index={i}>
            <ServicesCard {...c} />
          </AnimateCard>
        ))}
      </div>
    </ContainerLayout>
  );
};

export default HomeServiceDesktopWrapper;
