import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/layouts/section-layout";
import HomeHeroBackground from "../components/home-hero-background";
import HeroContent from "../components/home-hero-card";
import textContent from "@/features/home/text-content/heroTextContent.json";

const HomeHeroWrapper = () => {
  return (
    <SectionLayout id="hero" className="h-svh">
      <HomeHeroBackground />
      <ContainerLayout className="text-white h-full w-full flex items-center">
        <HeroContent
          headline={textContent.hero.desktop.headline}
          title={textContent.hero.desktop.title}
          ctaText={textContent.hero.desktop.ctaText}
          whatsappText={textContent.hero.desktop.whatsappText}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default HomeHeroWrapper;
