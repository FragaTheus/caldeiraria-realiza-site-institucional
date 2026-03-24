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
          title={title}
          ctaText={textContent.hero.desktop.ctaText}
        />
      </ContainerLayout>
    </SectionLayout>
  );
};

const title = {
  p1: textContent.hero.desktop.title.p1,
  span1: textContent.hero.desktop.title.span1,
  p2: textContent.hero.desktop.title.p2,
  span2: textContent.hero.desktop.title.span2,
};

export default HomeHeroWrapper;
