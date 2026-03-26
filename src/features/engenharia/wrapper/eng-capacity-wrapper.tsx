import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import EngCapacityLayout from "../layout/eng-capacity-layout";
import textContent from "@/features/engenharia/text-content/engCapacityTextContent.json";
import travessaoImg from "@/shared/assets/travessao.png";
import carrinhoImg from "@/shared/assets/carrinho.png";
import comportaImg from "@/shared/assets/comporta.png";
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
    imageSrc: carrinhoImg,
  },
  {
    title: textContent.engenharia.capacidades.cards[2].titulo,
    imageSrc: travessaoImg,
  },
  {
    title: textContent.engenharia.capacidades.cards[1].titulo,
    imageSrc: comportaImg,
  },
] satisfies EngCapacityCardsProps[];

const cronogramaCard = {
  title: textContent.engenharia.capacidades.cards[3].titulo,
  description: textContent.engenharia.capacidades.descricao,
  imageSrc: cronogramaImg,
} satisfies EngCapacityCardsProps;

export default EngCapacityWrapper;
