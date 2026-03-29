import CtaForm from "@/shared/components/app-cta-card";
import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import textContent from "@/features/engenharia/text-content/engCtaTextContent.json";

const EngCtaWrapper = () => {
  return (
    <SectionLayout id="eng-cta">
      <ContainerLayout>
        <CtaForm
          title={textContent.engenharia.cta.titulo}
          className="text-black! border-muted/20!"
          ctaText={textContent.engenharia.cta.ctaText}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default EngCtaWrapper;
