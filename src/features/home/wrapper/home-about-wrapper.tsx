"use client";

import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import AboutContent, {
  AboutGridContentProps,
} from "../components/about-content";
import textContent from "@/features/home/text-content/aboutTextContent.json";
import { FaIndustry } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";
import { FaAward, FaCheck } from "react-icons/fa6";

const aboutGridDesktopContents = [
  {
    label: textContent.about_section.desktop.grid_1.label,
    text: textContent.about_section.desktop.grid_1.text,
    Icon: FaIndustry,
    isMuted: true,
  },
  {
    label: textContent.about_section.desktop.grid_2.label,
    text: textContent.about_section.desktop.grid_2.text,
    Icon: FaAward,
    isMuted: false,
  },
  {
    label: textContent.about_section.desktop.grid_3.label,
    text: textContent.about_section.desktop.grid_3.text,
    Icon: FaCheck,
    isMuted: false,
  },
] satisfies AboutGridContentProps[];

const aboutGridMobileContents = [
  {
    label: textContent.about_section.mobile.grid_1.label,
    text: textContent.about_section.mobile.grid_1.text,
    Icon: FaIndustry,
    isMuted: true,
  },
  {
    label: textContent.about_section.mobile.grid_2.label,
    text: textContent.about_section.mobile.grid_2.text,
    Icon: FaAward,
    isMuted: false,
  },
  {
    label: textContent.about_section.mobile.grid_3.label,
    text: textContent.about_section.mobile.grid_3.text,
    Icon: FaCheck,
    isMuted: false,
  },
] satisfies AboutGridContentProps[];

const HomeAboutWrapper = () => {
  const isMobile = useIsMobile();
  return (
    <AppSectionWrapper id="sobre">
      <AboutContent
        gridContents={
          isMobile ? aboutGridMobileContents : aboutGridDesktopContents
        }
      />
    </AppSectionWrapper>
  );
};

export default HomeAboutWrapper;
