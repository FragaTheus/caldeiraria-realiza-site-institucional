import IntroLayout from "@/shared/layouts/intro-layout";
import textContent from "@/features/quality/text-content/qualityIntroTextContent.json";
import qualityIntroImg from "@/shared/assets/intro-quality.jpg";

const QualityIntroWrapper = () => {
  return (
    <IntroLayout
      id="quality-intro"
      small={textContent.quality_intro.eyebrow}
      title={textContent.quality_intro.headline}
      description={textContent.quality_intro.description}
      imgSrc={qualityIntroImg}
      imgClassname="object-[50%_40%]"
    />
  );
};

export default QualityIntroWrapper;
