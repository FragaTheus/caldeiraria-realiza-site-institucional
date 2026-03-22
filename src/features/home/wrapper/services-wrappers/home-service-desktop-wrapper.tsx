import { ContainerLayout } from "@/shared/layouts/section-layout";
import {
  ServicesCard,
  ServicesCardProps,
} from "../../components/services-cards";

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
          <ServicesCard key={i} {...c} />
        ))}
      </div>
    </ContainerLayout>
  );
};

export default HomeServiceDesktopWrapper;
