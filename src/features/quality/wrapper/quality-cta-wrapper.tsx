import CtaForm from "@/shared/components/home-cta-card";
import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import textContent from "@/features/quality/text-content/qualityCtaTextContent.json";

const CtaQualityWrapper = () => {
  return (
    <SectionLayout id="quality-cta" className="bg-muted">
      <ContainerLayout>
        <CtaForm
          title={textContent.cta_section.title}
          ctaText={textContent.cta_section.primary_cta}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default CtaQualityWrapper;
