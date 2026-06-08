import dynamic from "next/dynamic";
import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";

const CtaForm = dynamic(() => import("@/shared/components/app-cta-card"));
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
