import IntroLayout from "@/shared/layouts/intro-layout";
import textContent from "@/features/services/text-content/servicesIntroSectionLayout.json";
import serviceIntroImg from "@/shared/assets/intro-services.jpg";

const ServicesIntroWrapper = () => {
  return (
    <IntroLayout
      id="service-intro"
      small={textContent.services_intro.eyebrow}
      title={textContent.services_intro.headline}
      description={textContent.services_intro.description}
      imgSrc={serviceIntroImg}
      imgClassname="object-[90%_50%]!"
    />
  );
};

export default ServicesIntroWrapper;
