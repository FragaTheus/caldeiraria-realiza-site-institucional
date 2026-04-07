import IntroLayout from "@/shared/layouts/intro-layout";
import textContent from "@/features/gallery/text-content/servicesIntroSectionLayout.json";
import serviceIntroImg from "@/shared/assets/intro-services.jpg";

const ServicesIntroWrapper = () => {
  return (
    <IntroLayout
      id="gallery-intro"
      small={textContent.services_intro.eyebrow}
      title={textContent.services_intro.headline}
      imgSrc={serviceIntroImg}
      imgClassname="object-[90%_50%]!"
    />
  );
};

export default ServicesIntroWrapper;
