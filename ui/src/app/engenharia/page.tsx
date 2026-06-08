import dynamic from "next/dynamic";
import EngCapacityWrapper from "@/features/engenharia/wrapper/eng-capacity-wrapper";
import EngCtaWrapper from "@/features/engenharia/wrapper/eng-cta-wrapper";
import EngIntroWrapper from "@/features/engenharia/wrapper/eng-intro-wrapper";
import EngWhyWrapper from "@/features/engenharia/wrapper/eng-why-wrapper";

const EngGalleryWrapper = dynamic(
  () => import("@/features/engenharia/wrapper/eng-gallery-wrapper"),
);

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
