"use client";

import useIsMobile from "../../hooks/useIsMobile";
import HowWeWorkDesktopWrapper from "./how-we-work-desktop-wtapper";
import HowWeWorkMobileWrapper from "./how-we-work-mobile-wrapper";

const HowWeWorkWrapper = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HowWeWorkMobileWrapper /> : <HowWeWorkDesktopWrapper />;
};

export default HowWeWorkWrapper;
