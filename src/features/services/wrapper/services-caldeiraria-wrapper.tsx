import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import ServicesLayout from "../layout/services-layout";
import textContent from "@/features/services/text-content/servicesCaldeirariaTextContent.json";
import {
  TbAtom,
  TbBuildingFactory2,
  TbCircleDot,
  TbForklift,
  TbPackages,
} from "react-icons/tb";
import { BadgesProps } from "../component/services-badges";
import caldeirariaImg from "@/shared/assets/caldeiraria.jpg";

const ServicesCaldeirariaWrapper = () => {
  return (
    <AppSectionWrapper id="services-caldeiraria">
      <ServicesLayout
        imgSrc={caldeirariaImg}
        Icon={TbBuildingFactory2}
        title={textContent.caldeiraria.title}
        description={textContent.caldeiraria.description}
        badges={badgesImpl}
      />
    </AppSectionWrapper>
  );
};

const badgesImpl = [
  {
    Icon: TbForklift,
    item: textContent.caldeiraria.capacidades.item_1,
  },
  {
    Icon: TbPackages,
    item: textContent.caldeiraria.capacidades.item_2,
  },
  {
    Icon: TbAtom,
    item: textContent.caldeiraria.capacidades.item_3,
  },
  {
    Icon: TbCircleDot,
    item: textContent.caldeiraria.capacidades.item_4,
  },
] satisfies BadgesProps[];

export default ServicesCaldeirariaWrapper;
