import EngCapacityWrapper from "@/features/engenharia/wrapper/eng-capacity-wrapper";
import EngCtaWrapper from "@/features/engenharia/wrapper/eng-cta-wrapper";
import EngGalleryWrapper from "@/features/engenharia/wrapper/eng-gallery-wrapper";
import EngIntroWrapper from "@/features/engenharia/wrapper/eng-intro-wrapper";
import EngWhyWrapper from "@/features/engenharia/wrapper/eng-why-wrapper";

export default function Engenharia() {
  return (
    <main>
      <EngIntroWrapper />
      <EngCapacityWrapper />
      <EngGalleryWrapper />
      <EngWhyWrapper />
      <EngCtaWrapper />
    </main>
  );
}
