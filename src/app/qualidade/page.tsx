import QualityAboutWrapper from "@/features/quality/wrapper/quality-about-wrapper";
import QualityCertificationWrapper from "@/features/quality/wrapper/quality-certification-wrapper";
import QualityIntroWrapper from "@/features/quality/wrapper/quality-intro-wrapper";

export default function Quality() {
  return (
    <main>
      <QualityIntroWrapper />
      <QualityAboutWrapper />
      <QualityCertificationWrapper />
    </main>
  );
}
