"use client";

import "swiper/css";

import textContent from "@/features/engenharia/text-content/engGalleryTextContent.json";
import EngGalleryCards, {
  EngGalleryCardsProps,
} from "../compoenents/eng-gallery-cards";
import moinhoImg from "@/shared/assets/moinho.png";
import barraImg from "@/shared/assets/barra.png";
import estacaoImg from "@/shared/assets/controle.png";
import comportaImg from "@/shared/assets/comporta.png";
import carrinhoImg from "@/shared/assets/carrinho.png";
import { FaIndustry } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";

const EngGalleryWrapper = () => {
  return (
    <SectionLayout id="galeria">
      <ContainerLayout>
        <h1 className="text-left tracking-tighter whitespace-pre-line">
          {textContent.engenharia.galeria.titulo}
        </h1>
      </ContainerLayout>
      <Swiper loop className="w-full">
        {itens.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full max-w-7xl mx-auto p-4">
              <EngGalleryCards {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionLayout>
  );
};

const itens = [
  {
    title: textContent.engenharia.galeria.itens[0].titulo,
    description: textContent.engenharia.galeria.itens[0].subtitulo,
    Icon: FaIndustry,
    imageUrl: moinhoImg,
  },
  {
    title: textContent.engenharia.galeria.itens[1].titulo,
    description: textContent.engenharia.galeria.itens[1].subtitulo,
    Icon: FaIndustry,
    imageUrl: barraImg,
  },
  {
    title: textContent.engenharia.galeria.itens[2].titulo,
    description: textContent.engenharia.galeria.itens[2].subtitulo,
    Icon: FaIndustry,
    imageUrl: estacaoImg,
  },
  {
    title: textContent.engenharia.galeria.itens[3].titulo,
    description: textContent.engenharia.galeria.itens[3].subtitulo,
    Icon: FaIndustry,
    imageUrl: comportaImg,
  },
  {
    title: textContent.engenharia.galeria.itens[4].titulo,
    description: textContent.engenharia.galeria.itens[4].subtitulo,
    Icon: FaIndustry,
    imageUrl: carrinhoImg,
  },
] satisfies EngGalleryCardsProps[];

export default EngGalleryWrapper;
