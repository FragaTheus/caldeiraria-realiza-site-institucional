"use client";

import {
  FaIndustry,
  FaCogs,
  FaFire,
  FaWarehouse,
  FaFlask,
} from "react-icons/fa";

import { SectionLayout } from "@/shared/layouts/section-layout";
import HomeServiceMobileWrapper from "./home-service-mobile-wrapper.tsx";
import HomeServiceDesktopWrapper from "./home-service-desktop-wrapper";
import servicesTextContents from "@/features/home/text-content/servicesTextContent.json";
import { ServicesCardProps } from "../../components/services-cards.js";
import useIsMobile from "../../hooks/useIsMobile";
import { FaSmog } from "react-icons/fa6";

const HomeServiceWrapper = () => {
  const isMobile = useIsMobile();
  return (
    <SectionLayout id="atuacao">
      {isMobile ? (
        <HomeServiceMobileWrapper cards={SERVICES_CARDS} />
      ) : (
        <HomeServiceDesktopWrapper cards={SERVICES_CARDS} />
      )}
    </SectionLayout>
  );
};

export default HomeServiceWrapper;

const { title_card, cards } = servicesTextContents.services_section;

export const SERVICES_CARDS: ServicesCardProps[] = [
  {
    isTitleCard: true,
    title: title_card.title,
  },
  {
    isTitleCard: false,
    headerTitle: cards.caldeiraria.headerTitle,
    HeaderIcon: FaSmog,
    description: cards.caldeiraria.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.usinagem.headerTitle,
    HeaderIcon: FaCogs,
    description: cards.usinagem.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.soldas.headerTitle,
    HeaderIcon: FaFire,
    description: cards.soldas.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.serralheria.headerTitle,
    HeaderIcon: FaWarehouse,
    description: cards.serralheria.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.engenharia.headerTitle,
    HeaderIcon: FaFlask,
    description: cards.engenharia.description,
  },
];
