import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import textContent from "@/features/home/text-content/ctaTextContent.json";
import HomeCtaContent from "../components/home-cta-card";

const HomeCtaWrapper = () => {
  return (
    <SectionLayout className="bg-muted">
      <ContainerLayout>
        <HomeCtaContent
          title={textContent.cta_section.title}
          description={textContent.cta_section.description}
          ctaText={textContent.cta_section.primary_cta}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default HomeCtaWrapper;
