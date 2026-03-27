"use client";

import "swiper/css";

import textContent from "@/features/engenharia/text-content/engGalleryTextContent.json";
import { EngGalleryCardsProps } from "../compoenents/eng-gallery-cards";
import moinhoImg from "@/shared/assets/moinho.png";
import barraImg from "@/shared/assets/barra.png";
import estacaoImg from "@/shared/assets/controle.png";
import comportaImg from "@/shared/assets/comporta.png";
import carrinhoImg from "@/shared/assets/carrinho.png";
import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import EngGalleryLayout from "../layout/eng-gallery-layout";

const EngGalleryWrapper = () => {
  return (
    <SectionLayout id="eng-gallery">
      <ContainerLayout>
        <EngGalleryLayout
          cards={itens}
          title={textContent.engenharia.galeria.titulo}
          description={textContent.engenharia.galeria.descricao}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

const itens = [
  {
    description: textContent.engenharia.galeria.itens[0].subtitulo,
    imageUrl: moinhoImg,
  },
  {
    description: textContent.engenharia.galeria.itens[1].subtitulo,
    imageUrl: barraImg,
  },
  {
    description: textContent.engenharia.galeria.itens[2].subtitulo,
    imageUrl: estacaoImg,
  },
  {
    description: textContent.engenharia.galeria.itens[3].subtitulo,
    imageUrl: comportaImg,
  },
  {
    description: textContent.engenharia.galeria.itens[4].subtitulo,
    imageUrl: carrinhoImg,
  },
] satisfies EngGalleryCardsProps[];

export default EngGalleryWrapper;
