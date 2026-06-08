import QaulityCertificationLyout from "../layouts/quality-certification-layout";
import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import textContent from "@/features/quality/text-content/qualityCertificationsTextContent.json";
import { QualityCertificationCardProps } from "../components/quality-certification-card";
import { TbCertificate, TbFileDescription } from "react-icons/tb";
import epsImg from "@/shared/assets/eps.png";
import asntImg from "@/shared/assets/asnt.png";

const QualityCertificationWrapper = () => {
  return (
    <AppSectionWrapper id="quality-certification">
      <QaulityCertificationLyout
        title={textContent.certificates_section.headline}
        certifications={certifications}
      />
    </AppSectionWrapper>
  );
};

const certifications = [
  {
    Icon: TbFileDescription,
    title: textContent.certificates_section.certificate_1.title,
    description: textContent.certificates_section.certificate_1.description,
    imageSrc: epsImg,
  },
  {
    Icon: TbCertificate,
    title: textContent.certificates_section.certificate_2.title,
    description: textContent.certificates_section.certificate_2.description,
    imageSrc: asntImg,
  },
] satisfies QualityCertificationCardProps[];

export default QualityCertificationWrapper;
