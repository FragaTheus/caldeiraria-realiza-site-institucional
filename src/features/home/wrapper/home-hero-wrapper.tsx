"use client";

import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import { useEffect, useState } from "react";
import heroImg from "@/shared/assets/hero-img.jpeg";
import heroTextContent from "@/features/home/text-content/heroTextContent.json";
import AppHeroCard from "../components/home-hero-card";

const MobileHeroWrapper = () => {
  return (
    <AppSectionWrapper>
      <AppHeroCard
        headline={heroTextContent.hero.mobile.headline}
        title={heroTextContent.hero.mobile.title}
        description={heroTextContent.hero.mobile.description}
        cardDescription={heroTextContent.hero.mobile.cta}
        imageSrc={heroImg}
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
        cardDescription={heroTextContent.hero.desktop.cta}
        imageSrc={heroImg}
      />
    </AppSectionWrapper>
  );
};

const HomeHeroWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileHeroWrapper /> : <DesktopHeroWrapper />;
};

export default HomeHeroWrapper;
