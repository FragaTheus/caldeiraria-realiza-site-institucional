import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import textContent from "@/features/home/text-content/ctaTextContent.json";
import HomeCtaContent from "../../../shared/components/home-cta-card";

const HomeCtaWrapper = () => {
  return (
    <SectionLayout id="cta" className="bg-muted">
      <ContainerLayout>
        <HomeCtaContent
          title={textContent.cta_section.title}
          ctaText={textContent.cta_section.cta}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default HomeCtaWrapper;
