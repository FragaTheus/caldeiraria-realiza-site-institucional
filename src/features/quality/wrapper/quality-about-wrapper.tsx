import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import textContent from "@/features/quality/text-content/qualityAboutTextContent.json";
import { FaFire, FaMicroscope } from "react-icons/fa6";
import { AboutGridContentProps } from "@/shared/components/grid-content";
import QualityAboutLayout from "../layouts/quality-about-layout";
import { MdVerified } from "react-icons/md";

const QualityAboutWrapper = () => {
  return (
    <AppSectionWrapper id="quality-about">
      <QualityAboutLayout
        title={textContent.certifications_section.headline}
        gridContents={qualityGrids}
      />
    </AppSectionWrapper>
  );
};

const qualityGrids = [
  {
    label: textContent.certifications_section.badges.iso.label,
    text: textContent.certifications_section.badges.iso.description,
    Icon: MdVerified,
    isMuted: false,
  },
  {
    label: textContent.certifications_section.badges.asnt.label,
    text: textContent.certifications_section.badges.asnt.description,
    Icon: FaMicroscope,
    isMuted: false,
  },
  {
    label: textContent.certifications_section.badges.aws.label,
    text: textContent.certifications_section.badges.aws.description,
    Icon: FaFire,
    isMuted: true,
  },
] satisfies AboutGridContentProps[];

export default QualityAboutWrapper;
