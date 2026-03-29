import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import ServicesLayout from "../layout/services-layout";
import textContent from "@/features/services/text-content/servicesSoldagemTextContent.json";
import { GiFlamer } from "react-icons/gi";
import { BadgesProps } from "../component/services-badges";
import {
  TbFlame,
  TbLayersLinked,
  TbMicroscope,
  TbUserCheck,
} from "react-icons/tb";
import soldagemImg from "@/shared/assets/soldagem.jpg";

const ServicesSoldagemWrapper = () => {
  return (
    <AppSectionWrapper id="services-soldagem">
      <ServicesLayout
        imgSrc={soldagemImg}
        Icon={GiFlamer}
        title={textContent.soldagem.title}
        description={textContent.soldagem.description}
        badges={badgesImpl}
      />
    </AppSectionWrapper>
  );
};

const badgesImpl = [
  {
    Icon: TbFlame,
    item: textContent.soldagem.capacidades.item_1,
  },
  {
    Icon: TbLayersLinked,
    item: textContent.soldagem.capacidades.item_2,
  },
  {
    Icon: TbUserCheck,
    item: textContent.soldagem.capacidades.item_3,
  },
  {
    Icon: TbMicroscope,
    item: textContent.soldagem.capacidades.item_4,
  },
] satisfies BadgesProps[];

export default ServicesSoldagemWrapper;
