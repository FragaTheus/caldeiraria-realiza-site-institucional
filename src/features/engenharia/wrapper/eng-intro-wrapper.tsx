import { SectionLayout } from "@/shared/layouts/section-layout";
import IntroLayout from "@/shared/layouts/intro-layout";
import enginnerImg from "@/shared/assets/intro-enginner.jpg";
import textContent from "@/features/engenharia/text-content/engIntroTextContent.json";

const EngIntroWrapper = () => {
  return (
    <SectionLayout id="eng-intro">
      <IntroLayout
        id="eng-intro"
        title={textContent.engenharia.intro.titulo}
        description={textContent.engenharia.intro.descricao}
        imgSrc={enginnerImg}
      />
    </SectionLayout>
  );
};

export default EngIntroWrapper;
