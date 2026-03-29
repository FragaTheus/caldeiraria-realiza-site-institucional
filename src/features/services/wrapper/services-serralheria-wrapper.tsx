import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import ServicesLayout from "../layout/services-layout";
import textContent from "@/features/services/text-content/servicesSerralheriaTextContent.json";
import {
  TbBuildingBridge,
  TbLayoutGrid,
  TbShield,
  TbStairs,
} from "react-icons/tb";
import { BiHardHat } from "react-icons/bi";
import { BadgesProps } from "../component/services-badges";
import serralheriaImg from "@/shared/assets/serralheria.jpg";

const ServicesSerralheriaWrapper = () => {
  return (
    <AppSectionWrapper id="services-serralheria">
      <ServicesLayout
        imgSrc={serralheriaImg}
        Icon={TbBuildingBridge}
        title={textContent.serralheria.title}
        description={textContent.serralheria.description}
        badges={badgesImpl}
      />
    </AppSectionWrapper>
  );
};

const badgesImpl = [
  {
    Icon: TbLayoutGrid,
    item: textContent.serralheria.capacidades.item_1,
  },
  {
    Icon: TbShield,
    item: textContent.serralheria.capacidades.item_2,
  },
  {
    Icon: TbStairs,
    item: textContent.serralheria.capacidades.item_3,
  },
  {
    Icon: BiHardHat,
    item: textContent.serralheria.capacidades.item_4,
  },
] satisfies BadgesProps[];

export default ServicesSerralheriaWrapper;
