import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import EngCapacityLayout from "../layout/eng-capacity-layout";
import textContent from "@/features/engenharia/text-content/engCapacityTextContent.json";
import simulation3D from "@/shared/assets/simulation-3D.png";
import carImg from "@/shared/assets/car-3D.png";
import project2D from "@/shared/assets/project-2D.png";
import cronogramaImg from "@/shared/assets/cronograma.png";
import { EngCapacityCardsProps } from "../compoenents/eng-capacities-card";

const EngCapacityWrapper = () => {
  return (
    <AppSectionWrapper id="capacity">
      <EngCapacityLayout
        title={textContent.engenharia.capacidades.titulo}
        cards={cards}
        lastCard={cronogramaCard}
      />
    </AppSectionWrapper>
  );
};

const cards = [
  {
    title: textContent.engenharia.capacidades.cards[0].titulo,
    imageSrc: carImg,
  },
  {
    title: textContent.engenharia.capacidades.cards[2].titulo,
    imageSrc: simulation3D,
  },
  {
    title: textContent.engenharia.capacidades.cards[1].titulo,
    imageSrc: project2D,
  },
] satisfies EngCapacityCardsProps[];

const cronogramaCard = {
  title: textContent.engenharia.capacidades.cards[3].titulo,
  description: textContent.engenharia.capacidades.descricao,
  imageSrc: cronogramaImg,
} satisfies EngCapacityCardsProps;

export default EngCapacityWrapper;
