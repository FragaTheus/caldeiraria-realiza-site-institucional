import { ContainerLayout } from "@/shared/layouts/section-layout";
import {
  ServicesCard,
  ServicesCardProps,
} from "../../components/services-cards";
import { FadeInWithIndex } from "@/shared/components/animate";

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
          <FadeInWithIndex key={i} index={i}>
            <ServicesCard {...c} />
          </FadeInWithIndex>
        ))}
      </div>
    </ContainerLayout>
  );
};

export default HomeServiceDesktopWrapper;
