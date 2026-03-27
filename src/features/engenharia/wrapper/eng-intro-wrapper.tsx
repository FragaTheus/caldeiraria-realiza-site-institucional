import EngIntroContent from "../compoenents/eng-intro-content";
import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import engIntroImg from "@/shared/assets/eng-intro.png";
import textContent from "@/features/engenharia/text-content/engIntroTextContent.json";

const EngIntroWrapper = () => {
  return (
    <SectionLayout id="eng-intro">
      <ContainerLayout className="min-h-svh lg:min-h-[80svh] flex items-center justify-center">
        <EngIntroContent
          img1={engIntroImg}
          eyebrow={textContent.engenharia.intro.eyebrow}
          title={textContent.engenharia.intro.titulo}
          description={textContent.engenharia.intro.descricao}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default EngIntroWrapper;
