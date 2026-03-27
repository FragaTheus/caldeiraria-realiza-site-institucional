import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import EngWhyLayout from "../layout/eng-why-layout";
import textContent from "@/features/engenharia/text-content/engWhyTextContent.json";
import { EngWhyCardProps } from "../compoenents/eng-why-card";
import { FaFlask, FaIdCard, FaIndustry, FaLink } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

const EngWhyWrapper = () => {
  return (
    <SectionLayout id="eng-why">
      <ContainerLayout>
        <EngWhyLayout
          title={textContent.engenharia.diferenciais.titulo}
          cards={cards}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

const cards = [
  {
    Icon: FaLink,
    title: textContent.engenharia.diferenciais.itens[0].titulo,
    desc: textContent.engenharia.diferenciais.itens[0].descricao,
  },
  {
    Icon: FaFlask,
    title: textContent.engenharia.diferenciais.itens[1].titulo,
    desc: textContent.engenharia.diferenciais.itens[1].descricao,
  },
  {
    Icon: FaIdCard,
    title: textContent.engenharia.diferenciais.itens[2].titulo,
    desc: textContent.engenharia.diferenciais.itens[2].descricao,
  },
  {
    Icon: FaFileAlt,
    title: textContent.engenharia.diferenciais.itens[3].titulo,
    desc: textContent.engenharia.diferenciais.itens[3].descricao,
  },
] satisfies EngWhyCardProps[];

export default EngWhyWrapper;
