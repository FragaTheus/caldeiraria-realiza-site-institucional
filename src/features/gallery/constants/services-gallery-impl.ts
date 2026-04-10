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
import fabCiclone from "@/shared/assets/services/fab-ciclone.jpeg";
import fabConexao from "@/shared/assets/services/fab-conexao.jpeg";
import projFabCiclone from "@/shared/assets/services/proj-fab-ciclone.jpeg";
import ensaio from "@/shared/assets/services/ensaio.png";
import fabSuporte from "@/shared/assets/services/fab-suporte.jpeg";
import fabProjEstrutura from "@/shared/assets/services/proj-fab-estrutura.jpeg";
import fabTerca from "@/shared/assets/services/fab-terca.jpeg";
import montCaminho from "@/shared/assets/services/mont-caminho.jpeg";
import fabGuarda from "@/shared/assets/services/fab-guarda.jpeg";
import fabPainel from "@/shared/assets/services/fab-painel.jpeg";
import montPainel from "@/shared/assets/services/painel.png";

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
  },
  {
    title: "Fabricação",
    description: "Ciclone Separador de Areia",
    imageSrc: fabCiclone
  },
  {
    title: "Fabricação e Montagem",
    description: "Ciclone e tubulação para recuperador de Areia.",
    videoSrc: "/fab-ciclone.mp4",
  },
  {
    title: "Fabricação",
    description: "Escada Marinheiro",
    videoSrc: "/fab-escada.mp4",
  },
  {
    title: "Fabricação",
    description: "Conexão TÊ em aço inox 304.",
    videoSrc: "/fab-conexao.mp4",
  },
  {
    title: "Fabricação",
    description: "Conexão TÊ em aço inox 304.",
    imageSrc: fabConexao,
  },
  {
    title: "Projeto e Fabricação",
    description: "Ciclone Separador de PVC",
    imageSrc: projFabCiclone,
  },
  {
    title: "Ensaio de Líquido Penetrante",
    description: "Inspetor ASNT próprio da Realiza.",
    imageSrc: ensaio,
  },
  {
    title: "Fabricação",
    description: "Suporte para conjunto de ventiladores.",
    imageSrc: fabSuporte,
  },
  {
    title: "Fabricação",
    description: "Rosca Transportadora.",
    videoSrc: "/fab-rosca.mp4",
  },
  {
    title: "Projeto, Fabricação e Montagem",
    description: "Estrutura Metálica",
    imageSrc: fabProjEstrutura,
  },
  {
    title: "Fabricação",
    description: "Terça Metálica",
    imageSrc: fabTerca,
  },
  {
    title: "Montagem",
    description: "Nivelamento e Alinhamento de caminho  rolamento para ponte rolante",
    imageSrc: montCaminho,
  },
  {
    title: "Fabricação",
    description: "Guarda Corpo Circular",
    imageSrc: fabGuarda,
  },
  {
    title: "Usinagem",
    description: "Suporte da Faca para Moinho",
    videoSrc: "/fab-suporte.mp4",
  },
  {
    title: "Usinagem",
    description: "Eixo e ponteiras.",
    videoSrc: "/usinagem-eixo.mp4",
  },
  {
    title: "Montagem",
    description: "Painel Elétrico.",
    imageSrc: fabPainel,
  },
  {
    title: "Montagem",
    description: "Painel Elétrico.",
    imageSrc: montPainel,
  }
] satisfies ServiceCardProps[];


export const galleryItems = [...galleryItemsMobile];