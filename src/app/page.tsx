import HomeAboutWrapper from "@/features/home/wrapper/home-about-wrapper";
import HomeHeroWrapper from "@/features/home/wrapper/home-hero-wrapper";

export default function Home() {
  return (
    <main>
      <HomeHeroWrapper />
      <HomeAboutWrapper />
    </main>
  );
}
