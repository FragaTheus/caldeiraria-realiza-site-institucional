"use client";

import AppHeroCard from "@/shared/components/ui/app-card";
import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import { useEffect, useState } from "react";
import heroTextContent from "@/features/contato/text-content/contatoTextContent.json";
import heroImg from "@/shared/assets/hero-img.jpeg";

const MobileHeroWrapper = () => {
  return (
    <AppSectionWrapper>
      <AppHeroCard
        headline={heroTextContent.mobile.headline}
        title={heroTextContent.mobile.title}
        description={heroTextContent.mobile.description}
        cardDescription={heroTextContent.mobile.cardDescription}
        imageSrc={heroImg}
      />
    </AppSectionWrapper>
  );
};

const DesktopHeroWrapper = () => {
  return (
    <AppSectionWrapper>
      <AppHeroCard
        headline={heroTextContent.desktop.headline}
        title={heroTextContent.desktop.title}
        description={heroTextContent.desktop.description}
        cardDescription={heroTextContent.desktop.cardDescription}
        imageSrc={heroImg}
      />
    </AppSectionWrapper>
  );
};

const ContatoHeroWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileHeroWrapper /> : <DesktopHeroWrapper />;
};

export default ContatoHeroWrapper;
