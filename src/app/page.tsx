import HomeAboutWrapper from "@/features/home/wrapper/home-about-wrapper";
import HomeHeroWrapper from "@/features/home/wrapper/home-hero-wrapper";
import HomeServiceWrapper from "@/features/home/wrapper/home-services-wrapper";

export default function Home() {
  return (
    <main>
      <HomeHeroWrapper />
      <HomeAboutWrapper />
      <HomeServiceWrapper />
    </main>
  );
}
