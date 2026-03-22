import HomeAboutWrapper from "@/features/home/wrapper/home-about-wrapper";
import HomeHeroWrapper from "@/features/home/wrapper/home-hero-wrapper";
import HowWeWorkWrapper from "@/features/home/wrapper/how-work-wrappers/how-we-work-wrapper";
import HomeServiceWrapper from "@/features/home/wrapper/services-wrappers/home-services-wrapper";
import WhyWrapper from "@/features/home/wrapper/why-wrapper";

export default function Home() {
  return (
    <main>
      <HomeHeroWrapper />
      <HomeAboutWrapper />
      <HomeServiceWrapper />
      <WhyWrapper />
      <HowWeWorkWrapper />
    </main>
  );
}
