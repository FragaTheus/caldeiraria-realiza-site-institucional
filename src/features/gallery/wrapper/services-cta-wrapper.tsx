import CtaForm from "@/shared/components/app-cta-card";
import textContent from "@/features/gallery/text-content/servicesCtaTextContent.json";
import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";

const ServicesCtaWrapper = () => {
  return (
    <SectionLayout id="gallery-cta" className="bg-muted">
      <ContainerLayout>
        <CtaForm
          title={textContent.cta_section.title}
          ctaText={textContent.cta_section.primary_cta}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default ServicesCtaWrapper;
