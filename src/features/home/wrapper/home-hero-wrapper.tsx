"use client";

import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import heroImg from "@/shared/assets/hero-img.jpeg";
import heroImg1 from "@/shared/assets/hero-img1.jpeg";
import heroImg2 from "@/shared/assets/hero-img2.jpeg";
import heroTextContent from "@/features/home/text-content/heroTextContent.json";
import AppHeroCard from "../components/home-hero-card";
import useIsMobile from "../hooks/useIsMobile";

const MobileHeroWrapper = () => {
  return (
    <AppSectionWrapper>
      <AppHeroCard
        headline={heroTextContent.hero.mobile.headline}
        title={heroTextContent.hero.mobile.title}
        description={heroTextContent.hero.mobile.description}
        cardDescription={heroTextContent.hero.mobile.cardDescription}
        imageSrc={imageSrc}
      />
    </AppSectionWrapper>
  );
};

const DesktopHeroWrapper = () => {
  return (
    <AppSectionWrapper>
      <AppHeroCard
        headline={heroTextContent.hero.desktop.headline}
        title={heroTextContent.hero.desktop.title}
        description={heroTextContent.hero.desktop.description}
        cardDescription={heroTextContent.hero.desktop.cardDescription}
        imageSrc={imageSrc}
      />
    </AppSectionWrapper>
  );
};

const HomeHeroWrapper = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHeroWrapper /> : <DesktopHeroWrapper />;
};

export default HomeHeroWrapper;

const imageSrc = [heroImg, heroImg1, heroImg2];
