import { ServiceCardProps } from "../component/service-card";
import fabTampa from "@/shared/assets/services/fab-tampa.jpeg";
import montTampa from "@/shared/assets/services/mont-tampa.jpeg";
import fabTub from "@/shared/assets/services/fab-tub.jpeg";
import instTub from "@/shared/assets/services/inst-tub.jpeg";
import calandragem from "@/shared/assets/services/calandragem.jpeg";
import calandragemCil from "@/shared/assets/services/calandragem-cil.jpeg";
import fabDuto from "@/shared/assets/services/fab-duto.jpeg";
import fabPlat from "@/shared/assets/services/fab-plat.jpeg";
import fabAl from "@/shared/assets/services/fab-al.jpeg";
import fabCesto from "@/shared/assets/services/fab-cesto.jpeg";
import projFabVentoinha from "@/shared/assets/services/proj-fab-ventoinha.jpeg";
import projFabEsteira from "@/shared/assets/services/proj-fab-esteira.jpeg";
import fabTanque from "@/shared/assets/services/fab-tanque.jpeg";


export const galleryItemsMobile = [
  {
    title: "Fabricação",
    description: "Tampa de Silo de Areia",
    imageSrc: fabTampa,
  },
  {
    title: "Montagem",
    description: "Tampa de Silo de Areia",
    imageSrc: montTampa,
  },
  {
    title: "Fabricação",
    description: "tubulação de Exaustão.",
    imageSrc: fabTub,
  },
  {
    title: "Instalação",
    description: "Tubulação de Exaustão",
    imageSrc: instTub,
  },
  {
    title: "Calandragem de peças cilíndricas e cônicas",
    description: "Capacidade até 10 mm de espessura.",
    imageSrc: calandragem,
  },
  {
    title: "Calandragem de cilindro e cone",
    description: "Diâmetro 3 metros x espessura 3 mm",
    imageSrc: calandragemCil,
  },
  {
    title: "Fabricação",
    description: "Duto de Ventilação",
    imageSrc: fabDuto,
  },
  {
    title: "Fabricação",
    description: "Plataforma de trabalho.",
    imageSrc: fabPlat,
  },
  {
    title: "Fabricação",
    description: "Alimentador com rosca transportadora.",
    imageSrc: fabAl,
  },
  {
    title: "Fabricação",
    description: "Cesto aramado inox 304.",
    imageSrc: fabCesto,
  },
  {
    title: "Projeto e Fabricação",
    description: "Ventoinha Centrífuga",
    imageSrc: projFabVentoinha,
  },
  {
    title: "Projeto e Fabricação",
    description: "Conjunto de Esteira Transportadora",
    imageSrc: projFabEsteira,
  },
  {
    title: "Fabricação",
    description: "Tanque de Fundo Autolimpante",
    imageSrc: fabTanque,
  }
] satisfies ServiceCardProps[];


export const galleryItems = [...galleryItemsMobile];