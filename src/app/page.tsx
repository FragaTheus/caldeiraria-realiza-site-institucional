import HomeAboutWrapper from "@/features/home/wrapper/home-about-wrapper";
import HomeCtaWrapper from "@/features/home/wrapper/home-cta-wrapper";
import HomeHeroWrapper from "@/features/home/wrapper/home-hero-wrapper";
import HowWeWorkWrapper from "@/features/home/wrapper/how-work-wrappers/how-we-work-wrapper";
import HomeServiceWrapper from "@/features/home/wrapper/services-wrappers/home-services-wrapper";

export default function Home() {
  return (
    <main>
      <HomeHeroWrapper />
      <HomeAboutWrapper />
      <HomeServiceWrapper />
      <HowWeWorkWrapper />
      <HomeCtaWrapper />
    </main>
  );
}
