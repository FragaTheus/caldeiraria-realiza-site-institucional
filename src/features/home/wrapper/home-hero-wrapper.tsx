import AppSectionWrapper from "@/shared/wrapper/section-wrapper";
import heroImg from "@/shared/assets/hero-img.jpeg";
import heroImg1 from "@/shared/assets/hero-img1.jpeg";
import heroImg2 from "@/shared/assets/hero-img2.jpeg";
import heroTextContent from "@/features/home/text-content/heroTextContent.json";
import AppHeroCard from "../components/home-hero-card";

const HomeHeroWrapper = () => {
  return (
    <AppSectionWrapper id="hero">
      <AppHeroCard
        headline={heroTextContent.hero.desktop.headline}
        title={heroTextContent.hero.desktop.title}
        ctaText={heroTextContent.hero.desktop.ctaText}
        videoSrc="hero-video.mp4"
      />
    </AppSectionWrapper>
  );
};

export default HomeHeroWrapper;

const imageSrc = [heroImg, heroImg1, heroImg2];
