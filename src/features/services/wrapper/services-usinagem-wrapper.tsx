import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import ServicesLayout from "../layout/services-layout";
import textContent from "@/features/services/text-content/servicesUsinagemTextContent.json";
import { GiDrill } from "react-icons/gi";
import { BadgesProps } from "../component/services-badges";
import { TbCpu, TbSettings, TbStack2, TbTool } from "react-icons/tb";
import usinagemImg from "@/shared/assets/usinagem.jpg";

const ServicesUsinagemWrapper = () => {
  return (
    <AppSectionWrapper id="services-usinagem">
      <ServicesLayout
        imgSrc={usinagemImg}
        Icon={GiDrill}
        title={textContent.usinagem.title}
        description={textContent.usinagem.description}
        badges={badgesImpl}
      />
    </AppSectionWrapper>
  );
};

const badgesImpl = [
  {
    Icon: TbCpu,
    item: textContent.usinagem.capacidades.item_1,
  },
  {
    Icon: TbTool,
    item: textContent.usinagem.capacidades.item_2,
  },
  {
    Icon: TbSettings,
    item: textContent.usinagem.capacidades.item_3,
  },
  {
    Icon: TbStack2,
    item: textContent.usinagem.capacidades.item_4,
  },
] satisfies BadgesProps[];

export default ServicesUsinagemWrapper;
