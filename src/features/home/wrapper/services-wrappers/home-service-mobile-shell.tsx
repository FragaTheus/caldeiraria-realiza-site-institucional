"use client";

import dynamic from "next/dynamic";
import { ServicesCardProps } from "../../components/services-cards";
import servicesTextContents from "@/features/home/text-content/servicesTextContent.json";
import { FaSmog } from "react-icons/fa6";
import { FaCogs, FaFire, FaFlask, FaWarehouse } from "react-icons/fa";

const HomeServiceMobileWrapper = dynamic(
  () => import("./home-service-mobile-wrapper.tsx"),
  { ssr: false },
);

const { title_card, cards } = servicesTextContents.services_section;

const MOBILE_SERVICES_CARDS: ServicesCardProps[] = [
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

const HomeServiceMobileShell = () => {
  return (
    <div className="block lg:hidden">
      <HomeServiceMobileWrapper cards={MOBILE_SERVICES_CARDS} />
    </div>
  );
};

export default HomeServiceMobileShell;
