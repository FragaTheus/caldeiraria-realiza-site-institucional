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

const HomeServiceWrapper = () => {
  const isMobile = useIsMobile();
  return (
    <SectionLayout>
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
    HeaderIcon: FaIndustry,
    subtitle: cards.caldeiraria.subtitle,
    description: cards.caldeiraria.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.usinagem.headerTitle,
    HeaderIcon: FaCogs,
    subtitle: cards.usinagem.subtitle,
    description: cards.usinagem.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.soldas.headerTitle,
    HeaderIcon: FaFire,
    subtitle: cards.soldas.subtitle,
    description: cards.soldas.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.serralheria.headerTitle,
    HeaderIcon: FaWarehouse,
    subtitle: cards.serralheria.subtitle,
    description: cards.serralheria.description,
  },
  {
    isTitleCard: false,
    headerTitle: cards.ensaio.headerTitle,
    HeaderIcon: FaFlask,
    subtitle: cards.ensaio.subtitle,
    description: cards.ensaio.description,
    isLastCard: true,
  },
];
